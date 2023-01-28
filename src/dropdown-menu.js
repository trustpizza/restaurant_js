const hamburgerMenu = () => {
    let btn = document.getElementById("hamburger-btn");
    let menu = document.getElementById("navbar-default");

    function show(element) {
        element.classList.remove("hidden");
    }

    function hide(element) {
        element.classList.add("hidden");
    }

    function showOrHide(element) {
        if (element.classList.contains("hidden")) {
            show(element);
        } else {
            hide(element)
        }
    }

    btn.addEventListener("click", () => {
        showOrHide(menu);
    } )
}

export { hamburgerMenu }