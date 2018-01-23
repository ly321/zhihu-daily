<template>
    <div class="titleView">
        <ul class="title-container">
            <li class="title-main" v-for="title in titleList" @click='handleClick(title.id)'>
                <span>{{title.title}}</span>
                <img :src="title.images|image" onerror="this.src='http://7xkj1z.com1.z0.glb.clouddn.com/head.jpg'" />
            </li>
        </ul>
    </div>
</template>
<script>
import {bus} from '../bus.js'
    import {
        getTitlesOne
    } from '../service/http.js'
    export default {
        name: 'titleView',
        data() {
            return {
                titleList: [],
                id:' '
            }
        },
        methods: {
            getId() {
                this.id = this.$route.query.id;
            },
            handleClick(id){
                this.$router.push({
                    path:'articleView',
                    query:{
                        id
                    }
                });
                bus.$emit('tip', '内容详情');
            }
        },
        beforeRouteUpdate(to,from,next){
            getTitlesOne(to.query.id).then((res) => {
                this.titleList = res.stories;
                next();
            })
        },
        mounted() {
            this.getId();
            getTitlesOne(this.id).then((res) => {
                this.titleList = res.stories;
            })
        }
    }
</script>
<style>
    body,
    div,
    li,
    p,
    span,
    ul {
        padding: 0;
        margin: 0;
        bottom: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang-SC-Regular, STHeiti, Helvetica, Arial, Verdana, "sans-serif", Microsoft YaHei;
        font-weight: 200;
    }
    .titleView {
        margin-top: 70px;
    }
    .title-container {
        flex-direction: column;
        background-color: #f4f4f4;
        width: 100%;
    }
    .title-main {
        width: 100%;
        height: 100px;
        justify-content: space-between;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 0 1px 0 #cecece;
        padding-left: 15px;
        padding-right: 15px;
    }
    .title-main img {
        width: 70px;
        height: 70px;
        flex-basis: 70px;
        flex-shrink: 0;
    }
    .title-main span {
        margin-left: 15px;
    }
</style>

