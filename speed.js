const prompt =require('prompt-sync')();

function checkSpeed(speed) {
  const speedLimit = 70;
  let demeritPoints = 0;

  if (speed <= speedLimit) {
      console.log("Ok");
  } else {
      demeritPoints = Math.floor((speed - speedLimit) / 5);

      if (demeritPoints > 12) {
          console.log("License suspended");
      } else {
          console.log(`Points: ${demeritPoints}`);
      }
  }
}

// Example usage:
const speed = prompt("Enter the speed of the car:");
checkSpeed(parseInt(speed));