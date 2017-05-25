<template>
    <div class="header" v-bind:class="{color:color}">
        <div class="menu" @click="handleClick()"></div>
        <span>{{headerTitle}}</span>
    </div>
</template>
<script>
    export default {
        name: "header",
        data() {
            return {
                
            }
        },
        methods: {
            handleClick: function() {
                this.onClick();
            },
        },
        props:['onClick','color','headerTitle'],
    }
</script>
<style>
    .header {
        width: inherit;
        height: 70px;
        /*background-color: #00a2ea;*/
        justify-content: flex-start;
        padding-left: 30px;
        flex-basis: 70px;
        flex-shrink: 0;
        position: absolute;
        top: 0;
        z-index: 2;
    }
    .color{
        background-color: #00a2ea;        
    }
    .header .menu {
        height: 16px;
        width: 20px;
        border-color: #fff;
        border-style: solid;
        border-width: 2px 0;
        cursor: pointer;
    }
    .header .menu:before {
        content: "";
        width: 20px;
        height: 2px;
        background-color: #fff;
    }
    .header span{
        color: #fff;
    margin-left: 20px;
    }
</style>