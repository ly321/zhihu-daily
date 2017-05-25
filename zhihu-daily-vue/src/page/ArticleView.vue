<template>

    <div class="articleView" v-model="content">
        <link rel="stylesheet" :href="content.css">
       <div v-html="content.body"></div>
       
    </div>
</template>
<script>
import {getArticle} from '../service/http.js'
    export default{
        name:'articleView',
        data(){
            return{
                id:' ',
                content:[]
            }
        },
        methods:{
            getId() {
                this.id = this.$route.query.id;
            },
        },
        mounted(){
            this.getId()
            getArticle(this.id).then((res)=>{
                this.content=res;
            })
        },
    }
</script>
<style>
.articleView{
    margin-top: 70px;
}
.articleView div{
    margin-left: 3px;
}
.articleView div, .articleView li, .articleView p, .articleView span, .articleView ul {
    display: initial;
}
</style>
