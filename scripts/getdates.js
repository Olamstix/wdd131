// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;



