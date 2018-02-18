var button = document.getElementById("button");
var quote = document.getElementById("quote");
var quoteArea = document.getElementById("quote-area");
var aboutButton = document.getElementById("about-button");



  if (quote.classList.contains("hide-elem") && quoteArea.classList.contains("blur-bg-img")){
aboutButton.addEventListener("click", function(event){
      quote.className = "";
      quoteArea.classname = "";
      console.log("added classes");
})
  } else if (!(quote.classList.contains("hide-elem")) && !(quoteArea.classList.contains("blur-bg-img"))) {
aboutButton.addEventListener("click", function(event){
      quote.className += "hide-elem";
      quoteArea.className += "blur-bg-img";
      console.log("removed classes");
})
  } else {
      console.log("doing nothing");
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
