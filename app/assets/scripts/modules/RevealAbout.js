import $ from 'jquery';

class RevealAbout {
  constructor() {
    this.aboutArea = $(".about-area");
    this.aboutButton = $(".link--about-area");
    this.aboutContent = $(".about-area__content");
    this.quoteArea = $(".quote-area");
    this.quoteText = $(".quote-area__text");
    this.events();
  }

  events() {
    this.aboutButton.click(this.toggleAboutArea.bind(this));
    this.aboutButton.click(this.toggleQuoteArea.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.toggleAboutArea();
      this.toggleQuoteArea;
    }
  }

  toggleAboutArea() {
    this.aboutArea.toggleClass("hide-elem raise-up");
    console.log("toggle about area");
  }

  toggleQuoteArea() {
    this.quoteText.toggleClass("raise-up");
    this.quoteArea.toggleClass("hide-elem");

    console.log("toggle quote area+text");

  }

}


export default RevealAbout;

//
// aboutButton.addEventListener("click", function(event){
//   if (quote.classList.contains("hide-elem") &&
//       quoteArea.classList.contains("blur-bg-img") &&
//       aboutArea.classList.contains("show-about-area") &&
//       wrapper.classList.contains("dark-bg") &&
//       body.classList.contains("dark-bg") &&
//       !disclaimer.classList.contains("hide-elem") &&
//       !credits.classList.contains("hide-elem") &&
//       !resources.classList.contains("hide-elem")
//       ){
//       quote.className = "";
//       quoteArea.className = "";
//       aboutArea.className = "";
//       wrapper.className = "";
//       body.className = "";
//       disclaimer.className = " hide-elem ";
//       credits.className = " hide-elem ";
//       resources.className = " hide-elem ";
//   } else {
//       quote.className += " hide-elem ";
//       quoteArea.className += " blur-bg-img ";
//       aboutArea.className = " show-about-area ";
//       wrapper.className = " dark-bg ";
//       body.className = " dark-bg ";
//       disclaimer.className = "";
//       credits.className = "";
//       resources.className = "";
//   }
// });
