
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    $streetaddress = $('#street').val();
    $city = $('#city').val();

    $img_src = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + $streetaddress + ',' + $city;
    $greeting.text('So, you want to live at ' + $streetaddress + ',' + $city + "?")
    $body.append('<img class="bgimg" src="' + $img_src + '" alt="My House">');
    // END MY CODE



    // NYTimes Ajax Request here

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var api_key = "2bd806ac49c342d6b4f15c34562bb856";
    var nyUrl = url + '.json?api-key=' + api_key + '&q=' + $city;


    $.getJSON( nyUrl, function (data) {

        console.log(data);

        var docs = data.response.docs;
        console.log(docs);


         //need to break it apart before you can start building articles
        // var articles = [];

        // $.each(data, function(key, val) {
        //     articles.push('<li class="article"' + key + '>' + val + '</li>')
        // });


        // $( "<ul/>", {
        //     "id": $nytElem,
        //      html: articles.join( "" )
        // }).appendTo( "body" );

    }).fail(function() {

        $nytHeaderElem.text('NY Times articles could not be loaded.');
    }); //look at first example to get an idea, function will be run when response returns from the server

    // <ul> 
    // <li>
        // <a>
        // <p>
    // parse the data

    // how to present it on the page


    return false;
};

// 2bd806ac49c342d6b4f15c34562bb856

$('#form-container').submit(loadData);
