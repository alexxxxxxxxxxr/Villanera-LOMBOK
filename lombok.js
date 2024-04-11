const headerjsMenu = document.querySelector  (".headerMenu");

const toggleMenu = document.querySelector  (".toggle_menu");

toggleMenu.addEventListener("click", () => {
    headerjsMenu.classList.toggle("open");
    toggleMenu.classList.toggle("open");
});

