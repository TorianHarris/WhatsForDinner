<<<<<<< HEAD
$(document).ready(function(){
    $('.parallax').parallax();
  });
  
=======
>>>>>>> bb2e89e8f0b1cba644d11b879d5c11e820bb8b5a
// //create global for query search
// let querySearch = $("#foodSearch");

// const endpointURL = "https://api.yummly.com/v1/api/recipes?";


// //Ajax call
// function getData() {
//     $.ajax({
//         url: endpointURL + `_app_id=${YUMMLY_APIID}&_app_key=${YUMMLY_APIKEY}&requirePictures=true
//         &q=${querySearch.replace(" ", "+")}`,
//         method: "GET"

//     }).done(function (response) {
//         console.log(response);

//     }).fail(function (error) {
//         console.log(error);
//     });
// };

//create click function to pass query to web services call
$("#search").on('click', function(event){
    event.preventDefault();
    //getFlickrData($("#search").val());
    getFlickrData($("#foodSearch").val());
    yummlySearch($("#foodSearch").val())
});



function recipeResponse(response) {
    //for (var i = 0; i < response.data.length; i++) {

        //this a container to hold our list items 
        var resultsContainer = $("<div class= 'col-sm-4'></div>");

        //set recipeDiv to a list item
        var recipeDiv = $("<img class='img-fluid img-thumbnail' style='width: 100%; height: 100%;'>");

        // give the <li> tag a 'src' attribute which is equal to the url
        recipeDiv.attr('src', response);

        //append our recipeDiv to the resultsContainer
        resultsContainer.append(recipeDiv);

        //append resultsContainer to DOM
        $("#recipeArea").append(resultsContainer);
    //};
<<<<<<< HEAD
};
=======
};
>>>>>>> bb2e89e8f0b1cba644d11b879d5c11e820bb8b5a
