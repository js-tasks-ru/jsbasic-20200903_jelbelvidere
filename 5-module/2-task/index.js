function toggleText() {
 const buttonHide = document.querySelector('.toggle-text-button');
 const text = document.getElementById('text');

  buttonHide.addEventListener('click', function() {
text.toggleAttribute('hidden');
  });
  
}
