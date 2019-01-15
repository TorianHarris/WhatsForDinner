const diffendpointURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&text=olive+oil&extras=url_o&sort=relevance&content_type=1";
//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=YOURAPIKEY&format=json&nojsoncallback=1&text=cats&extras=url_o

//let query = "";

//query = prompt("Search for recipes").trim();
//getData();

//function getData() {
    $.ajax({
        url: diffendpointURL + `&api_key=${FLICKR_APIKEY}`,
        method: "GET"
    }).done(function(response){
        console.log(response);
    }).fail(function(error){
        console.log(error);
    })
//}