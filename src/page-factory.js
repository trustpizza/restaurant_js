const body = document.querySelector("#body");

const pageFactory = (count, ...heights) => {

};

const divFactory = (height) {
    let outerDiv = document.createElement("div");
    let innerDiv = document.createElement("div");

    //Set outerdiv octagon 
    outerDiv.classList.add("bg-blue-400", "min-h-fit", "md:w-1/2", "md:outer-octagon", "p-1", "py-2", "flex", "items-center", "justify-center", "w-11/12", "rounded");
}