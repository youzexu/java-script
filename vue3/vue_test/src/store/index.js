//创建Vuex中的核心store
import Vue from 'vue'
//导入Vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'
//使用vuex  
Vue.use(Vuex)
//将state中的数据进行加工，形成新的数据（getters）
//创建store实例
export default new Vuex.Store({
    modules: {
        a: countOptions,
        b: personOptions
    }
})
// 以上代码是创建Vuex核心store的基本代码，其中actions、mutations、state都是空对象，可以根据实际情况进行填充。
