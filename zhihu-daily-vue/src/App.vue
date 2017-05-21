<template>
    <div class="container">
        <div class="cover"></div>
        <div id="app">
            <gHeader></gHeader>
            <gView></gView>
        </div>
        <div class="cover"></div>
    </div>
</template>

<script>
    import Header from './components/Header'
    import View from './components/View'
    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            gHeader: Header,
            gView: View,
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
    @media (min-width: 415px) {
        .app-cover {
            display: block;
        }
        #app {
            width: 414px;
        }
    }
</style>
