const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const robotDoorPath = "images/robot.svg";
const beachDoorPath = "images/beach.svg";
const spaceDoorPath = "images/space.svg";
let numClosedDoors = 3;

doorImage1.onclick = () => {
    doorImage1.src = robotDoorPath;
}

doorImage2.onclick = () => {
    doorImage2.src = beachDoorPath;
}

doorImage3.onclick = () => {
    doorImage3.src = spaceDoorPath;
}

randomChoreDoorGenerator = () => {
    let choreDoor = (Math.floor(Math.random() * 3));
    return choreDoor;
}