const yummlyEndpoint = "https://api.yummly.com/v1/api/recipes?";

//let query = "onion soup";
// todo: convert cooking minutes to seconds
//  add cooking time param
let maxCookingTime = "";

//query = prompt("Search for recipes").trim();
getData("soup");

//Ajax call, takes query as a paramater
function getData(query) {
    $.ajax({
        url: yummlyEndpoint + `_app_id=${YUMMLY_APIID}&_app_key=${YUMMLY_APIKEY}&requirePictures=true
        &q=${query.replace(" ", "+")}`,
        method: "GET"
    }).done(function(response){
        console.log(response);
        //call function to send info to
    }).fail(function(error){
        console.log(error);
    })
}
