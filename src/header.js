import Background from "./photos/cabin.jpg";

const header = () => {
    const header = document.querySelector("header");
    document.body.appendChild(header);

    const container = document.createElement("div");
    container.classList.add("background", "text-center", "bg-blue-50", "text-gray-800", "py-20", "px-6", "bg-top");
    
    const title = document.createElement("h1");
    title.textContent = "The Blueberry Bodega";
    title.classList.add("text-6xl", "font-bold", "mt-0", "mb-6", "text-black");
    container.append(title);

    header.append(container);

};

export { header }; 