//create global for query search
let querySearch = $("#foodSearch");

const endpointURL = "https://api.yummly.com/v1/api/recipes?";


//Ajax call
function getData() {
    $.ajax({
        url: endpointURL + `_app_id=${YUMMLY_APIID}&_app_key=${YUMMLY_APIKEY}&requirePictures=true
        &q=${querySearch.replace(" ", "+")}`,
        method: "GET"

    }).done(function (response) {
        console.log(response);

    }).fail(function (error) {
        console.log(error);
    });
};

//create click function to pass query to web services call
$("#search").on('click',

//create function to retrieve response data
    function recipeResponse(response) {
        for (var i = 0; i < response.data.length; i++) {

            //this a container to hold our list items 
            var resultsContainer = $("<div class= 'col-sm-4'></div>");

            //set recipeDiv to a list item
            var recipeDiv = $("<img class='img-fluid img-thumbnail' style='width: 100%; height: 100%;'>");

            // give the <li> tag a 'src' attribute which is equal to the url
            recipeDiv.attr('src', response.data[i].matches.recipeName.imageUrlsBySize);

            //append our recipeDiv to the resultsContainer
            resultsContainer.append(recipeDiv);

            //append resultsContainer to DOM
            $("#recipeArea").append(resultsContainer);
        };

    });
