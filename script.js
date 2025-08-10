document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const barsIcon = menuToggle.querySelector('.fa-bars');
  const timesIcon = menuToggle.querySelector('.fa-times');

  menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    
    if (mainNav.classList.contains('active')) {
      barsIcon.style.display = 'none';
      timesIcon.style.display = 'block';
    } else {
      barsIcon.style.display = 'block';
      timesIcon.style.display = 'none';
    }
  });

  // Close menu wen clicking on links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
      barsIcon.style.display = 'block';
      timesIcon.style.display = 'none';
    });
  });
});