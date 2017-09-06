
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
    $greeting.text('So, you want to live at ' + $streetaddress + ',' + $city + "?");
    $body.append('<img class="bgimg" src="' + $img_src + '" alt="My House">');
    // END MY CODE



    // NYTimes Ajax Request here

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var api_key = "2bd806ac49c342d6b4f15c34562bb856";
    var nyUrl = url + '?api-key=' + api_key + '&q='+ $city + "?";


    $.getJSON( nyUrl, function (data) {

        $nytHeaderElem.text("New York Times articles about " + $streetaddress + ',' + $city);

        var articles = data.response.docs;

        articles.forEach(function(article) {

            $nytElem.append('<li class="article" data="' + article._id + '"><h3>' + article.headline.main + '</h3><p>'+ article.snippet + '</p><a href="'+ article.web_url +'">' + article.web_url + '</a></li>');
        });


    }).error(function() {

        $nytHeaderElem.text('NY Times articles could not be loaded.');
    }); //look at first example to get an idea, function will be run when response returns from the server


    // WIKIPEDIA AJAX REQUEST

    var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + $city +'&format=json&callback=wikiCallback';
    $.ajax( {
        url: wikiUrl,
        dataType: 'jsonp',
        type: 'POST',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(resp) {
            // console.log(resp);

            var listOfArticles = resp[1];
            // console.log(listOfArticles);

            listOfArticles.forEach(function(article) {

                console.log(article);

                var url = 'http://en.wikipedia.org/wiki/' + article;

                $wikiElem.append('<li><a href="'+ url +'">' + article +'</a></li>');

            })
           // do something with data
        }
    } ).error(function() {
        $wikiElem.append("wikipedia could not load");
    });


    return false;
};

// 2bd806ac49c342d6b4f15c34562bb856

$('#form-container').submit(loadData);
