var button = document.getElementById("button");
var quote = document.getElementById("quote");
var quoteArea = document.getElementById("quote-area");

button.addEventListener("click", function(event){
  var quoteRequest = new XMLHttpRequest();

  quoteRequest.open("GET", "https://api.whatdoestrumpthink.com/api/v1/quotes/random", true);

  quoteRequest.onload = function() {
    if (quoteRequest.status >= 200 && quoteRequest.status < 400) {
      var data = JSON.parse(quoteRequest.responseText);
      quote.innerHTML = data.message;
    } else {
      // We reached our target server, but it returned an error
      console.log("Server reached but it didn't like out request");
    }
  };

  quoteRequest.onerror = function() {
    // There was a connection error of some sort
    console.log("Connection error with the quote API.")
  };

  quoteRequest.send();

  var request = new XMLHttpRequest();

  request.open("GET", "https://api.unsplash.com/photos/random/?client_id=a476048633d1fb233b59080593173ffa6de15ab3670e2b9ddbe593d3137d2e31", true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      var newBg = "url(" + data.urls.regular + ")";
      quoteArea.style.background = newBg;
    } else {

    }
  };

  request.onerror = function() {
    console.log("Connection error with the image API.")
  };

  request.send();

})
