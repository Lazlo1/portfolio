var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";

function getQuote() {
    $.getJSON(quoteUrl);
}

$(document).ready(function() {
    $("#quo").text(input.quote.text);
});