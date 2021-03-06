const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const botDoorPath = "file:///Users/Tom/Desktop/chore-door/images/robot.svg";
const beachDoorPath = "images/beach.svg";
const spaceDoorPath = "images/space.svg";
const closedDoorPath = "images/closed_door.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const startButton = document.getElementById('start');

const isBot = door => {
    console.log(door.src);
    console.log(botDoorPath);
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

const isClicked = door => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}

doorImage1.onclick = () => {
    if (isClicked) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if (isClicked) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if (isClicked) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

const gameOver = status => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?'
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    }
}

const randomChoreDoorGenerator = () => {
    let choreDoor = (Math.floor(Math.random() * 3));

    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } else if (choreDoor === 2) {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }

    return choreDoor;
}

randomChoreDoorGenerator();