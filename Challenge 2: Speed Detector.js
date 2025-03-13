function speedDetector() {
    let speed = prompt('Please enter your speed');

    speed = Number(speed);

    // Check if the input is a valid number
    if (isNaN(speed) || speed < 0) {
        return "Invalid input! Please enter a valid speed.";
    }
    //Determine the points
    if (speed <= 70) {
        console.log('Ok');
        return "OK";
    } else {
        let overSpeed = speed - 70;
        let points = Math.round(overSpeed / 5);
        return `Points: ${points}`;
    }
}
speedDetector()