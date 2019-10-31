let numberOfClicked = 0;
let catImage = document.getElementById("catImage");
let catNumberClicked = document.getElementById("catNumberClicked");

catImage.addEventListener("click", function () {
    numberOfClicked++;
    catNumberClicked.innerText = numberOfClicked;
}, false);