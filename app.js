$(document).ready(function(){
    $('.parallax').parallax();
  });

  //to be moved to app.js
$("#recipe-search").on("click", function(event) {
    event.preventDefault();
    getFlickrData($("#ingredient-search").val());
    $("#ingredient-search").val("");
});

function displayItem(url, name) {
    let item = $("<div>").addClass("board-item").attr("data-name", name);
    let content = $("<div>").addClass("board-item-content");
    let image = $("<img>").attr("src", url).addClass("item-image");
    let card = $("<div>").addClass("card");
    image.addClass("card-img-top");
    let divP = $("<div>").addClass("card-body");
    let p = $("<p>").addClass("card-text");
    p.append(name);
    divP.append(p);
    image.append(divP);
    card.append(image);
    item.append(card);
    item.append(content.append(image));
    columnGrids[0].add(item.get());
    $("#pantry").append(item);
};

// to be moved to app.js
$("#recipe-get").on("click", function () {
    let array = $("#bin-panel .board-item").map(function () {
        return $(this).attr("data-name");
    }).get();
    yummlySearch(array);
});

// recipe info is sent here and displayed
// recipe is an object to has 4 values: url, picture, name, and prepTime
function recipeDisplay(recipe) {
    let item = $("<div>");
    let url = $("<a>").attr("href", recipe.url).attr("target", "_blank");
    let picture = $("<img>").attr("src", recipe.picture);
    url.append(picture);
    let recCard = $("<div>").addClass("card");
    picture.addClass("card-img-top");
    let recCardBody = $("<div>").addClass("card-body");
    let name = $("<p>").text(recipe.name);
    let prepTime = $("<p>").text("Cooking Time: " + recipe.prepTime + " minutes");
    name.addClass("card-text");
    prepTime.addClass("card-text");
    recCardBody.append(prepTime, name);
    recCard.append(picture, recCardBody);
    item.append(recCard);
    $("#recipes-panel").append(item);
};


