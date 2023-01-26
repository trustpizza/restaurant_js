import _ from 'lodash';
import './style.css';
import Blueberry from "./photos/blueberry.png";

function test() {
    const ele = document.getElementById("container")
    console.log(ele);
    ele.innerHTML = 'Hi'
    return ele;
}

test();