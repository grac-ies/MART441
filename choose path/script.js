let storyElement = document.getElementById('story');

function makeChoice(choice) 
{
    if (choice === 1) {
        storyElement.innerHTML = "the bird flys away never to be seen again!";
        // bird
    } else if (choice === 2) {
        storyElement.innerHTML = "unless you are allergic this is the best option";
        // dog
    } else if (choice === 3) {
        storyElement.innerHTML = "the cat claws at you!";
        //cat
    }
}
