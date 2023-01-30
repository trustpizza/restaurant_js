import { pageFactory } from './page-factory';
const BODY = document.getElementById("body");
const HOME = pageFactory("main", 2).main;
BODY.appendChild(HOME);

export { HOME }