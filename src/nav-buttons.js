import { homePage } from './home-page';
const page = document.getElementById("body");
//console.log(page)

const homeButtonLogic = () => {
    let allButtons = document.getElementsByName("navbar")[0].children;
    let btn = allButtons[0];

    btn.addEventListener("click", () => {
//        page.innerHTML = homePage();
        // Need a reset function before triggering page!
        homePage();
        console.log(page);      
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


export { homeButtonLogic, menuButtonLogic, contactButtonLogic }