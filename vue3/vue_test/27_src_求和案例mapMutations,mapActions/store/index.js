//创建Vuex中的核心store
import Vue from 'vue'
//导入Vuex
import Vuex from 'vuex'
//使用vuex  
Vue.use(Vuex)
// 响应组件中的动作
const actions = {
    jia(context, value) {
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        if (context.state.count % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 1000)
    }
}
//操作数据（state）
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }
}
//存储数据
const state = {
    sum: 0,//当前的和
    school: '尚硅谷',
    subject: '前端'
}
//将state中的数据进行加工，形成新的数据（getters）
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
//创建store实例
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
// 以上代码是创建Vuex核心store的基本代码，其中actions、mutations、state都是空对象，可以根据实际情况进行填充。
