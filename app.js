$(document).ready(function(){
    $('.parallax').parallax();
  });
  
  //create function to retrieve response data

function recipeResponse(response) {
    for (let i = 0; i < response.data.length; i++)
        //create variable to put our results into the DOM
        var recipes = "";
    //this a container to hold our list items 
    var resultsContainer = $("<div class= 'col-sm-4'></div>");
    //set recipeDiv to a list item
    var recipeDiv = $("<img class='img-fluid img-thumbnail' style='width: 100%; height: 100%;'>");
    // give the <li> tag a 'src' attribute which is equal to the url
    recipeDiv.attr('src', response.data[i].matches.recipeName.imageUrlsBySize);
    //append our recipeDiv to the resultsContainer
    resultsContainer.append(recipeDiv);
    //append resultsContainer to DOM
    (".col-12 col-sm-6 col-md-8").append(resultsContainer);

}