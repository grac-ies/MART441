//array var
var blankImages = [];
var actualImages = [];

//Array
for (let i = 0; i < 12; i++) 
{
    blankImages.push("pink square.jpeg");
}

//Randomization
const images = ["images/image1.jpeg", "images/image2.jpeg", "images/image3.png", "images/image4.jpeg", "images/image5.jpeg", "images/image6.jpeg"]; // Array of actual image filenames
const shuffledImages = images.concat(images); // makes pairs
shuffledImages.sort(() => Math.random() - 0.5); // shuffle!

//Grid
const grid = document.getElementById("grid");
for (let i = 0; i < 12; i++)
 {
    const img = document.createElement("img");
    img.src = blankImages[i]; //blank images
    grid.appendChild(img);
    img.addEventListener("click", () => revealImage(i)); //adding click event
}

// the big reveal!
function revealImage(index) 
{
    grid.children[index].src = shuffledImages[index];
}