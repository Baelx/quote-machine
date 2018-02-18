var button = document.getElementById("button");
var quote = document.getElementById("quote");
var quoteArea = document.getElementById("quote-area");
var aboutButton = document.getElementById("about-button");
var aboutArea = document.getElementById("about-area");
var body = document.getElementById("body");
var wrapper = document.getElementById("wrapper");


aboutButton.addEventListener("click", function(event){
  if (quote.classList.contains("hide-elem") &&
      quoteArea.classList.contains("blur-bg-img") &&
      aboutArea.classList.contains("show-about-area") &&
      wrapper.classList.contains("dark-bg") &&
      body.classList.contains("dark-bg")
      ){
      quote.className = "";
      quoteArea.className = "";
      aboutArea.className = "";
      wrapper.className = "";
      body.className = "";
      console.log("added classes");
  } else {
      quote.className += " hide-elem ";
      quoteArea.className += " blur-bg-img ";
      aboutArea.className = " show-about-area ";
      wrapper.className = " dark-bg ";
      body.className = " dark-bg ";
      console.log("removed classes");
  }
})

button.addEventListener("click", function(event){
  var quoteRequest = new XMLHttpRequest();

  quoteRequest.open("GET", "https://api.whatdoestrumpthink.com/api/v1/quotes/random", true);
  quoteRequest.onload = function() {
    if (quoteRequest.status == 200) {
      var data = JSON.parse(quoteRequest.responseText);
      quote.innerHTML = data.message;
    }
  };
  quoteRequest.send();

  var imgRequest = new XMLHttpRequest();

  imgRequest.open("GET", "https://api.unsplash.com/photos/random/?client_id=a476048633d1fb233b59080593173ffa6de15ab3670e2b9ddbe593d3137d2e31", true);
  imgRequest.onload = function() {
    if (imgRequest.status == 200) {
      var data = JSON.parse(imgRequest.responseText);
      var newBg = "url(" + data.urls.regular + ")";
      quoteArea.style.background = newBg;
    }
  };
  imgRequest.send();

})
