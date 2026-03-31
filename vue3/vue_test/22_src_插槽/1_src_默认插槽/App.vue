<template>
    <div class="container">
        <Category title="美食">
            <img src="" alt="">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(g, index) in games" :key="index">{{ g }}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src=""></video>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'
export default {
    components: { Category },
    name: 'App',
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['红色警戒', '劲舞大世界', '超级玛丽', '王者荣耀'],
            films: ['《进击的巨人》', '《你好世界》', '《火影忍者》', '《海贼王》']
        }
    }
}
</script>
<style>
.container {
    display: flex;
    justify-content: space-around;
}
    video{
        width: 100%;
    }
</style>