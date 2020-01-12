
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
        // donation_count_ref.on('value', function(snapshot) {
        //     console.log("SNAPSHOT: " + JSON.stringify(snapshot));
        //     firebase.database().ref("donation_info" + snapshot.val().donation_count).set(sampleObj[0]);
        //     donation_count_ref.set({"donation_count": snapshot.val().donation_count + 1});
        // });

        for (var i = 0; i < arrOfSample.length; i++)
        {
            firebase.database().ref("donation_info" + Math.round((new Date().getTime() / 1000)) + "Instance " + i).set(arrOfSample[i]);

        }
        

        alert("Hey");
    }