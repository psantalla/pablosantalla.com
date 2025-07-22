var protectedContentContainer = document.getElementById('protected-content-js');
var passwordInput = document.getElementById('password');
var pathSegments = window.location.pathname.split('/').filter(Boolean);
var isInSubfolder = pathSegments.includes('blog');
var basePath = isInSubfolder ? '../' : '';

function checkPassword() {
var password = passwordInput.value;

if (password === 'Albatros91011PC') {
  fetch(basePath + 'html/dynamic/protected-content.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (protectedContentHTML) {
      protectedContentContainer.innerHTML = protectedContentHTML;

      var requestAccessElement = document.getElementById('access-request');
      if (requestAccessElement) {
        requestAccessElement.style.display = 'none';
      }

      var warningElement = document.getElementById('warning');
      if (warningElement) {
        warningElement.classList.remove('hid');
      }

      if (passwordInput) {
        passwordInput.style.display = 'none';
      }

      var unlockButton = document.querySelector('[onclick="checkPassword()"]');
      if (unlockButton) {
        unlockButton.style.display = 'none';
      }
    })
    .catch(function (error) {
      console.log('Failed to load protected content HTML:', error);
    });
} else {
  console.log('Incorrect password');
}
}