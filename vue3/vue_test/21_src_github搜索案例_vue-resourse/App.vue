<template>
        <div class="container">
            <Search1/>
            <List/>
        </div>
</template>

<script>
import Search1 from './components/Search1.vue'
import List from './components/List.vue'
export default {
    components: {Search1, List},
    name: 'App',
}
</script>
<style>
</style>