const shareButton = document.getElementById("share_button");
const squareContainer = document.getElementById("square_container");
const shareImg = document.getElementById("share-img");

shareButton.addEventListener("click", (e) => {
  squareContainer.classList.toggle("open");
});


