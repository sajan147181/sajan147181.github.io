// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Signup form mock
const form = document.querySelector('.signup-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for joining Adventure Forum! Check your inbox for a welcome email.');
  form.reset();
});