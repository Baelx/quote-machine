import $ from 'jquery';

class NewQuote {
  constructor() {
    this.quoteButton = $(".link--quote-button");
    this.quoteArea = $(".quote-area");
    this.quoteText = $(".quote-area__text");
    this.events();
  }

  events() {
    this.quoteButton.click(this.apiCall());
  }

  toggleAboutArea() {

  }

  apiCall() {
      $.ajax({
        url : 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
        type : 'GET',
        success : function(data){ // success est toujours en place, bien sûr !
  console.log(data);
        this.quoteArea.css('background-image', 'url(' + data + ')');

        }
      });
  }

}


export default NewQuote;

// var button = document.getElementById("button");
// var quote = document.getElementById("quote");
// var quoteArea = document.getElementById("quote-area");
// var quoteRequest = new XMLHttpRequest();
// quoteRequest.open("GET", "https://api.whatdoestrumpthink.com/api/v1/quotes/random", true);
// quoteRequest.onload = function() {
//   if (quoteRequest.status == 200) {
//     var data = JSON.parse(quoteRequest.responseText);
//     quote.innerHTML = data.message;
//   }
// };
// quoteRequest.send();
//
// var imgRequest = new XMLHttpRequest();
// imgRequest.open("GET", "https://api.unsplash.com/photos/random/?client_id=a476048633d1fb233b59080593173ffa6de15ab3670e2b9ddbe593d3137d2e31", true);
// imgRequest.onload = function() {
//   if (imgRequest.status == 200) {
//     var data = JSON.parse(imgRequest.responseText);
//     var newBg = "url(" + data.urls.regular + ")";
//     quoteArea.style.background = newBg;
//   }
// };
// imgRequest.send();
//
// button.addEventListener("click", function(event){
//   var quoteRequest = new XMLHttpRequest();
//
//   quoteRequest.open("GET", "https://api.whatdoestrumpthink.com/api/v1/quotes/random", true);
//   quoteRequest.onload = function() {
//     if (quoteRequest.status == 200) {
//       var data = JSON.parse(quoteRequest.responseText);
//       quote.innerHTML = data.message;
//     }
//   };
//   quoteRequest.send();
//
//   var imgRequest = new XMLHttpRequest();
//
//   imgRequest.open("GET", "https://api.unsplash.com/photos/random/?client_id=a476048633d1fb233b59080593173ffa6de15ab3670e2b9ddbe593d3137d2e31", true);
//   imgRequest.onload = function() {
//     if (imgRequest.status == 200) {
//       var data = JSON.parse(imgRequest.responseText);
//       var newBg = "url(" + data.urls.regular + ")";
//       quoteArea.style.background = newBg;
//     }
//   };
//   imgRequest.send();
//
// });
