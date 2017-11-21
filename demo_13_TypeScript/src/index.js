// import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
