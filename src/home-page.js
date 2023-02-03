import { pageFactory, titleFactory, paragraphFactory } from './page-factory';
import { header } from "./header";

// Place entire first page into one piece of code
const homePage = (container) => {
    // Creates Header
    const HEADERBODY = header().container;
    const CONTAINER = container;

    const HEADER = document.querySelector("header");
    HEADER.appendChild(HEADERBODY);

    // Body element to which ALL items will be added
    const BODY = document.getElementById("body");
    // Building the home page structure/shell items
    const HOME = pageFactory("main", 2).main;
    // Building first paragraph out to fit the first shell 
    
    const SECTION1 = HOME.children[0].firstChild
    let title1 = titleFactory("h2", "About Us").title;
    SECTION1.appendChild(title1);

    let p1 = document.createElement("p");
    p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut accumsan lacus. Praesent pulvinar enim sed justo laoreet fermentum. Curabitur rhoncus ligula id euismod fringilla. Suspendisse consequat convallis eros, non pulvinar arcu vulputate et. Suspendisse suscipit erat ut ultrices blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a ex suscipit, fringilla lacus ac, venenatis justo. Sed sagittis massa nec arcu egestas, at aliquet tortor consectetur."
    SECTION1.appendChild(p1);

    // Second Section
    const SECTION2 = HOME.children[1].firstChild
    let title2 = titleFactory("h1", "Hours of Operation").title
    SECTION2.appendChild(title2);

    // Add all the days (there has to be a better way!)
    

    let days = ["Sunday: 8am - 4pm", "Monday: 6am - 4pm", "Tuesday: 6am - 4pm", "Wednesday: 6am - 4pm", "Thursday: 6am - 4pm", "Friday: Gone Hiking", "Saturday: Gone Fishing"]
    days.forEach(day => {
        let p = paragraphFactory(day).p
        SECTION2.appendChild(p)
    }); 

    BODY.appendChild(HOME);
};


export { homePage }