var footerContainer = document.getElementById('footer-js');

// Obtener el contenido del archivo HTML del footer
fetch('html/dynamic/footer.html')
  .then(function(response) {
    return response.text();
  })
  .then(function(footerHTML) {
    // Mostrar el contenido del footer en el contenedor
    footerContainer.innerHTML = footerHTML;
  })
  .catch(function(error) {
    console.log('Error al cargar el archivo HTML del footer:', error);
  });
