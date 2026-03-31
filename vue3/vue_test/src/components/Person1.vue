<template>
    <div>
        <h1>人员信息</h1>
        <h3 style="color: red;">count组件的求和为{{ sum }}</h3>
        <h3 style="color: blue;">第一个人员的名字是{{ firstPersonName }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人员</button>
        <button @click="addPersonServer">添加一个人，名字随机</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>

    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'person',
    computed: {
        personList() {
            return this.$store.state.b.personList
        },
        sum() {
            return this.$store.state.a.sum
        },
        firstPersonName() {
            return this.$store.getters['b/firstPersonName']
        }
    },
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add() {
            //添加一个人员
            const personObj = { id: nanoid(), name: this.name }
            this.$store.commit('b/ADD_PERSON', personObj)
            this.name = ''
        },
        //添加一个姓王的人员
        addWang() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.dispatch('b/addPersonWang', personObj)
        },
        addPersonServer() {
            this.$store.dispatch('b/addPersonServer')
        }
    },
}

</script>
