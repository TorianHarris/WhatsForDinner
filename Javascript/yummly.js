const endpointURL = "https://api.yummly.com/v1/api/recipes?";

let query = "onion soup";
// todo: convert cooking minutes to seconds
//  add cooking time param
let maxCookingTime = "";

query = prompt("Search for recipes").trim();
getData();

function getData() {
    $.ajax({
        url: endpointURL + `_app_id=${YUMMLY_APIID}&_app_key=${YUMMLY_APIKEY}&requirePictures=true
        &q=${query.replace(" ", "+")}`,
        method: "GET"
    }).done(function(response){
        console.log(response);
    }).fail(function(error){
        console.log(error);
    })
}
