
        var sampleObj = [{
            current_date: 2,
            expiry_date: 1,
            food_name: "TEST",
            food_weight: " TEST ",
            store_id: "ID"
        },
        {
            current_date: 2,
            expiry_date: 1,
            food_name: "TEST1",
            food_weight: " TEST2 ",
            store_id: "ID"
        }];


    function submitClick() {
        this.AddFromData(this.sampleObj);
    }
   
    export function AddFromData(arrOfSample) {

        for (var i = 0; i < arrOfSample.length; i++)
        {
            firebase.database().ref("donations").child("donation_info" + Math.round((new Date().getTime() / 1000)) + "Instance " + i).set(arrOfSample[i]);

        }
    }

    export async function getLeaderboardData(isAll) {
        let getDonations = new Promise((resolve, reject) => {
            firebase.database().ref().child("donations").once("value", function(val)
            {
                resolve(val);
            });
        })

        let getEachDonation = new Promise((resolve, reject)=> {
            getDonations.then(function(snapshot) {
                //console.log(JSON.stringify(snapshot));
                //console.log(snapshot.length);
                resolve(JSON.stringify(snapshot));
            })
        })

        return Promise.all([getEachDonation]).then((result) => {
            //console.log(result);
            return result;
        });
    }