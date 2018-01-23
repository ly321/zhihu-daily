<template>
    <ul class="articleList">
        <li class="article" v-for="article in articleList" @click='handleClick(article.id)'>
            <span>{{article.title}}</span>
            <img :src="article.images[0]|image">
        </li>
    </ul>
</template>
<script>
import {bus} from '../bus.js'
    import {
        getNews
    } from '../service/http.js';
    export default {
        name: 'articleList',
        data() {
            return {
                articleList: []
            }
        },
        methods:{
            getId(){
                this.id=this.$route.query.id;
            },
            handleClick(id){
                this.$router.push({
                    path:'articleView',
                    query:{
                        id
                    }
                });
                bus.$emit('tip', '内容详情');
                bus.$emit('changeColor',id)
            }
        },
        beforeRouteUpdate(to,from,next){
            getTitlesOne(to.query.id).then((res) => {
                this.titleList = res.stories;
                next();
            })
        },
        mounted(){
            this.getId();
            getNews().then((res)=>{
                this.articleList=res.stories;
            })
        },
    }
</script>
<style>
body, div, li, p, span, ul {
    padding: 0;
    margin: 0;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang-SC-Regular,STHeiti,Helvetica,Arial,Verdana,"sans-serif",Microsoft YaHei;
    font-weight: 200;
}
.articleList{
        flex-direction: column;
    background-color: #f4f4f4;
    width: 100%;
}
.article{
    width: 100%;
    height: 100px;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 0 1px 0 #cecece;
    padding-left: 15px;
    padding-right: 15px;
}
.article img{
        width: 70px;
    height: 70px;
    flex-basis: 70px;
    flex-shrink: 0;
}
.article span{
        margin-left: 15px;
}

</style>
