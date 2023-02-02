import _ from 'lodash';
import './style.css';

// JS Files
import './navbar';
import './home-page';

// Building page
import { homePage } from './home-page';
let container = document.getElementById("container");
homePage(container);
//let page = homePage();
// Create buttons
import { contactButtonLogic, homeButtonLogic, menuButtonLogic } from './nav-buttons';
const homeButton = homeButtonLogic();
const menuButton = menuButtonLogic();
// const contactButton = contactButtonLogic();

