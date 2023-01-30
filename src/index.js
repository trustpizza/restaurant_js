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
// container.appendChild(header());  // Builds header/Title

import { pageFactory } from './page-factory';
const HOME = pageFactory("main", 2);
container.appendChild(HOME.main);