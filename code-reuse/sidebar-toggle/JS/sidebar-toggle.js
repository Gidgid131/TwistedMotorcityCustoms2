const toggleBtn = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});