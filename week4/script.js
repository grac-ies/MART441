const storyElement = document.getElementById('storyElement');
const option1Button = document.getElementById('option1');
const option2Button = document.getElementById('option2');

let question = 0;


//sometimes it takes multiple clicks to get the buttons to worrk, im not sure why
function updateOptions(choice)
 {
    switch (question) {
        case 0:
            storyElement.innerHTML = "adopt a pet!";
            option1Button.innerHTML = "Cat";
            option2Button.innerHTML = "Dog";
            break;
        case 1:
            storyElement.innerHTML =  "What color do you want?";
            option1Button.innerHTML = "black";
            option2Button.innerHTML = "white";
            break;
        case 2:
            storyElement.innerHTML =  "What color collar?";
            option1Button.innerHTML = "Blue";
            option2Button.innerHTML = "Purple";
            break;
        case 3:
            storyElement.innerHTML = "What do you want to play with?";
            option1Button.innerHTML = "Ball";
            option2Button.innerHTML = "Bone";
            break;
        case 4:
            storyElement.innerHTML = "What do you want to name it?";
            option1Button.innerHTML = "Frank";
            option2Button.innerHTML = "Bill";
            break;
        case 5:
            storyElement.innerHTML = "Adventure over.";
            option1Button.style.display = "none";
            option2Button.style.display = "none";
            break;
        default:
            break;
    }
}
function startAdventure() 
{
    question = 0; //this is the start
    option1Button.addEventListener('click', function() 
    {
        updateOptions(option1Button.innerHTML);
        stage++; //next question!
        if (question === 5) {
            question = 0; //it will restart once it realizes it has hit the last question(case5)
        }
    });

    option2Button.addEventListener('click', function() 
    {
        updateOptions(option2Button.innerHTML);
        question++; //same
        if (question === 5) {
            question = 0; // same just for button two
        }
    });
}
startAdventure();