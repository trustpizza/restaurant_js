import _ from 'lodash';
import './style.css';

// JS Files
import { navbar } from './navbar';
navbar();

import { hamburgerMenu } from './dropdown-menu';
hamburgerMenu();

import { header } from "./header";
const headerBody = header().container;

// Building page
const CONTAINER = document.getElementById("container");
const BODY = document.getElementById("body");
const HEADER = document.querySelector("header");
HEADER.appendChild(headerBody);

import { pageFactory } from './page-factory';
const HOME = pageFactory("main", 2).main;
BODY.appendChild(HOME);

