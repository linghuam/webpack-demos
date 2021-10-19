import $ from 'jquery'
import * as lodash from 'lodash'
// import echarts from 'echarts/lib/echarts'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
import vue from 'vue'

export default {
  initChart(ref, config) {
    console.log('$：', $, '\n');
    console.log('lodash：', lodash, '\n');
    console.log('vue：', vue, '\n');
    // const nConfig = lodash.cloneDeep(config);
    // const $comp = $(ref);
    // echarts.init(ref);
    // console.log('initchart', lodash, $);
  }
}