const main = document.querySelector("#main");

const pageFactory = (count) => {

};

const divFactory = () => {
    let outerDiv = document.createElement("div");
    let innerDiv = document.createElement("div");

    //Set outerdiv octagon 
    outerDiv.classList.add("bg-blue-400", "min-h-fit", "md:w-1/2", "md:outer-octagon", "p-1", "py-2", "flex", "items-center", "justify-center", "w-11/12", "rounded");

    innerDiv.classList.add("flex", "flex-col", "items-center", "bg-blue-200", "box-border", "min-h-fit", "w-11/12", "md:inner-octagon", "md:p-5", "gap-2", "rounded");

    outerDiv.appendChild(innerDiv);
    main.appendChild(outerDiv);
};

