<template>
    <div class="container">
        <div class="cover"></div>
        <div id="app">
            <gHeader :onClick="handleClick" :color="color" :headerTitle='headerTitle'></gHeader>
            <gView></gView>
            <gSlide :onClick="handleClick" :class="visable?'slide-show':''" :changeColor="changeColor" :changeTitle='changeTitle'></gSlide>
        </div>
        <div class="cover"></div>
    </div>
</template>

<script>
    import {
        bus
    } from './bus.js'
    import Header from './components/Header'
    import View from './components/View'
    import Slide from './components/Slide'
    export default {
        name: 'app',
        data() {
            return {
                visable: false,
                color: true,
                headerTitle: ' '
            }
        },
        methods: {
            handleClick() {
                this.visable = !this.visable;
            },
            changeColor(id) {
                if (id == undefined) {
                    this.color = false;
                } else {
                    this.color = true;
                }
            },
            changeTitle(name) {
                this.headerTitle = name;
            }
        },
        created() {
            bus.$on('tip', (text) => {
                this.headerTitle = text;
                this.changeTitle(text);
                console.log(text);
            })
            bus.$on('changeColor',(id)=>{
                this.changeColor(id);
            })
        },
         beforeRouteUpdate(to,from,next){
            this.changeColor(to.query.id);
                next();
           
        },
        mounted() {
            var id = this.$route.query.id;
            var x=parseInt(id);
            console.log(id);
            this.changeColor(id);
            var name = '热门消息';
             if(x>100){
                name='内容详情';
            }else if(x==13){
                name = '日常心理学';
            }else if(x==12){
                name = '用户推荐日报';
            }else if(x==3){
                name = '电影日报';
            }else if(x==11){
                name = '不许无聊';
            }else if(x==4){
                name = '设计日报';
            }else if(x==5){
                name = '大公司日报';
            }else if(x==6){
                name = '财经日报';
            }else if(x==10){
                name = '互联网安全';
            }else if(x==2){
                name = '开始游戏';
            }else if(x==7){
                name = '音乐日报';
            }else if(x==9){
                name = '动漫日报';
            }else if(x==10){
                name = '体育日报';
            }
            this.changeTitle(name);
        },
        components: {
            gHeader: Header,
            gView: View,
            gSlide: Slide
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
    .container {
        background: #eee;
        width: 100%;
        height: 100%;
        position: absolute;
        align-items: flex-start;
    }
    .cover {
        flex-grow: 2;
        height: inherit;
        background: inherit;
        z-index: 999;
    }
    #app {
        height: inherit;
        background: #fff;
        align-items: flex-start;
        position: relative;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
    }
    .slide {
        width: 100%;
        position: absolute;
        height: inherit;
        left: 0;
        transform: translateX(-100%);
        transition: transform .3s;
        background: hsla(0, 0%, 78%, .5);
        z-index: 20;
    }
    .slide-show {
        transform: translateX(0);
    }
    .header-show {
        background-color: #00a2ea;
        /*position: relative;*/
    }
    @media (max-width: 414px) {
        .cover {
            display: flex;
        }
        #app {
            width: 100%;
        }
    }
    @media (min-width: 415px) {
        .cover {
            display: block;
        }
        #app {
            width: 414px;
        }
    }
</style>
