const yummlyEndpoint = "https://api.yummly.com/v1/api/recipes?";

//let query = "onion soup";
// todo: convert cooking minutes to seconds
//  add cooking time param
let maxCookingTime = "";

//query = prompt("Search for recipes").trim();

//Ajax call, takes query as a paramater
let ingredients = ["pepper", "steak", "cream"];

function addIngredients(items) {
    let string = "";
    items.forEach(function (item) {
        string += "&allowedIngredient[]=" + item;
    })
    return string;
}

function yummlySearch(items) {
    $.ajax({
        url: yummlyEndpoint + `_app_id=${YUMMLY_APIID}&_app_key=${YUMMLY_APIKEY}
        &requirePictures=true${addIngredients(items)}`,
        method: "GET"
    }).done(function (response) {
        console.log(response);
        for (let i = 0; i < response.matches.length; i++) {
            //if(response.matches[i].ingredients.length < 10)
            yummlyGet(response.matches[i].id);
        }
        //call function to send info to
    }).fail(function (error) {
        console.log(error);
    })
}

function yummlyGet(query) {
    $.ajax({
        url: `https://api.yummly.com/v1/api/recipe/${query}?` + `_app_id=${YUMMLY_APIID}&_app_key=${YUMMLY_APIKEY}`,
        method: "GET"
    }).done(function (response) {
        //console.log(response);
        let recipe = {
            url: response.attribution.url,
            picture: response.images[0].hostedLargeUrl,
            name: response.name,
            prepTime: response.totalTimeInSeconds / 60
        }
        console.log(recipe);
    }).fail(function (error) {
        console.log(error);
    })
}

$("#recipe-get").on("click", function () {
    let array = $("#bin-panel .board-item").map(function () {
        return $(this).attr("data-name");
    }).get();
    yummlySearch(array);
})
