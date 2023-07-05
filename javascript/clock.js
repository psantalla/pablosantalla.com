function updateClock() {
  var date = new Date();
  var options = { timeZone: 'America/Los_Angeles', hour12: true, hour: 'numeric', minute: 'numeric' };
  var timeString = date.toLocaleTimeString('en-US', options);
  var clockElements = document.getElementsByClassName("com-clock--la");

  // Remove space between hour and 'a' or 'p'
  var modifiedTimeString = timeString.replace(" AM", "a").replace(" PM", "p");
  var message = "It's " + modifiedTimeString + " here, so I'm probably ";

  // Add icons based on time ranges
  var hour = date.getHours();
  var icon = "";

  if (hour >= 22 || hour < 7) {
    icon = "🛌"; // Sleeping icon
  } else if (hour >= 7 && hour < 8) {
    icon = "☕️"; // Coffee icon
  } else if (hour >= 8 && hour < 9) {
    icon = "🚗"; // Driving to work icon
  } else if (hour >= 9 && hour < 17) {
    icon = "💼"; // Working icon
  } else if (hour >= 17 && hour < 18) {
    icon = "🚗"; // Driving home icon
  } else if (hour >= 18 && hour < 20) {
    icon = "🎾"; // Tennis icon
  } else if (hour >= 20 && hour < 20.30) {
    icon = "🍳"; // Cooking icon
  } else if (hour >= 20.30 && hour < 21) {
    icon = "📺"; // Dinner or watching TV icon
  } else if (hour >= 21 && hour < 22) {
    icon = "🎮"; // Playing video games icon
  }

  // Append the icon to the message
  message += icon;

  for (var i = 0; i < clockElements.length; i++) {
    if (clockElements[i]) {
      clockElements[i].textContent = message;
    }
  }
}

setInterval(updateClock, 1000);

