import * as FirestoreConnector from "../Paul/FirestoreConnector.js"

$(document).ready(function () {

    //admin.html
    $("#addItem").click(function(){
        var storeName = $('#inputGroceryStore').val();
        var food = $('#inputFoodCategory').val();
        var weight = $('#inputWeight').val();
        var expiry = $('#expiryDate').val();
        
        //current date
        var now = new Date();
        var currentDate = formatDate(now);
        
        if (isValid(storeName, food, weight, expiry) && isValidWeight(weight) && isValidExpiry(expiry, currentDate)) {
            createEntry(storeName, food, weight, expiry, currentDate);
            
            //send data from upper box into lower list
            var foodDonationItem =
                "<tr><td>" + storeName +
                "</td><td>" + food + "</td><td>" + weight +
                "</td><td>" + expiry + "</td></tr>";

            $(foodDonationItem).appendTo("#target");
        }
    
    });
    
    //admin.html
    $("#submitItems").click(function(){
        submitEntryToScores();
        $("#target").html(''); //for clearing the forms
    });

    //donate.html
    $("#weiyoung").click(function(){
        var store = $('#storeName').val();
        var food = $('#foodCategory').val();
        var weight = $('#foodAmount').val();
        var expiry = $('#expiryDate').val();
        
        //current date
        var now = new Date();
        var currentDate = formatDate(now);

        if (isValidWeight(weight) && isValidExpiry(expiry, currentDate)) {
            submitEntryToDonations(store, food, weight, expiry, currentDate);
            alert("submitted data to firebase!");
        }
        
    });


});
    
//array of Entries, "Add" adds stuff to this, "Submit" submits stuff to database
var submission = [];

function isValid(a, category, c, d) {
    if (a == null || category=="Choose..." || c == null || d == null) {
        alert("Please fill up all boxes.");
        return false;
    }
    return true;
}

function isValidWeight(weight) {
    if (isNaN(weight)) {
        alert("Invalid Food Weight! Please input only numbers.");
        return false;
    }

    if (weight <= 0) {
        alert("Invalid Food Weight! Please input a positive number.");
        return false;
    }

    if (weight > 1000) {
        alert("Invalid Food Weight! Please input a reasonable number (<1000).");
        return false;
    }
    return true;
}

function isValidExpiry(target, currentDate) {
    // regular expression to match required date format
    var re = /^((0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-[12]\d{3})$/;

    if (!target.match(re)) {
        alert("Invalid Expiry Date! Please input date in DD-MM-YYYY format.");
        // form.startdate.focus();
        return false;
    }

    //if time allows, compare the two dates, make sure expiry date is not passed.

    return true;
}

//creates an Entry
function createEntry(storeName, food, weight, expiry, dateString) {
    var entry = {
        store_id : storeName,
        food_name : food,
        food_weight : weight,
        expiry_date : expiry,
        current_date : dateString
    };

    submission.push(entry);
}

//sends array of Entries to backend database
function submitEntryToScores() {
    var completedSubmission = submission;
    submission = [];
    //send data to firebase
    FirestoreConnector.AddFromData(completedSubmission);
}

function submitEntryToDonations(storeName, food, weight, expiry, dateString) {
    var entry = {
        store_id : storeName,
        food_name : food,
        food_weight : weight,
        expiry_date : expiry,
        current_date : dateString
    };
    var entryArray = [];
    entryArray.push(entry);
    // send data to external JSON
    localStorage.setItem("whee", entryArray);
    alert("sent!");
}

function formatDate(date) {
    return "" + n(date.getDate()) + "-" + n((date.getMonth() + 1)) + "-" + date.getFullYear() + " "
    + n(date.getHours()) + ":" + n(date.getMinutes());
}

function n(num){
    return num > 9 ? "" + num: "0" + num;
}