import a from './a.js'
import './style.css'
import img from './img.png'
import data from './data.xml'

function component() {
  var element = document.createElement('div');
  element.classList.add('hello');
  // Lodash
  element.innerHTML = a;

  var myicon = new Image();
  myicon.src = img;
  element.appendChild(myicon);

  console.log(data);
  return element;
}

document.body.appendChild(component());
