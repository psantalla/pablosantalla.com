var navbarContainer = document.getElementById('navbar-js');

// Obtener el contenido del archivo HTML del navbar
fetch('/html/dynamic/navbar.html')
  .then(function(response) {
    return response.text();
  })
  .then(function(navbarHTML) {
    // Mostrar el contenido del navbar en el contenedor
    navbarContainer.innerHTML = navbarHTML;
  })
  .catch(function(error) {
    console.log('Error al cargar el archivo HTML del navbar:', error);
  });
