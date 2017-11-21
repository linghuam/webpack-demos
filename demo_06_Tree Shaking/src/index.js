import {cube} from './math.js'

function component() {
  var element = document.createElement('pre');

  // Lodash
  element.innerHTML = ['hello webpack!', '5 cube is equal to' + cube(5)].join('\n\n');

  return element;
}

document.body.appendChild(component());
