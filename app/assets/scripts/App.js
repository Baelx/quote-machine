import PageControls from './modules/PageControls';
import $ from 'jquery';
const pageControls = new PageControls();


let loadResources = async () => {

  let quoteJSON = await fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random");
  let quote = await quoteJSON.json();

  let imageJSON = await fetch("https://api.unsplash.com/photos/random/?client_id=a476048633d1fb233b59080593173ffa6de15ab3670e2b9ddbe593d3137d2e31");
  let image = await imageJSON.json();

  let newTwitterURI = encodeURIComponent(`Remember when Trump said this? "${quote.message}" #impeachnow #notmypresident`);
  let quoteToLink = "https://twitter.com/share?url=https%3A%2F%2Ftrumpspiration.com&text=" + newTwitterURI;

  pageControls.tweetButton.attr("href", quoteToLink);

  console.log(image.urls.regular);

  pageControls.quoteText.html(quote.message);
  pageControls.quoteArea.css("background-image", `url(${image.urls.regular})`);
}

$(document).ready(loadResources);

pageControls.quoteButton.on("click", loadResources);
