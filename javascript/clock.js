function updateClock() {
  var date = new Date();
  var options = { timeZone: 'America/Los_Angeles', hour12: true, hour: 'numeric', minute: 'numeric' };
  var timeString = date.toLocaleTimeString('en-US', options);
  var clockElements = document.getElementsByClassName("com-clock--la");

  var modifiedTimeString = timeString.replace(" AM", "a").replace(" PM", "p");

  var dayName = date.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'America/Los_Angeles' });

  var laDate = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
  var laDateObj = new Date(laDate);
  var hour = laDateObj.getHours();
  var icon = "";

  // Icon based on LA time
  if (hour >= 22 || hour < 7) icon = "🛌";
  else if (hour >= 7 && hour < 8) icon = "☕️";
  else if (hour >= 8 && hour < 9) icon = "🚗";
  else if (hour >= 9 && hour < 17) icon = "💼";
  else if (hour >= 17 && hour < 18) icon = "🚗";
  else if (hour >= 18 && hour < 19) icon = "🎾";
  else if (hour >= 19 && hour < 20) icon = "🍳";
  else if (hour >= 20 && hour < 21) icon = "📺";
  else if (hour >= 21 && hour < 22) icon = "🎮";
  else if (hour >= 23 || hour < 0) icon = "🛌";
  else if ((dayName === "Sat" || dayName === "Sun") && hour >= 9 && hour < 11) icon = "🚶";
  else if (hour >= 13 && hour < 15) icon = "📚";

  var message = "It's " + dayName + " " + modifiedTimeString + " here, so I'm probably " + icon;

  for (var i = 0; i < clockElements.length; i++) {
    if (clockElements[i]) {
      clockElements[i].textContent = message;
    }
  }
}

// Update every second
setInterval(updateClock, 1000);