import _ from 'lodash';
import './styles.css';

function test() {
    const ele = document.getElementById("container")
    console.log(ele);
    ele.innerHTML = 'Hi'
    return ele;
}

test();