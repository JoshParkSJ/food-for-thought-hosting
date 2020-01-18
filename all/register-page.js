import * as AuthenticationController from "./Paul/Authentication/AuthenticationController.js"

$(document).ready(function(){
    var foodBank = '';
    
    $('#foodBank').click(function() {
        $('#foodBankButtonBig').css("background-color", '#5e72e4');
        $('#foodBank').css("color", "white");
        $('#groceryStoreButtonBig').css("background-color", 'white');
        $('#groceryStore').css("color", "black");

        //$('#registerButton').html("<a href='/dashboard/foodbank-index.html' style = 'color: white;'>Register</a>");
    });

    $('#groceryStore').click(function() {
        $('#groceryStoreButtonBig').css("background-color", '#5e72e4');
        $('#groceryStore').css("color", "white");
        $('#foodBankButtonBig').css("background-color", 'white');
        $('#foodBank').css("color", "black");


       // $('#registerButton').html("<a href='/dashboard/index.html' style = 'color: white;'>Register</a>");
    });

    $("#registerButton").click(function(e){
        e.preventDefault(); //to prevent auto-refreshing
        var username =  $('#inputUserame').val();
        var password =  $('#inputPassword').val();
        var email =  $('#inputEmail').val();
        var isFoodbank;
        if ($('#foodBank').css("color") == 'rgb(255, 255, 255)') {
            isFoodbank = true;
        } else {
            isFoodbank = false;
        }
        AuthenticationController.storeUserToDatabase(username, password, email, isFoodbank);  
    
        // if (isFoodbank) {
        //     $(location).attr('href', '/dashboard/foodbank-index.html');
        // } else {
        //     $(location).attr('href', '/dashboard/index.html');
        // }
    });
});