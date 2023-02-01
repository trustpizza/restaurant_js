import _ from 'lodash';
import './style.css';

// JS Files
import './navbar';
import './home-page';

// Building page
import { homePage } from './home-page';
homePage();
//let page = homePage();
// Create buttons
import { homeButtonLogic } from './nav-buttons';
const homeButton = homeButtonLogic();

