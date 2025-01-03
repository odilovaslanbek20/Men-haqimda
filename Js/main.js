let item = document.querySelector(".nav__item")
let list = document.querySelector(".nav__list")

item.addEventListener("click", () => {
    list.style.marginLeft = "-100%";
})