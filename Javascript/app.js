$(document).ready(function(){
    $('.parallax').parallax();
  });
  

//create click function to pass query to web services call
$("#searchIngredient").on('click', function (event) {
    event.preventDefault();
    //getFlickrData($("#search").val());
    let query = $("autocomplete-input").val();
    getFlickrData(query);
});



function recipeResponse(response ) {
    let title = $('#autocomplete-input');
    console.log(title);
    //this a container to hold our list items 
    var resultBox = $("#recipeArea");

    //set recipeDiv to a list item
    var recipeDiv = $("<div class= 'card col m-1 mx-auto' > </div>");

    //var imageWidths = ["sm", "md", "lg"];
    //var randomNumber = Math.floor(Math.random() * imageWidths.length);
    // console.log('hey its random', randomNumber)
    // <img src='...' class='card-img-top' alt='...'> <p class='card-text'> </p> 
    // var recImg = $("<img>").addClass(`img-${imageWidths[randomNumber]}`);
    var recImg = $("<img class='card-img-top img-fluid img-thumbnail mb-1'>");

    // give the img tag a 'src' attribute which is equal to the url
    recImg.attr('src', response);
  
    //
    //create a variable to hold img title
    var pTitle= $("<h5>").addClass("card-footer");
    pTitle.text(title);

    //append title to each Ingredient card
  recImg.append(pTitle);

      //append image to card div
    recipeDiv.append(recImg);

  

    //append resultsContainer to DOM
   resultBox.append(recipeDiv);
};

//initialize packery
var $grid = $('.grid').packery({

itemSelector: '.grid-item',
columnWidth: 100



});

//make all grid-items draggable with add-drop and positioning
$grid.find('.grid-item').each(function( _i, gridItem){
    var draggie = new Draggabilly (gridItem);
    
//bind drag events to Packery
  $grid.packery('bindDraggabillyEvents', draggie)

});

function dragItems (){

    recipeDiv.append 




}



