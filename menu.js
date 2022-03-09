let menuItem = document.getElementById("menu-icon")
let optionMenu = document.querySelectorAll(".option-menu-mobile")
let menu = document.querySelector(".nav-menu-mobile")

let isOpen = false

const changeIcon = () => {
    if (isOpen) {
        menuItem.textContent = "close"
        menu.style.left = 0
    } else {
        menuItem.textContent = "menu"
        menu.style.left = '-100%'
    }
}

optionMenu.forEach(element => {
    element.addEventListener('click', () => {
        isOpen = false
        changeIcon()
    })
})

menuItem.addEventListener('click', () => {
    isOpen = !isOpen
    changeIcon()
})