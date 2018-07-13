import vue from 'vue'
import loadsh from 'lodash'
import getData from './c.js'

loadsh.add(1,1);
vue.prototype.$me = 1;
getData();