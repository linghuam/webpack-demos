
function handleClick_old() {
  (async function(){
    const path = 'index';
    const { default: moduleA } = await import(`./moduleA/${path}`);
    const { default: moduleB } = await import(`./moduleB/${path}`);
    moduleA.run();
    moduleB.run();
  })();
}

function handleClick() {
  (async function(path){

    // 这种路径无法导入
    // const urlA = 'http://127.0.0.1:8081/packageA/dist/packageA-bundle.js';
    // const urlB = 'http://127.0.0.1:8081/packageA/dist/packageB-bundle.js';

    // 这种路径也无法导入
    // const urlA = './packages/packageA/index.js';
    // const urlB = './packages/packageB/index.js';

    // const path = 'index.js'
    const { default: moduleA } = await import(`./packages/packageA/${path}`);
    const { default: moduleB } = await import(`./packages/packageB/${path}`);
    moduleA.run();
    moduleB.run();
  })('index.js');
}

window.onload = function() {
  var btn = document.getElementById('loadBtn');
  btn.addEventListener('click', handleClick, false);
}

