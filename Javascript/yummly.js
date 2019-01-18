const yummlyEndpoint = "https://api.yummly.com/v1/api/recipes?";

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
        &requirePictures=true${addIngredients(items)}&maxTotalTimeInSeconds=${$("#prep-time-search").val() * 60}`,
        method: "GET"
    }).done(function (response) {
        console.log(response);
        for (let i = 0; i < response.matches.length; i++) {
            //if(response.matches[i].ingredients.length < 10)
            yummlyGet(response.matches[i].id);
        }
    }).fail(function (error) {
        console.log(error);
    })
}

function yummlyGet(query) {
    $.ajax({
        url: `https://api.yummly.com/v1/api/recipe/${query}?` + `_app_id=${YUMMLY_APIID}&_app_key=${YUMMLY_APIKEY}`,
        method: "GET"
    }).done(function (response) {
        let recipe = {
            url: response.attribution.url,
            picture: response.images[0].hostedSmallUrl,
            name: response.name,
            prepTime: response.totalTimeInSeconds / 60
        }
        recipeDisplay(recipe);
    }).fail(function (error) {
        console.log(error);
    })
}

// recipe info is sent here and displayed
// recipe is an object to has 4 values: url, picture, name, and prepTime
function recipeDisplay(recipe) {
    let item = $("<div>");
    let url = $("<a>").attr("href", recipe.url).attr("target", "_blank");
    let picture = $("<img>").attr("src", recipe.picture);
    url.append(picture);
    let name = $("<p>").text(recipe.name);
    let prepTime = $("<p>").text("Cooking Time: " + recipe.prepTime + " minutes");
    item.append(url, name, prepTime);
    $("#recipes-panel").append(item);
}

// to be moved to app.js
$("#recipe-get").on("click", function () {
    let array = $("#bin-panel .board-item").map(function () {
        return $(this).attr("data-name");
    }).get();

    if($("#prep-time-search").val() == "") {
        $("#recipe-get-error").text("Input required.");
        $("#submit-error").text("");
    }
    else if (array.length < 1) {
        $("#submit-error").text("Add items to the bin to get recipes.")
        $("#recipe-get-error").text("");
    }
    else {
        yummlySearch(array);
        $("#recipe-get-error").text("");
        $("#submit-error").text("");
    }
})


