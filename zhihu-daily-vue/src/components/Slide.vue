<template>
<div class="slide">
    <div class="slide-main"></div>
    <div class="slide-cover" :onClick='handleHide()'></div>
</div>
</template>
<script>
    export default {
        name:'slide',
        data(){
            return{

            }
        },
        methods:{
            handleHide(){
                this.onClick();
            }
        },
        props:['onClick']
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
.slide .slide-main {
    width: 70%;
    height: 100%;
    position: absolute;
    background-color: #232A30;
    left: 0;
    flex-direction: column;
    justify-content: flex-start;
}

</style>
