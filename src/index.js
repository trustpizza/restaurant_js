import _ from 'lodash';
import './style.css';

// JS Files
import { navbar } from './navbar';
navbar();

import { hamburgerMenu } from './dropdown-menu';
hamburgerMenu();

import { header } from "./header";
// header();

// Building page
const container = document.getElementById("container");

// console.log(header());
container.appendChild(header());