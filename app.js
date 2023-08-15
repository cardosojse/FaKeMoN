const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = 'img/Pellet Town.png';

const playerImg = new Image();
playerImg.src = 'img/playerDown.png';

class Sprite {
    constructor({position, velocity, image}){
        this.position = position;
        this.image = image;
    }
    draw(){
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}

const background = new Sprite({
    position: {
    x: -592,
    y: -1370
    },
    image: image
});

const keys = {
    ArrowUp: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }
}

function animate(){
    window.requestAnimationFrame(animate);
    background.draw();
    ctx.drawImage(
        playerImg,
        // Crop position
        0,
        0,
        // Crop width and height
        playerImg.width / 4,
        playerImg.height,
        // Position of image
        canvas.width / 2 - (playerImg.width / 4) / 2, 
        canvas.height / 2 - playerImg.height / 2,
        // Actual width/height image should be rendered out
        playerImg.width / 4,
        playerImg.height
    );
    if (keys.ArrowUp.pressed && lastKey === 'ArrowUp') background.position.y += 3;
    else if(keys.ArrowDown.pressed && lastKey === 'ArrowDown')background.position.y -= 3;
    else if(keys.ArrowRight.pressed && lastKey === 'ArrowRight') background.position.x -= 3;
    else if(keys.ArrowLeft.pressed && lastKey === 'ArrowLeft') background.position.x += 3;
}
animate();
let lastKey = '';
window.addEventListener('keydown', (e) => {
    switch (e.key){
        case 'ArrowUp':
            keys.ArrowUp.pressed = true;
            lastKey = 'ArrowUp';
            break
        case 'ArrowDown':
            keys.ArrowDown.pressed = true;
            lastKey = 'ArrowDown';
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            lastKey = 'ArrowRight';
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            lastKey = 'ArrowLeft';
            break
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.key){
        case 'ArrowUp':
            keys.ArrowUp.pressed = false;
            break
        case 'ArrowDown':
            keys.ArrowDown.pressed = false;
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break
    }
});