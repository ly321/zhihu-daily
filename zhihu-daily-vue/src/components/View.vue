<template>
    <div class="view">
        <router-view class="router-view"></router-view>
    </div>
</template>
<script>
    export default {
        name: 'view',
        data() {
            return {

            }
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
.view {
    width: inherit;
    flex-grow: 2;
    position: relative;
    overflow-y: auto;
    display: block;
    /*overflow-x: hidden;*/
}

.view .router-view {
    width: 100%;
}
.view, .view .router-view {
    flex-direction: column;
    justify-content: flex-start;
}
</style>
