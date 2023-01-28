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

    // Hamburger Menu
    let hamburgerButton = document.createElement("button");
    hamburgerButton.id = "hamburger-btn";
    hamburgerButton.type = "button";
    hamburgerButton.setAttribute("data-collapse-toggle", "navbar-default");
    hamburgerButton.classList.add( "inline-flex", "items-center", "p-2", "ml-3","text-sm", "text-gray-500", "rounded-lg", "md:hidden", "hover:bg-gray-100", "focus:outline-none", "focus:ring-2", "focus:ring-gray-200", "dark:text-gray-400", "dark:hover:bg-gray-700", "dark:focus:ring-gray-600");

    let btnSpan = document.createElement("span");
    btnSpan.classList.add("sr-only");
    btnSpan.textContent = "Open Main Menu";
    hamburgerButton.appendChild(btnSpan);

    let btnSVG = document.createElement("svg");
    btnSVG.classList.add("w-6", "h-6");
    btnSVG.setAttribute("aria-hidden", "true");
    btnSVG.setAttribute("fill", "currentColor");
    btnSVG.setAttribute("viewBox", "0 0 20 20");
    btnSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    btnSVG.innerHTML = `<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>`;
    hamburgerButton.appendChild(btnSVG);
    
    containerDiv.appendChild(hamburgerButton);
    // Navbar Right Side End
};

export { navbar }