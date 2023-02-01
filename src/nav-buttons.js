import { homePage } from './home-page';
import { menuPage } from './menu-page';
const CONTAINER = document.getElementById("container");
const BODY = document.getElementById("body");



const homeButtonLogic = () => {
    let allButtons = document.getElementsByName("navbar")[0].children;
    let btn = allButtons[0];

    btn.addEventListener("click", () => {
        resetPageBody();
        homePage(CONTAINER);   
    })
};

const menuButtonLogic = () => {
    let allButtons = document.getElementsByName("navbar")[0].children;
    let btn = allButtons[1];

    btn.addEventListener("click", () => {
        resetPageBody();
        menuPage(CONTAINER);
    })
}


const contactButtonLogic = () => {
    let allButtons = document.getElementsByName("navbar")[0].children;
    let btn = allButtons[2];

    btn.addEventListener("click", () => {
        resetPageBody();
    })
}

function resetPageBody() {
    let children = CONTAINER.children
    
    for (let i = 0; i < children.length; i++) {
        const element = children[i];
        element.innerHTML = null;
    }
}


export { homeButtonLogic, menuButtonLogic, contactButtonLogic }