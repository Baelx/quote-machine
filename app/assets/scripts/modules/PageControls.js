import $ from 'jquery';

class pageControls {
  constructor() {
    this.aboutArea = $(".about-area");
    this.aboutButton = $(".link--about-area");
    this.aboutContent = $(".about-area__content");
    this.quoteArea = $(".quote-area");
    this.quoteButton = $(".link--quote-button");
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
    this.quoteText.toggleClass("raise-up hide-elem");
    this.quoteArea.toggleClass("raise-up blur-bg-img");
    console.log("toggle quote area+text");
  }

}


export default pageControls;
