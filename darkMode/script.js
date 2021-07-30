const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener('change', (e) => {
    document.body.classList.toggle("dark",
    e.target.checked);
})