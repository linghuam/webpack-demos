import $ from 'jquery'
import * as lodash from 'lodash'

export default {
  initChart(ref, config) {
    const nConfig = lodash.cloneDeep(config);
    const $comp = $(ref);
    console.log('initchart', lodash, $);
  }
}