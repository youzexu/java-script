<template>
    <div>
        <ul>
            <li v-for="n in news" :key="n.id">{{n.title}}</li>
        </ul>

    </div>

</template>
<script>
export default {
    name: 'News',
    data(){
        return{
            news:[
                {id:'001',title:'新闻001'},
                {id:'002',title:'新闻002'},
                {id:'003',title:'新闻003'},
            ]
        }
    }
}
</script>

<style></style>