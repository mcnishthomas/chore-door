const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const botDoorPath = "images/robot.svg";
const beachDoorPath = "images/beach.svg";
const spaceDoorPath = "images/space.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
}

doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
}

doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
}

randomChoreDoorGenerator = () => {
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