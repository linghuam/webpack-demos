// import "systemjs-webpack-interop/auto-public-path";
// const { System, applyImportMap } = require('systemjs');
import { System, applyImportMap } from 'systemjs/dist/system'
console.log('system', System);
applyImportMap(System, {
  imports: {
    // "echarts": "../packages/testcomponent/node_modules/echarts/dist/echarts.js",
    // "lodash": "../packages/testcomponent/node_modules/lodash/index.js",
    // "achart": "../packages/testcomponent/dist/bundle.js"
    "achart": './dist/antarctica.js'
  }
});

System.import('achart').then(res => {
  console.log('importpackages', res);
});