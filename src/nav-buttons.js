const homeButton = () => {
    let allButtons = document.getElementsByName("navbar").children;
    console.log(allButtons)
    let btn = document.getElementById("home");

    btn.addEventListener("click", () => {
        console.log('hi');
    })
};

export { homeButton }