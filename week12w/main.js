async function fetchDataAndCreateObjects(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.map(({ id, x, y, width, height }) => ({ id, x, y, width, height }));
    } catch {

    }
}


async function initializeGame() {
    const objectsArray = [];

    //objects from data1.json
    objectsArray.push(...await fetchDataAndCreateObjects('data1.json'));

    //collectibles from data2.json
    const collectibles = await fetchDataAndCreateObjects('data2.json');

    //player
    const player = { x: 23, y: 56, width: 70, height: 74 }; 
    let score = 0;

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    render(canvas, ctx, objectsArray, player, score);

    //arrow key
    document.addEventListener('keydown', event => {
        const prevPlayerPosition = { x: player.x, y: player.y }; 
        let collectedObjectIndex = -1; 

        switch (event.key) {
            case 'ArrowUp':
                player.y -= 50;
                break;
            case 'ArrowDown':
                player.y += 50;
                break;
            case 'ArrowLeft':
                player.x -= 50;
                break;
            case 'ArrowRight':
                player.x += 50;
                break;
            default:
                break;
        }
        objectsArray.forEach((obj, index) => {
            if (isCollision(player, obj, 2)) {
                collectedObjectIndex = index;
            }
        });


        if (collectedObjectIndex !== -1) {
            objectsArray.splice(collectedObjectIndex, 1);
            score++;
        }

        render(canvas, ctx, objectsArray, player, score);
    });
}

//collision between player and object
function isCollision(player, object) {
    return player.x < object.x + object.width &&
        player.x + player.width > object.x &&
        player.y < object.y + object.height &&
        player.y + player.height > object.y;
}


document.addEventListener('DOMContentLoaded', initializeGame);


function render(canvas, ctx, objectsArray, player, score) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    objectsArray.forEach(({ x, y, width, height }) => {
        ctx.fillStyle = 'blue';
        ctx.fillRect(x, y, width, height);
    });

    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    //score
    ctx.fillStyle = 'red';
    ctx.font = '30px Arial';
    ctx.fillText(`Score: ${score}`, 380, 30);
}

function isCollision(player, object, excludedId) {
    
    if (object.id === excludedId) {
        return false; 
    }
    
    return player.x < object.x + object.width &&
        player.x + player.width > object.x &&
        player.y < object.y + object.height &&
        player.y + player.height > object.y;
}
