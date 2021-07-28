const navBtn = document.getElementById('nav-btn');
const navContainer = document.getElementById('nav-container');

navBtn.addEventListener('click', () => {
    navContainer.classList.toggle('active')
    navBtn.classList.toggle('active')
})