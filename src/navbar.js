const navbar = () => {
    // Main Navbar Element
    let nav = document.getElementById("nav");
    nav.classList.add("z-20", "sticky" , "top", "bg-blue-50", "border-gray-200", "px-2", "sm:px04", "py-2.5", "rounded", "dark:bg-gray-900");

    // The Container Div for all the Navbar items
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("container", "flex", "flex-wrap", "items-center", "justify-between", "mx-auto");
    nav.appendChild(containerDiv)

    // NavBar Left Side Start
    let navImageLink = document.createElement("a");
    navImageLink.classList.add("flex", "items-center");
    containerDiv.appendChild(navImageLink);

    let navImage = document.createElement("img");
    navImage.src = "../src/photos/blueberry.png";
    navImage.classList.add("h-6", "mr-3", "sm:h-9");
    navImageLink.appendChild(navImage);

    let navSpan = document.createElement("span");
    navSpan.classList.add("self-center", "text-xl", "font-semibold", "whitespace-nowrap", "dark:text-white");
    navImageLink.appendChild(navSpan);
    navSpan.textContent = "The Blueberry Bodega";
    // NavBar Left Side End
};

export { navbar }