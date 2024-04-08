class GameObject {
    constructor(id, x, y, width, height) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    move(direction) {
        const speed = 5;
        switch (direction) {
            case 'ArrowUp':
                this.y -= speed;
                console.log('hello');
                break;
            case 'ArrowDown':
                this.y += speed;
                break;
            case 'ArrowLeft':
                this.x -= speed;
                break;
            case 'ArrowRight':
                this.x += speed;
                break;
            
        }
    }

}