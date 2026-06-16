const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

/* Fermeture en cliquant sur le fond */

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("show")
    ) {
        modal.classList.remove("show");
    }

});