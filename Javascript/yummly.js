const endpointURL = "https://api.yummly.com/v1/api/recipes?";
const APIID = "732a115a";
const APIKEY = "2796936f2c2e5af78bae1cb06a11515b";

let query = "onion soup";
// todo: convert cooking minutes to seconds
//  add cooking time param
let maxCookingTime = "";

query = prompt("Search for recipes").trim();
getData();

function getData() {
    $.ajax({
        url: endpointURL + `_app_id=${APIID}&_app_key=${APIKEY}&requirePictures=true
        &q=${query.replace(" ", "+")}`,
        method: "GET"
    }).done(function(response){
        console.log(response);
    }).fail(function(error){
        console.log(error);
    })
}
