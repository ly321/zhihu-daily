<template>
    <div class="slide">
        <div class="slide-main">
            <div class="slide-main-header">
                <img src="../assets/logo.png" alt="">
                <span>Vue知乎日报</span>
            </div>
            <ul class="titleList">
                <li class="titleName" @click='homeClick()'>
                    <span>首页</span>
                    <img src="../assets/arrow.png" alt="">
                </li>
                <li class="titleName"  v-for="titleName in titleList" @click='handleClick(titleName.name,titleName.id)'>
                    <span>{{titleName.name}}</span>
                    <img src="../assets/arrow.png" alt="">
                </li>
            </ul>
        </div>
        <div class="slide-cover" @click='handleHide()'></div>
    </div>
</template>
<script>
    import TitleView from '../page/TitleView'
    import {
        getTitles
    } from '../service/http.js'
    export default {
        name: 'slide',
        data() {
            return {
                titleList: []
            }
        },
        methods: {
            homeClick(){
                this.$router.push({
                    path: '/',
                    query:{
                        
                    }
                });
                this.onClick();
                this.changeColor();
                this.changeTitle('热门消息')
            },
            handleClick(name,id) {
                // console.log(id);
                this.$router.push({
                    path: 'titleView',
                    query: {
                        id
                    }
                });
                this.onClick();
                this.changeColor(id);
                this.changeTitle(name);
            },
            handleHide() {
                this.onClick();
            }
        },
        mounted() {
            getTitles().then((res) => {
                this.titleList = res.others;
            })
        },
        props: ['onClick','changeColor','changeTitle']
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
    .slide .slide-main {
        width: 70%;
        height: 100%;
        position: absolute;
        background-color: #232A30;
        left: 0;
        flex-direction: column;
        justify-content: flex-start;
    }
    .slide .slide-cover {
        width: 30%;
        height: 100%;
        position: absolute;
        right: 0;
        background-color: transparent;
    }
    .slide-main-header {
        height: 120px;
        width: 100%;
        justify-content: flex-start;
        border-bottom: 1px solid #1B2329;
    }
    .slide-main-header img {
        width: 70px;
        margin: 0 20px;
    }
    .slide-main-header span {
        color: #fff;
        height: 20px;
        align-items: flex-end;
    }
    .titleList {
        width: 100%;
        flex-direction: column;
    }
    .titleName {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
    }
    .titleName span {
        color: #94999D;
        margin-left: 20px;
    }
    .titleName img {
        margin-right: 20px;
    }
</style>
