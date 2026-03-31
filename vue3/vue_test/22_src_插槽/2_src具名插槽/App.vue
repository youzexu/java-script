<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="http://s3.ax1x.com/2020/12/01/D9y9jK.jpg" alt="">
            <a slot="footer" href="http://www.atguigu.com" target="_blank">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(g, index) in games" :key="index">{{ g }}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="">单机游戏</a>
                <a href="">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <template slot="footer">
                <div class="foot">
                    <a href="">经典</a>
                    <a href="">热门</a>
                    <a href="">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
            </template>
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
.container,
.foot {
    display: flex;
    justify-content: space-around;
}

video {
    width: 100%;
}

h4 {
    text-align: center;
}
</style>