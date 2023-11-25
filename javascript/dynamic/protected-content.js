var protectedContentContainer = document.getElementById('protected-content-js');
var passwordInput = document.getElementById('password');

function checkPassword() {
  var password = passwordInput.value;

  // Verificar si la contraseña es correcta
  if (password === 'Albatros91011') {
    // Obtener el contenido del archivo HTML del contenido protegido
    fetch('/html/dynamic/protected-content.html')
      .then(function (response) {
        return response.text();
      })
      .then(function (protectedContentHTML) {
        // Mostrar el contenido del contenido protegido en el contenedor
        protectedContentContainer.innerHTML = protectedContentHTML;

        // Ocultar el elemento con id "request-access"
        var requestAccessElement = document.getElementById('access-request');
        if (requestAccessElement) {
          requestAccessElement.style.display = 'none';
        }

        // Quitar la clase "hid" del elemento con id "warning"
        var warningElement = document.getElementById('warning');
        if (warningElement) {
          warningElement.classList.remove('hid');
        }

        // Ocultar el input con id "password"
        if (passwordInput) {
          passwordInput.style.display = 'none';
        }

        // Ocultar el botón mediante su atributo onclick
        var unlockButton = document.querySelector('[onclick="checkPassword()"]');
        if (unlockButton) {
          unlockButton.style.display = 'none';
        }
      })
      .catch(function (error) {
        console.log('Error al cargar el archivo HTML de contenido protegido:', error);
      });
  } else {
    // Contraseña incorrecta, puedes mostrar un mensaje de error o realizar otra acción
    console.log('Contraseña incorrecta');
  }
}
