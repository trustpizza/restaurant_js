import { pageFactory, divFactory } from './page-factory';
import { header } from "./header";
import _ from 'lodash';


// Place entire first page into one piece of code
const homePage = () => {
    // Creates Header
    const HEADERBODY = header().container;
    const CONTAINER = document.getElementById("container");
    const HEADER = document.querySelector("header");
    HEADER.appendChild(HEADERBODY);

    // Body element to which ALL items will be added
    const BODY = document.getElementById("body");
    // Building the home page structure/shell items
    const HOME = pageFactory("main", 2).main;
    // Building first paragraph out to fit the first shell
    const SECTION1 = HOME.children[0].firstChild
    let title1 = document.createElement("h2");
    title1.textContent = "A Little About Us";
    title1.classList.add("text-2xl", "font-medium", "underline");
    SECTION1.appendChild(title1);

    let p1 = document.createElement("p");
    p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut accumsan lacus. Praesent pulvinar enim sed justo laoreet fermentum. Curabitur rhoncus ligula id euismod fringilla. Suspendisse consequat convallis eros, non pulvinar arcu vulputate et. Suspendisse suscipit erat ut ultrices blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a ex suscipit, fringilla lacus ac, venenatis justo. Sed sagittis massa nec arcu egestas, at aliquet tortor consectetur."
    SECTION1.appendChild(p1);

    // Second Section
    const SECTION2 = HOME.children[1].firstChild
    let title2 = document.createElement("h1");
    title2.textContent = "Hours of Operation"
    title2.classList.add("pl-4", "text-2xl", "font-medium", "underline");
    SECTION2.appendChild(title2);

    // Add all the days (there has to be a better way!)
    const paragraphFactory = (text) => {
        let p = document.createElement("p");
        p.textContent = text;
        p.classList.add("text-center", "text-xl");

        return { p }
    };

    let days = ["Sunday: 8am - 4pm", "Monday: 6am - 4pm", "Tuesday: 6am - 4pm", "Wednesday: 6am - 4pm", "Thursday: 6am - 4pm", "Friday: Gone Hiking", "Saturday: Gone Fishing"]
    days.forEach(day => {
        let p = paragraphFactory(day).p
        SECTION2.appendChild(p)
    }); 

    BODY.appendChild(HOME);
};

export { homePage }