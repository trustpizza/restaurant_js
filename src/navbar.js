const navbar = () => {
    let nav = document.createElement("nav");
    nav.classList.add("z-20", "sticky" , "top", "bg-blue-50", "border-gray-200", "px-2", "sm:px04", "py-2.5", "rounded", "dark:bg-gray-900");

    let containerDiv = document.createElement("div");
    containerDiv.classList.add("container", "flex", "flex-wrap", "items-center", "justify-between", "mx-auto");

    let navImageLink = document.createElement("a");
    navImageLink.classList.add("flex", "items-center");

    let navImage = document.createElement("img");
    navImage.src = "../src/photos/blueberry.png";
    navImage.classList.add("h-6", "mr-3", "sm:h-9");

    let navSpan = document.createElement("span");
    navSpan.classList.add("self-center", "text-xl", "font-semibold", "whitespace-nowrap", "dark:text-white");

    navSpan.textContent = "The Blueberry Bodega";
};

export { navbar }