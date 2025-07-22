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
  
  if (isInSubfolder) {
    var footerLinks = document.querySelectorAll('#footer-js a[href]');
    footerLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('../')) {
        link.href = '../' + href;
      }
    });
  }
})
.catch(function(error) {
  console.log('Failed to load footer HTML:', error);
});