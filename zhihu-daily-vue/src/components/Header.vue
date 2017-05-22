<template>
    <div class="header">
        <div class="menu" @click="handleClick()"></div>
        <span></span>
    </div>
</template>
<script>
    export default {
        name: "header",
        data() {
            return {}
        },
        methods: {
            handleClick: function() {
                this.onClick();
            }
        },
        props:['onClick'],
    }
</script>
<style>
    .header {
        width: inherit;
        height: 70px;
        background-color: #00a2ea;
        justify-content: flex-start;
        padding-left: 30px;
        flex-basis: 70px;
        flex-shrink: 0;
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
</style>