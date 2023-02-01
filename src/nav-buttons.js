import { homePage } from './home-page';
const CONTAINER = document.getElementById("container");



const homeButtonLogic = () => {
    let allButtons = document.getElementsByName("navbar")[0].children;
    let btn = allButtons[0];

    btn.addEventListener("click", () => {
//        page.innerHTML = homePage();
        // Need a reset function before triggering page!
        resetPageBody();
        //homePage(CONTAINER);
        //console.log(page);      
    })
};

const menuButtonLogic = () => {
    let allButtons = document.getElementsByName("navbar")[0].children;
    let btn = allButtons[1];

    btn.addEventListener("click", () => {
        console.log('hi');
    })
}

const contactButtonLogic = () => {
    let allButtons = document.getElementsByName("navbar")[0].children;
    let btn = allButtons[2];

    btn.addEventListener("click", () => {
        console.log('hi');
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