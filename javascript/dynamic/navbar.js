var navbarContainer = document.getElementById('navbar-js');
var pathSegments = window.location.pathname.split('/').filter(Boolean);
var isInSubfolder = pathSegments.includes('blog');
var basePath = isInSubfolder ? '../' : '';

fetch(basePath + 'html/dynamic/navbar.html')
.then(function(response) {
  return response.text();
})
.then(function(navbarHTML) {
  navbarContainer.innerHTML = navbarHTML;
})
.catch(function(error) {
  console.log('Failed to load navbar HTML:', error);
});