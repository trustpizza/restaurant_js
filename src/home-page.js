import { pageFactory, divFactory } from './page-factory';
import { header } from "./header";
import _ from 'lodash';



const HEADERBODY = header().container;
const CONTAINER = document.getElementById("container");
const HEADER = document.querySelector("header");
HEADER.appendChild(HEADERBODY);

// Body element to which ALL items will be added
const BODY = document.getElementById("body");
// Building the home page structure
const HOME = pageFactory("main", 2).main;
// Building first paragraph
let page = []
const SECTION1 = HOME.children[0].firstChild
let title1 = document.createElement("h1");
title1.textContent = "Hours of Operation"
title1.classList.add("pl-4", "text-2xl", "font-medium", "underline");
SECTION1.appendChild(title1);

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
    SECTION1.appendChild(p)
}); 
console.log(SECTION1);




BODY.appendChild(HOME);

//export { HOME }