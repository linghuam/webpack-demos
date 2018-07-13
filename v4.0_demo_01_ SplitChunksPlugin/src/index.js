import a from './a.js'
import lodash from 'lodash'

function component() {
  var element = document.createElement('div');

  // Lodash
  element.innerHTML = a;

  return element;
}

document.body.appendChild(component());
