const menuEl = document.getElementById("menu-items");
const displayBtn = document.getElementById("display-btn");
const hideBtn = document.getElementById("hide-btn");

displayBtn.addEventListener("click", () => {
    menuEl.style.display = "flex";
    displayBtn.style.display = "none";
    hideBtn.style.display = "block";
    menuEl.classList.remove("hide-menu");
});

hideBtn.addEventListener("click", () => {
    menuEl.classList.add("hide-menu");
    displayBtn.style.display = "block";
    hideBtn.style.display = "none";
});