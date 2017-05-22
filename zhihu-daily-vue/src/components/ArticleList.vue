<template>
    <ul class="articleList">
        <li class="article" v-for="article in articleList">
            <span>{{article.title}}</span>
            <img :src="article.images[0]|image">
        </li>
    </ul>
</template>
<script>
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
        mounted(){
            getNews().then((res)=>{
                this.articleList=res.stories;
            })
        }
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
