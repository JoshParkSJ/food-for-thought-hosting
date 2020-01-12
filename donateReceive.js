
    $(document).ready(function(){
        // localStorage.clear();
        var jsonData = JSON.parse(localStorage.getItem('count'));
        
        // test data
        // [
        //     {
        //         store_id: 'superstore',
        //         food_name: 'produce',
        //         food_weight: '900',
        //         expiry_date: '20-02-2020',
        //         current_date: '12-01-2020'
        //     },
        //     {
        //         store_id: 'safeway',
        //         food_name: 'meat',
        //         food_weight: '10',
        //         expiry_date: '01-02-2020',
        //         current_date: '12-01-2020'
        //     }
        // ]
    
        for (i = 0; i < jsonData.length; i++) {
            var counter = 0;
            
            for (var value in jsonData[i]) {
                var data = jsonData[i][value];
                var enter = '';
                var label = '';
                switch(counter++) {
                    case 0:
                        label = 'Store Name'; 
                        break;
                    case 1:
                        label = 'Food Name'; 
                        break;
                    case 2:
                        label = 'Food Weight'; 
                        break;
                    case 3:
                        label = 'Expiry Date'; 
                        break;
                    case 4:
                        label = 'Current Date'; 
                        enter = '<br>';
                        break;                        
                }

                console.log(data);

                var renderThis = "<p>" + label + ' : ' + data + "</p>" + enter;
                $(renderThis).appendTo("#target");
            }
    }
    
    });
    


    /*
    <div class="container mt-5 p-3 section">
        <div class="row d-flex justify-content-between align-items-center">
            <div class="col-10">
                <h5><strong>Grocery Store: </strong>Superstore</h5>
                <h5><strong>Food Category: </strong>Meat / Protein</h5>
                <h5><strong>Food Weight (kg): </strong>500</h5>
                <h5><strong>Expiry Date: </strong>06-07-2020</h5>
            </div>
            <div class="col-2 d-flex justify-content-center align-items-center">
                <a href='#'>
                    <i class="far fa-envelope"></i>
                </a>
            </div>
        </div>
    </div>
    */ 