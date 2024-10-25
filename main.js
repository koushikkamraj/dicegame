let imageElement = document.getElementById("image");
let button = document.getElementById("changeButton");

let images = [
    "dice-six-faces-two.png","dice-six-faces-one.png","dice-six-faces-three.png","dice-six-faces-four.png","dice-six-faces-five.png","dice-six-faces-six.png"
];


button.addEventListener("click", () => {
let randomImage = images[Math.floor(Math.random() * images.length)];
    imageElement.src = randomImage;
});
