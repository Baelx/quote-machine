let test = document.getElementsByClassName('flipper');
let button = document.getElementsByClassName('about-trigger');

/* Make Array from HTML collection */
let arr = [...button];

/* Add click event listener for each button that toggles the about section */
arr.forEach((elm, index) => {
  elm.addEventListener("click", () => {
    test[0].classList.toggle('flip-it');
  });
});
