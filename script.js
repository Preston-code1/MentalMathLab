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
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        cards.forEach(card => {
            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        })
    });
});

//Sees what card is clicked and changes the link
const trickCards = document.querySelectorAll(".card");

trickCards.forEach(card => {
    const startBtn = card.querySelector(".start-btn");

    startBtn.addEventListener("click", () => {
        const trick = card.dataset.trick;

        window.location.href = `tricks.html?trick=${trick}`;
    });
});