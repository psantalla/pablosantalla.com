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
  
  document.getElementById('logo-link').href = basePath + 'index.html';
  document.querySelector('a[href="about.html"]').href = basePath + 'about.html';
  document.querySelector('a[href="blog.html"]').href = basePath + 'blog.html';
  
  var logoImg = document.querySelector('.com-logo');
  var emailImg = document.querySelector('img[alt="Icon of an envelope."]');
  var burgerImg = document.querySelector('.com-burger');
  
  if (logoImg) logoImg.src = basePath + 'assets/logo.svg';
  if (emailImg) emailImg.src = basePath + 'assets/email.svg';
  if (burgerImg) burgerImg.src = basePath + 'assets/burger-menu-dotted.svg';
})
.catch(function(error) {
  console.log('Failed to load navbar HTML:', error);
});