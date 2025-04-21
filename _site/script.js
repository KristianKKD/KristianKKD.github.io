// Placeholder for future enhancements
console.log("Welcome to my portfolio site!");

require('dotenv').config();

const formspreeId = process.env.FORMSPREE_ID;

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  form.action = `https://formspree.io/f/${formspreeId}`;  // Set action URL dynamically
});