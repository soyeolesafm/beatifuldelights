const hamburgerBTN = document.querySelector(`.hamburger_btn`)
const mainMenu = document.querySelector(`.menu_list`)
let openMenu = false

hamburgerBTN.addEventListener(`click`, () => {

    if(!openMenu){
        hamburgerBTN.classList.add(`open`);
         mainMenu.classList.add(`active`)
        openMenu = true
       
    } else if (openMenu) {
        hamburgerBTN.classList.remove(`open`);
         mainMenu.classList.remove(`active`)
        openMenu = false
    }
    console.log(openMenu);
})