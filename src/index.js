import _ from 'lodash';
import './style.css';
import { HOME } from './home-page';

// JS Files
import { navbar } from './navbar';



import { header } from "./header";
const headerBody = header().container;

// Building page
const CONTAINER = document.getElementById("container");
const HEADER = document.querySelector("header");
HEADER.appendChild(headerBody);


