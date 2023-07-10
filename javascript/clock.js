function updateClock() {
  var date = new Date();
  var options = { timeZone: 'America/Los_Angeles', hour12: true, hour: 'numeric', minute: 'numeric' };
  var timeString = date.toLocaleTimeString('en-US', options);
  var clockElements = document.getElementsByClassName("com-clock--la");

  // Remove space between hour and 'a' or 'p'
  var modifiedTimeString = timeString.replace(" AM", "a").replace(" PM", "p");
  
  // Get abbreviated day name
  var dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

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

  // Additional conditions for weekend activities
  var day = date.getDay();
  if (day === 0 || day === 6) {
    if (hour >= 0 && hour < 9) {
      icon = "🛌"; // Sleeping icon
    } else if (hour >= 9 && hour < 11) {
      icon = "🚲"; // Cycling icon
    } else if (hour >= 11 && hour < 17) {
      icon = "🏖️"; // Beach icon
    } else if (hour >= 17 && hour < 18) {
      icon = "🍳"; // Cooking icon
    } else if (hour >= 18 && hour < 20) {
      icon = "🍽️"; // Dinner icon
    } else if (hour >= 20 && hour < 22) {
      icon = "📚"; // Reading icon
    } else if (hour >= 22 || hour < 0) {
      icon = "🛌"; // Sleeping icon
    }
  }

  var message = "It's " + dayName + " " + modifiedTimeString + " here, so I'm probably " + icon;

  for (var i = 0; i < clockElements.length; i++) {
    if (clockElements[i]) {
      clockElements[i].textContent = message;
    }
  }
}

setInterval(updateClock, 1000);
