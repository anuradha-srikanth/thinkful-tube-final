$(document).ready(function(){


    $("#search-term").submit(function(event){
        event.preventDefault();
        var searchQuery = $("#query").val();
        getRequest(searchQuery);
    });
});


function getRequest(searchTerm){
    var params = {
        q: searchTerm,
        //r: 'json',
        part: 'snippet',
        key: 'AIzaSyAe1N1pBLSXWIp11QpOlq171LOgR9Py4_s',
    };
    url = "https://www.googleapis.com/youtube/v3/search";

    $.getJSON(url, params, function(data){
        showResults(data.items);
        //console.log(data.items[0]["snippet"]["title"]);
        //console.log
        //console.log(data.items[0]["snippet"]["thumbnails"]);
        //$("body").append(data.items[0]["snippet"]["thumbnails"])
    });
    /*
    $.getJSON(url, params, function(data){
        showResults(data.Search);
    });*/
}



function showResults(results){
    var content="";
    $.each(results, function(index, value){
        content += '<div id=\"item\"> <img id=\"thumbnail\" src=\"' + value.snippet.thumbnails.default.url + '\">'
        content += '<p id=\"title\">' + value.snippet.title + "</p> </div>";
        console.log(value.snippet);

    })
    $('#content').html(content);
}