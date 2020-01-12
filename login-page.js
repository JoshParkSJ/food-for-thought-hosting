$(document).ready(function(){
    var foodBank = '';
    
    $('#foodBank').click(function() {
        $('#foodBankButtonBig').css("background-color", '#5e72e4');
        $('#foodBank').css("color", "white");
        $('#groceryStoreButtonBig').css("background-color", 'white');
        $('#groceryStore').css("color", "black");

        $('#LogInButton').html("<a href='../dashboard/foodbank-index.html' style = 'color: white;'>LOG IN</a>");
    });

    $('#groceryStore').click(function() {
        $('#groceryStoreButtonBig').css("background-color", '#5e72e4');
        $('#groceryStore').css("color", "white");
        $('#foodBankButtonBig').css("background-color", 'white');
        $('#foodBank').css("color", "black");


        $('#LogInButton').html("<a href='../dashboard/index.html' style = 'color: white;'>LOG IN</a>");
    });
});