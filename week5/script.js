//i dont think that i needed this but im too deep in now to change it
let playerInfo = JSON.parse(localStorage.getItem("playerInfo")) || { attempts: 0 };

const grid = document.getElementById("grid");
if (grid) {
    // Array var
    var blankImages = [];
    var actualImages = [];
    var matchedPairs = 0;

    // pics
    const images = ["images/image1.jpeg", "images/image2.jpeg", "images/image3.png", "images/image4.jpeg", "images/image5.jpeg", "images/image6.jpeg"];
    const totalPairs = images.length;

    // flipper
    let firstFlippedIndex = -1;
    let secondFlippedIndex = -1;

    // Array
    for (let i = 0; i < 12; i++) {
        blankImages.push("pink square.jpeg");
    }

    // Randomization
    const shuffledImages = images.concat(images); // makes pairs
    shuffledImages.sort(() => Math.random() - 0.5); // shuffle!

    // Grid
    for (let i = 0; i < 12; i++) {
        const img = document.createElement("img");
        img.src = blankImages[i]; // blank images
        grid.appendChild(img);
        img.addEventListener("click", () => flipImage(i)); // adding click event
    }

    // The big reveal!
    function revealImage(index) {
        grid.children[index].src = shuffledImages[index];
    }

    function checkForMatch() {
        if (shuffledImages[firstFlippedIndex] === shuffledImages[secondFlippedIndex]) {
            // If the images match, keep em flipped!
            firstFlippedIndex = -1;
            secondFlippedIndex = -1;
            matchedPairs++;

            // do they match?
            if (matchedPairs === totalPairs) {
                // goes to final page
                window.location.href = "JSON.html";
            }
        } else {
            //flippin it back 
            setTimeout(() => {
                grid.children[firstFlippedIndex].src = blankImages[firstFlippedIndex];
                grid.children[secondFlippedIndex].src = blankImages[secondFlippedIndex];
                firstFlippedIndex = -1;
                secondFlippedIndex = -1;
            }, 1000);
        }
    }

    function flipImage(index) {
        playerInfo.attempts++;

        // player info
        localStorage.setItem("playerInfo", JSON.stringify(playerInfo));

        if (firstFlippedIndex === -1) {

            firstFlippedIndex = index;
            revealImage(index);
        } else if (secondFlippedIndex === -1 && index !== firstFlippedIndex) {

            secondFlippedIndex = index;
            revealImage(index);

            //do it match?
            setTimeout(checkForMatch, 500);
        }

        function handleGameCompletion() {

            fetch('players.json')
                .then(response => response.json())
                .then(data => {

                    console.log(data);

                    //info
                    const playerData = data.players[0];
                    console.log(playerData.firstName);
                    console.log(playerData.lastName);
                    console.log(playerData.age);
                    console.log(playerData.attempts);

                    // updating the stupid object thing
                    playerInfo.firstname = playerData.firstName;
                    playerInfo.lastname = playerData.lastName;
                    playerInfo.age = playerData.age;

                    // yay!
                    window.location.href = "JSON.html";
                })
                .catch(error => {
                    console.error('Error fetching JSON:', error);
                });
        }

        // im too scared to delete this now 
        function simulateGameCompletion() {
            setTimeout(handleGameCompletion, 2000); 
        }

    }
}