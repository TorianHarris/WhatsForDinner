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






