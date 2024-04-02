

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var backgroundMusic = document.getElementById('backgroundMusic');


// mouse controls
canvas.addEventListener('mousemove', function (event) {
    const rect = canvas.getBoundingClientRect();
    player.x = event.clientX - rect.left;
    player.y = event.clientY - rect.top;
});

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    autonomousObject.move();

    //collision
    if (detectCollision(player, autonomousObject)) {
        canvas.style.backgroundColor = 'lightblue';
    } else {

        canvas.style.backgroundColor = 'pink';
    }

    player.draw();
    autonomousObject.draw();

    requestAnimationFrame(update);
}
update();
