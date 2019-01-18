const flickrEndpoint = `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&extras=url_sq&sort=relevance&content_type=1`;

function getFlickrData(query) {
    $.ajax({
        url: flickrEndpoint + `&text=${query}+food&api_key=${FLICKR_APIKEY}`,
        method: "GET"
    }).done(function(response){
        console.log(response);
        let photo = response.photos.photo[0];
        let url = parsePhotoURL(photo.farm, photo.server, photo.id, photo.secret);
        displayItem(url, query);
        console.log(url);
    }).fail(function(error){
        console.log(error);
    })
}

function parsePhotoURL (farmID, serverID, ID, secret) {
    return `https://farm${farmID}.staticflickr.com/${serverID}/${ID}_${secret}.jpg`;
}


