class GameObject {
    constructor(x, y, radius, color, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
            this.ySpeed = -this.ySpeed;
        }
    }
}

//objects
const player = new GameObject(50, 50, 30, 'hotpink', 0, 0); //me or you
const autonomousObject = new GameObject(150, 150, 30, 'purple', 3, 3); // has his own mind 

//Collision 
function detectCollision(obj1, obj2) {
    const dx = obj1.x - obj2.x;
    const dy = obj1.y - obj2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < obj1.radius + obj2.radius;
}