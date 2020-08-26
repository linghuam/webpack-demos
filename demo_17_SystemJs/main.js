import $ from 'jquery'
import * as lodash from 'lodash'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

export default {
  initChart(ref, config) {
    const nConfig = lodash.cloneDeep(config);
    const $comp = $(ref);
    echarts.init(ref);
    console.log('initchart', lodash, $);
  }
}