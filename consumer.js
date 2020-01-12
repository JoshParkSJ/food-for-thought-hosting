$(document).ready(function() {
    var arrStoreScores = [
        {name: 'superstore', score: 300},
        {name: 'safeway', score: 200},
        {name: 'extra foods', score: 100},
    ];

    for (i = 0; i < arrStoreScores.length; i++) {
        var storeName = arrStoreScores[i].name;
        var storeScore = arrStoreScores[i].score;
        var storeEntry = 
        '<tr><th scope="row">' + (i+1) + '</th>' + '<td>' + 
        storeName + '</td><td>' + 
        storeScore + '</td></tr>';
        
        $(storeEntry).appendTo("#tableBody")
    }
});

