function updateClock() {
    var date = new Date();
    var options = { timeZone: 'America/Los_Angeles', hour12: false };
    var timeString = date.toLocaleTimeString('en-US', options);
    document.getElementById("clock").textContent = timeString;
  }
  
  setInterval(updateClock, 1000);
  