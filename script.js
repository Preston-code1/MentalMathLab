//Responsive navigation bar
const nav = document.querySelector('nav');
const menu = document.getElementById('menu');

function toggleMenu() {
    nav.classList.toggle('menu-open');
    menu.classList.toggle('show');
}

document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('show')) toggleMenu();
    });
});

//filter buttons active toggle
const buttons = document.querySelectorAll(".filters button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});