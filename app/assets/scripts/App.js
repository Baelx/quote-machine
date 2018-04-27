import PageControls from './modules/PageControls';
import $ from 'jquery';

let pageControls = new PageControls();

var loadResources = function(){
  $.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(json) {
    let response = JSON.stringify(json.message);
    let replaceRegex = response.replace(/[\s]+/g, '%20');
    let quoteToLink = "https://twitter.com/share?url=https%3A%2F%2Ftrumpspiration.com&text=Remember these \"inspiring\" words from Trump? " + replaceRegex;
    pageControls.quoteText.html(response);
    pageControls.tweetButton.attr("href", quoteToLink);
  });
  $.getJSON("https://api.unsplash.com/photos/random/?client_id=a476048633d1fb233b59080593173ffa6de15ab3670e2b9ddbe593d3137d2e31", function(json) {
    pageControls.quoteArea.css("background-image", "url(" + JSON.stringify(json.urls.regular) + ")" );
    // pageControls.aboutArea.css("background-image", "url(" + JSON.stringify(json.urls.regular) + ")" );
  });
}

$(document).ready(loadResources);
pageControls.quoteButton.on("click", loadResources);
