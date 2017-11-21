import a from './a.js'

function component() {
  var element = document.createElement('div');

  // Lodash
  element.innerHTML = a;

  return element;
}

document.body.appendChild(component());
