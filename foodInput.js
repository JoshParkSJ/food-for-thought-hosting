$(document).ready(function () {
    $("#addItem").click(function(){
        var storeName = $('#inputGroceryStore').val();
        var food = $('#inputFoodCategory').val();
        var weight = $('#inputWeight').val();
        var expiry = $('#expiryDate').val();

        createEntry(storeName, food, weight, expiry);

        var foodDonationItem = 
              "<tr><td>" + storeName + 
              "</td><td>" + food + "</td><td>" + weight +
              "</td><td>" + expiry + "</td></tr>";
        
        $(foodDonationItem).appendTo("#target");        
    });

    $("#submitItems").click(function(){
        submitEntry();
    });    
    //TEST
    

    // $('button').click(function () {
    //     var toAdd = $("input[name=message]").val();
    //     $('#messages').append("<p>" + toAdd + "</p>");
    // });

    
});