import _ from 'lodash';

// JS Files
import { navbar } from './navbar';
navbar();

import { hamburgerMenu } from './dropdown-menu';
hamburgerMenu();

import { header } from "./header";

import './style.css';

// Building page
const container = document.getElementById("container");

//console.log(header());
container.appendChild(header());
