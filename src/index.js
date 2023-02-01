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
import { homeButtonLogic } from './nav-buttons';
const homeButton = homeButtonLogic();

