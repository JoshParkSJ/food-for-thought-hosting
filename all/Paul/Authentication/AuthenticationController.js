import * as FirestoreConnector from "../FirestoreConnector.js"
//roles: foodbank, groceryStore 

export function storeUserToDatabase(username, password, email, isFoodbank) { // if not foodbank, then grocery
    var user = {
        "username": username, 
        "password": password, 
        "email": email, 
        "isFoodBank": isFoodbank, 
    }
    FirestoreConnector.AddUserData(user).then((result) => {
        alert("Done");
        if (isFoodbank) {
            $(location).attr('href', '/dashboard/foodbank-index.html');
        } else {
            $(location).attr('href', '/dashboard/index.html');
        }
    });
}

export function loginUser() {
}