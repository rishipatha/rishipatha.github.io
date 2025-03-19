// scripts.js

/**
 * Loads the navigation HTML into a target element by ID.
 * 
 * @param {string} navPath - The relative path to nav.html (e.g., 'nav.html' or '../nav.html')
 * @param {string} targetId - The ID of the element where the nav will be inserted
 */
function loadNavigation(navPath, targetId) {
  fetch(navPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(targetId).innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading navigation:", error);
    });
}

