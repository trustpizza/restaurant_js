import { pageFactory, divFactory } from './page-factory';

const menuPage = (container) => {
    const CONTAINER = container; // Whole Page
    const BODY = document.getElementById("body");
    
    const MENU = pageFactory("main", 1).main; // Creates Menu octagon items
     
    const SECTION1 = MENU.children[0].firstChild; // Selects the inner menu item to select the text section
    let title = document.createElement("h1");
    title.textContent = "Menu";
    title.classList.add("text-2xl", "font-medium", "underline");
    SECTION1.appendChild(title);

    BODY.appendChild(MENU);
}

export { menuPage }