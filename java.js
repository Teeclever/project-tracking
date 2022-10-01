const hambugger = document.querySelector(".hambugger");
const navmenu = document.querySelector(".navmenu");


hambugger.addEventListener("click", () => {
    hambugger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll('.navmenu').forEach(n => n.addEventListener("click", () => {
    hambugger.classList.remove("active");
    navmenu.classList.remove("active");
}))