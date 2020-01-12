import { AddFromData } from '../Paul/FirestoreConnector.js';

$(document).ready(function () {

    //what does "Add" button do when pressed
    $("#addItem").click(function(){
        
        
        var storeName = $('#inputGroceryStore').val();
        var food = $('#inputFoodCategory').val();
        var weight = $('#inputWeight').val();
        var expiry = $('#expiryDate').val();

        createEntry(storeName, food, weight, expiry);

        // if (!isValidWeight(weight)) { 
        //     alert("Invalid Food Weight! Please input only numbers.");
        // } else if (!isValidExpiry(expiry)) { 
        //     alert("Invalid Expiry Date! Please input date in DD-MM-YYYY format.");
        // } else {
        //     createEntry(storeName, food, weight, expiry);
        // }

        var foodDonationItem = 
              "<tr><td>" + storeName + 
              "</td><td>" + food + "</td><td>" + weight +
              "</td><td>" + expiry + "</td></tr>";
        
        $(foodDonationItem).appendTo("#target"); 
    });

    //what does "Submit" button do when pressed
    $("#submitItems").click(function(){
        submitEntry();
    }); 

});

//array of Entries, "Add" adds stuff to this, "Submit" submits stuff to database
var submission = [];

function isValidWeight(weight) {
    return ((!isNaN(weight)) && weight > 0 && weight < 1000) ? true : false;
}

function isValidExpiry(expiry) {
    // regular expression to match required date format
    var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    if(form.startdate.value != '' && !form.startdate.value.match(re)) {
      alert("Invalid date format: " + form.startdate.value);
      form.startdate.focus();
      return false;
    }

    // regular expression to match required time format
    re = /^\d{1,2}:\d{2}([ap]m)?$/;

    if(form.starttime.value != '' && !form.starttime.value.match(re)) {
      alert("Invalid time format: " + form.starttime.value);
      form.starttime.focus();
      return false;
    }

    alert("All input fields have been validated!");
    return true;


    if ((!isNaN(expiry)) && expiry.length==10 && expiry.charAt(2)=='-') {
        
    }
}

//creates an Entry
function createEntry(storeName, food, weight, expiry) {

    //current date
    var today = new Date();
    var dateString = n(today.getDate()) + "-" + n((today.getMonth() + 1)) + "-" + today.getFullYear() + " "
                        + n(today.getHours()) + ":" + n(today.getMinutes());

    //this entry
    var entry = {
        store_id : storeName,
        food_name : food,
        food_weight : weight,
        expiry_date : expiry,
        current_date : dateString
    };

    //push this entry to submission
    submission.push(entry);
}

//sends array of Entries to backend database
function submitEntry() {
    var completedSubmission = submission;
    submission = [];

    //TEST
    for (var i = 0; i < completedSubmission.length; i++) {
         alert(JSON.stringify(completedSubmission[i]));
       }

    // return completedSubmission;
}

function n(num){
    return num > 9 ? "" + num: "0" + num;
}




