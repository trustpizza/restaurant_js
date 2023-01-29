import Background from "./photos/cabin.jpg";

const header = () => {
    const header = document.querySelector("header");
    document.body.appendChild(header);

    const container = document.createElement("div");
    container.classList.add("background", "text-center", "bg-gray-50", "text-gray-800", "py-20", "px-6", "bg-top");
    container.style.backgroundImage = Background;
    header.prepend(container);

};

export { header }; 