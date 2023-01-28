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

    // Navbar Right Side Start
    const rightDiv = document.createElement("div");
    rightDiv.classList.add("hidden", "w-full", "md:block", "md:w-auto");
    rightDiv.id = "navbar-default";

    containerDiv.appendChild(rightDiv);
    // Hamburger Menu
    let hamburgerButton = document.createElement("button");
    hamburgerButton.id = "hamburger-btn";
    hamburgerButton.type = "button";
    hamburgerButton.setAttribute("aria-expanded", "false");
    hamburgerButton.setAttribute("aria-controls", "navbar-default");
    hamburgerButton.setAttribute("data-collapse-toggle", "navbar-default");
    hamburgerButton.classList.add( "inline-flex", "items-center", "p-2", "ml-3","text-sm", "text-gray-500", "rounded-lg", "hover:bg-gray-100", "focus:outline-none", "focus:ring-2", "focus:ring-gray-200", "md:hidden", "dark:text-gray-400", "dark:hover:bg-gray-700", "dark:focus:ring-gray-600");

    let btnSpan = document.createElement("span");
    btnSpan.classList.add("sr-only");
    btnSpan.textContent = "Open Main Menu";
    hamburgerButton.appendChild(btnSpan);

    let btnSVG = document.createElement("svg");
    btnSVG.classList.add("w-6", "h-6");
    btnSVG.setAttribute("aria-hidden", "true");
    btnSVG.setAttribute("fill", "currentColor");
    btnSVG.setAttribute("viewBox", "0 0 24 24");
    btnSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    
    hamburgerButton.appendChild(btnSVG);

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttributeNS(null, "fill-rule", "evenodd");
    path.setAttributeNS(null, "d", "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z");
    path.setAttributeNS(null, "clip-rule", "evenodd");
    btnSVG.appendChild(path);
    
    containerDiv.appendChild(hamburgerButton);
    //Hamburger Menu End (Broken atm);

    let list = document.createElement("ul");
    list.classList.add("flex", "flex-col", "p-4", "mt-4","border", "border-gray-100", "rounded-lg", "bg-gray-50", "md:flex-row", "md:space-x-8", "md:mt-0", "md:text-sm", "md:font-medium", "md:border-0", "md:bg-white", "dark:bg-gray-800", "md:dark:bg-gray-900", "dark:border-gray-700");

    let homeLink = createListItem("Home", list);
    let menuLink = createListItem("Menu", list);
    let contactLink = createListItem("Contact", list);
    // Navbar Right Side End
    rightDiv.appendChild(list)
};

function createListItem(title, list, link ="#") {
    let a = document.createElement("a");

    a.href = link;
    a.classList.add("block", "py-2", "pl-3", "pr-4", "text-gray-700", "rounded", "hover:bg-gray-100", "md:hover:bg-transparent", "md:border-0", "md:hover:text-blue-700", "md:p-0", "dark:text-gray-400", "md:dark:hover:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent");
    a.textContent = title;

    
    list.appendChild(a);
}

export { navbar }