var allpostsContainer = document.getElementById('posts-recap-js');
var pathSegments = window.location.pathname.split('/').filter(Boolean);
var isInSubfolder = pathSegments.includes('blog');
var basePath = isInSubfolder ? '../' : '';

fetch(basePath + 'html/dynamic/posts-recap.html')
.then(response => response.text())
.then(postsHTML => {
  const isStEntry = document.body.classList.contains('st-entry');
  const parser = new DOMParser();
  const postsFragment = parser.parseFromString(postsHTML, 'text/html');

  const masterContainer = postsFragment.querySelector('.com-container--entries-master');
  const entriesPresentation = masterContainer.querySelector('.com-entries-presentation');
  const containerDiv = postsFragment.querySelector('.com-container--entries-intros');
  const postLinks = containerDiv.querySelectorAll('a.com-entry-intro');

  const currentArticleLink = window.location.pathname;

  const filteredLinks = Array.from(postLinks).filter(link => link.getAttribute('href') !== currentArticleLink);

  const maxVisiblePosts = isStEntry ? 2 : filteredLinks.length;

  const clonedMasterContainer = masterContainer.cloneNode(false);
  const clonedContainerDiv = containerDiv.cloneNode(false);

  for (let i = 0; i < maxVisiblePosts; i++) {
    const clonedLink = filteredLinks[i].cloneNode(true);
    clonedContainerDiv.appendChild(clonedLink);
  }

  if (isStEntry) {
    const clonedEntriesPresentation = entriesPresentation.cloneNode(true);
    const viewOtherEntriesButton = containerDiv.querySelector('.com-btn');
    clonedMasterContainer.appendChild(clonedEntriesPresentation);
    clonedContainerDiv.appendChild(viewOtherEntriesButton.cloneNode(true));
  }

  clonedMasterContainer.appendChild(clonedContainerDiv);

  allpostsContainer.innerHTML = '';
  allpostsContainer.appendChild(clonedMasterContainer);
})
.catch(error => {
  console.log('Failed to load posts-recap HTML:', error);
});