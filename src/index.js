import _ from 'lodash';
import './style.css';

// JS Files
import { navbar } from './navbar';
navbar();

import { hamburgerMenu } from './dropdown-menu';
hamburgerMenu();

import { header } from "./header";
const HEADER = header().container;
console.log(HEADER);

// Building page
const container = document.getElementById("container");
const BODY = document.getElementById("body");

import { pageFactory } from './page-factory';
const HOME = pageFactory("main", 2).main;
BODY.appendChild(HOME);