const pageFactory = (name, count) => {
    const main = document.createElement("div");
    main.id = name;
    
    main.classList.add("bg-white", "flex", "flex-1", "rounded-md", "flex-col", "justify-between", "py-2", "items-center", "gap-4", "justify-around");
    for (let i = 0; i < count; i++) {
        const div = divFactory();

        main.appendChild(div.outerDiv);
    };

    return { main }
};

const divFactory = () => {
    let outerDiv = document.createElement("div");
    let innerDiv = document.createElement("div");

    //Set outerdiv octagon 
    outerDiv.classList.add("bg-blue-400", "min-h-fit", "md:w-1/2", "md:outer-octagon", "p-1", "py-2", "flex", "items-center", "justify-center", "w-11/12", "rounded");
    // Set the inner octagon
    innerDiv.classList.add("flex", "flex-col", "items-center", "bg-blue-200", "box-border", "min-h-fit", "w-11/12", "md:inner-octagon", "md:p-5", "gap-2", "rounded");

    outerDiv.appendChild(innerDiv);
    return { outerDiv }
};

export { pageFactory };
