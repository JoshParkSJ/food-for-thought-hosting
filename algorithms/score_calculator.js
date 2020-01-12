import * as FirestoreConnector from "../Paul/FirestoreConnector.js"

//create an array:
// var example = [
//     {"current_date":"11-01-2020 22:59","expiry_date":"31-01-2020","food_name":"Bread","food_weight":"100","store_id":"Safeway"},
//     {"current_date":"11-01-2020 22:59","expiry_date":"31-01-2020","food_name":"Grain","food_weight":"40","store_id":"Save-On-Foods"},
//     {"current_date":"11-01-2020 22:59","expiry_date":"31-01-2020","food_name":"Produce","food_weight":"46","store_id":"Save-On-Foods"},
//     {"current_date":"11-01-2020 22:59","expiry_date":"31-01-2020","food_name":"Produce","food_weight":"501","store_id":"Costco"},
//     {"current_date":"11-01-2020 22:59","expiry_date":"31-01-2020","food_name":"Produce","food_weight":"273","store_id":"Walmart"}

// ];

var scores = {};

function convertNestedObjToArrOfObj(result) {
    var res = [];
    var jsonResult = JSON.parse(result);
    for (var key in jsonResult) {
            console.log(jsonResult[key])
            res.push(jsonResult[key]);
    }
    return res;
}

export function datafy() {
    console.log("Running");
    FirestoreConnector.getLeaderboardData(true).then((result) => {
        var arrOfLeaderboardData = convertNestedObjToArrOfObj(result);
        arrOfLeaderboardData.forEach(element => { //for each element in the input
            var isExist = false;
            for (var key in scores) { //check if it exists in local js object 'scores'
                if (key == element.store_id) {
                    scores[key] += parseInt(element.food_weight, 10);
                    isExist = true;
                }
            }
            if (!isExist){
                scores[element.store_id] = parseInt(element.food_weight, 10);
            }
        });

        console.log(scores);
        
        //Keysorted is an array!
        var keysSorted = Object.keys(scores).sort(function(a,b){return scores[b]-scores[a]})
        console.log(keysSorted);
        
        var arrOfLeaders = [];
        for (var i = 0; i < keysSorted.length; i++) {
            var newObj = {};
            newObj[keysSorted[i]] = scores[keysSorted[i]];
            arrOfLeaders.push(newObj);
        } //scores.key or scores["key"];
        console.log(arrOfLeaders);

        //Modify webpage: 
        
        for (i = 0; i < arrOfLeaders.length; i++) {
            for (var key in arrOfLeaders[i]) {
                var storeName = key;
                var storeScore = arrOfLeaders[i][key];
                var storeEntry = 
                '<tr><th scope="row">' + (i+1) + '</th>' + '<td>' + 
                storeName + '</td><td>' + 
                storeScore + '</td></tr>';
                
                $(storeEntry).appendTo("#tableBody");
            }
    }
    });
}

// that contains store_id as key, and food_weight
// if key is found, add food_weight++
// else create new key, food_weight++


//TODO: iterate through database, for each item, get store_id and food_weight



