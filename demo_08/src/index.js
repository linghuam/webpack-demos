function getComponent() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return import ( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

  }).catch(error => 'An error occurred while loading the component');
}

document.body.appendChild(component());
getComponent().then(component => {
  document.body.appendChild(component);
})
