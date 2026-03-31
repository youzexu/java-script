<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Home',
    // beforeDestroy() {
    //     console.log('home即将被销毁了')
    // },
    // mounted() {
    //     console.log('home已经被挂载了',this)
    // }

}
</script>

<style></style>