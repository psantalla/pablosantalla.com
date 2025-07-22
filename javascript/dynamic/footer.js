var footerContainer = document.getElementById('footer-js');
var pathSegments = window.location.pathname.split('/').filter(Boolean);
var isInSubfolder = pathSegments.includes('blog');
var basePath = isInSubfolder ? '../' : '';

fetch(basePath + 'html/dynamic/footer.html')
.then(function(response) {
  return response.text();
})
.then(function(footerHTML) {
  footerContainer.innerHTML = footerHTML;
})
.catch(function(error) {
  console.log('Failed to load footer HTML:', error);
});