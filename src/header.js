const header = () => {
    //document.body.appendChild(header);

    let container = document.createElement("div");
    container.classList.add("background", "text-center", "bg-blue-50", "text-gray-800", "px-6");
    
    const title = document.createElement("h1");
    title.textContent = "The Blueberry Bodega";
    title.classList.add("text-6xl", "font-bold", "mt-0", "mb-6", "text-black");
    container.appendChild(title);

    const subittle = document.createElement("h3");
    subittle.textContent = "A Bed and Breakfast";
    subittle.classList.add("text-4xl", "font-bold","pb-6", "text-black");
    container.appendChild(subittle);

    return { container };
};

export { header }; 