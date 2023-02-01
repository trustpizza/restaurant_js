const homeButton = () => {
    let allButtons = document.getElementsByName("navbar")[0].children;
    let btn = allButtons[0];

    btn.addEventListener("click", () => {
        console.log('hi');
    })
};

const menuButton = () => {
    let allButtons = document.getElementsByName("navbar")[0].children;
    let btn = allButtons[1];

    btn.addEventListener("click", () => {
        console.log('hi');
    })
}

const contactButton = () => {
    let allButtons = document.getElementsByName("navbar")[0].children;
    let btn = allButtons[2];

    btn.addEventListener("click", () => {
        console.log('hi');
    })
}

function initializeNavButtons() {
    homeButton();
    menuButton();
    contactButton();
}


export { initializeNavButtons }