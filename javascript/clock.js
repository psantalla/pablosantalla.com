function updateClock() {
  var date = new Date();
  var options = { timeZone: 'America/Los_Angeles', hour12: true, hour: 'numeric', minute: 'numeric' };
  var timeString = date.toLocaleTimeString('en-US', options);
  var clockElements = document.getElementsByClassName("com-clock--la");

  // Remove space between hour and 'a' or 'p'
  var modifiedTimeString = timeString.replace(" AM", "a").replace(" PM", "p");

  // Get abbreviated day name in Los Angeles timezone
  var dayName = date.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'America/Los_Angeles' });

  // Create a date for the Los Angeles timezone to get the correct hour
  var laDate = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
  var laDateObj = new Date(laDate);
  var hour = laDateObj.getHours();
  var icon = "";

  if (hour >= 22 || hour < 7) {
    icon = "Viva el Atleti 🛌"; // Sleeping icon
  } else if (hour >= 7 && hour < 8) {
    icon = "☕️"; // Coffee icon
  } else if (hour >= 8 && hour < 9) {
    icon = "🚗"; // Driving to work icon
  } else if (hour >= 9 && hour < 17) {
    icon = "💼"; // Working icon
  } else if (hour >= 17 && hour < 18) {
    icon = "🚗"; // Driving home icon
  } else if (hour >= 18 && hour < 19) {
    icon = "🎾"; // Tennis icon
  } else if (hour >= 19 && hour < 20) {
    icon = "🍳"; // Cooking icon
  } else if (hour >= 20 && hour < 21) {
    icon = "📺"; // Watching TV icon
  } else if (hour >= 21 && hour < 22) {
    icon = "🎮"; // Playing video games icon
  } else if (hour >= 23 || hour < 0) { // 11 PM to 12 AM (midnight)
    icon = "🛌"; // Sleeping icon
  } else if ((dayName === "Sat" || dayName === "Sun") && hour >= 9 && hour < 11) {
    icon = "🚶"; // Weekend walk icon
  } else if (hour >= 13 && hour < 15) {
    icon = "📚"; // Reading icon
  }

  var message = "It's " + dayName + " " + modifiedTimeString + " here, so I'm probably " + icon;

  for (var i = 0; i < clockElements.length; i++) {
    if (clockElements[i]) {
      clockElements[i].textContent = message;
    }
  }
}

setInterval(updateClock, 1000);