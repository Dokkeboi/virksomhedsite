var daysE1 = document.getElementById("days");
var hoursE1 = document.getElementById("hours");
var minutesE1 = document.getElementById("minutes");
var secondsE1 = document.getElementById("seconds");

function countdownTimer() {
  const countdownDate = new Date("2025-02-22T21:00:00").getTime();

  // Convert to milliseconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate every second
  const interval = setInterval(() => {
    // Get current date
    const now = new Date().getTime();
    const distance = countdownDate - now;

    daysE1.innerText = formatNumber(Math.floor(distance / day));
    hoursE1.innerText = formatNumber(Math.floor((distance % day) / hour));
    minutesE1.innerText = formatNumber(Math.floor((distance % hour) / minute));
    secondsE1.innerText = formatNumber(
      Math.floor((distance % minute) / second)
    );

    // When timer ends
    if (distance < 0) {
      clearInterval(interval);
    }
  }, 1000);
}

//add 0 in front of numbers smaller than 10
function formatNumber(number) {
  if (number < 10) {
    return "0" + number;
  }

  return number;
}

// Run Function
countdownTimer();
