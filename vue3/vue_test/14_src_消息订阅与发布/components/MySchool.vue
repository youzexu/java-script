<template>
    <div class="demo">
        <h1>学校名称：{{ name }}</h1>
        <h1>学校地址：{{ address }}</h1>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'MySchool',
    props: ['getschoolName'],
    data() {
        return {
            name: '尚硅谷',
            address: '北京'
        }
    },
    mounted() {
        // console.log('MySchool',this)
        // this.$bus.$on('hello',(data)=>{
        //     console.log('我是school组件,收到了数据',data)
        // })
      this.pubId = pubsub.subscribe('hello',()=>{
            console.log(this)
        })
    },
    beforeDestroy() {
        // this.$bus.$off('hello')
        pubsub.unsubscribe('this.pubId')
    }
}
</script>
<!-- 防止冲突 -->
<style scoped>
.demo {
    background-color: orange;
    padding: 5px;
}
</style>