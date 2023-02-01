import { homePage } from './home-page';

const homeButtonLogic = () => {
    let allButtons = document.getElementsByName("navbar")[0].children;
    let btn = allButtons[0];

    btn.addEventListener("click", () => {
        homePage();
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