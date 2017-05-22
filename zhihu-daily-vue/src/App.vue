<template>
    <div class="container">
        <div class="cover"></div>
        <div id="app">
            <gHeader :onClick="handleClick"></gHeader>
            <gView></gView>
            <gSlide :onClick="handleClick" :class="visable?'slide-show':''"></gSlide>
        </div>
        <div class="cover"></div>
    </div>
</template>

<script>
    import Header from './components/Header'
    import View from './components/View'
    import Slide from './components/Slide'
    export default {
        name: 'app',
        data() {
            return {
                visable: false,
            }
        },
        methods: {
            handleClick() {
                this.visable = !this.visable;
            }
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
        z-index: 20;
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
    }
    .slide-main {
        width: 70%;
        height: 100%;
        position: absolute;
        background-color: #fff;
        left: 0;
        flex-direction: column;
        justify-content: flex-start;
    }
    .slide-cover {
        width: 30%;
        height: 100%;
        position: absolute;
        right: 0;
        background-color: transparent;
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
