import PageControls from './modules/PageControls';
import $ from 'jquery';

let pageControls = new PageControls();

var loadResources = function(){
  $.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(json) {
    pageControls.quoteText.html(JSON.stringify(json.message));
  });
  $.getJSON("https://api.unsplash.com/photos/random/?client_id=a476048633d1fb233b59080593173ffa6de15ab3670e2b9ddbe593d3137d2e31", function(json) {
    pageControls.quoteArea.css("background-image", "url(" + JSON.stringify(json.urls.regular) + ")" );
    // pageControls.aboutArea.css("background-image", "url(" + JSON.stringify(json.urls.regular) + ")" );
  });
}

$(document).ready(loadResources);
pageControls.quoteButton.on("click", loadResources);
