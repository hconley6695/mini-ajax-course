
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

    $body.append('<img class="bgimg" src="' + $img_src + '" alt="My House">');

    return false;
};

$('#form-container').submit(loadData);
