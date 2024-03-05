function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * socialJusticeImages.length);
    const randomImage = socialJusticeImages[randomIndex];
    
    // Update the HTML elements to display the random image details
    document.getElementById("title").textContent = randomImage.title;
    document.getElementById("description").textContent = randomImage.description;
    document.getElementById("author").textContent = randomImage.author;
    document.getElementById("year").textContent = randomImage.year;
    document.getElementById("display").src = randomImage.imageUrl;
}

document.getElementById("button").addEventListener("click", displayRandomImage);
