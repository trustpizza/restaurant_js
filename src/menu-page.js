import { pageFactory, titleFactory, paragraphFactory } from './page-factory';

const menuPage = (container) => {
    const CONTAINER = container; // Whole Page
    const BODY = document.getElementById("body");
    
    const MENU = pageFactory("main", 1).main; // Creates Menu octagon items
     
    const SECTION1 = MENU.children[0].firstChild; // Selects the inner menu item to select the text section

    // Title of the menu (this can be turned into its own function)
    let title = titleFactory('h1', 'Menu').title;
    SECTION1.appendChild(title);

    let menuItem = paragraphFactory("BlueBerry - $1").p;
    SECTION1.appendChild(menuItem);

    // Menu Section (use simple paragraphs)

    BODY.appendChild(MENU); // This moves the sections to the Body section
}

export { menuPage }