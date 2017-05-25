<template>
    <div class="carousel" >
        <div class="carousel-container" :style="{
    				transform:`translateX(${translateX}px)`
    			}">
            <div class="item" v-for="item in items">
                <img :src="item.image|image">
                <div class="title">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        getNews
    } from '../service/http.js';
    export default {
        name: 'carousel',
        data() {
            return {
                items: [],
                translateX: 0,
        
            }
        },
        methods: {
            movePic: function() {
                var that = this;
                setInterval(function() {
                    if (that.translateX >= -1242) {
                        that.translateX -= 414;
                    } else if (that.translateX <= -1242) {
                        that.translateX = 0;
                    }
                }, 1000);
            },
            clonePic() {
                this.items.push(this.items[0]);
                this.items.unshift(this.items[4]);
                console.log(this.items);
            }
        },
        mounted() {
            getNews().then((res) => {
                this.items = res.top_stories;
                // this.clonePic();
            });
            
            this.movePic();
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
    .carousel {
        overflow-x: hidden;
        position: relative;
        display: block;
        z-index: 1
    }
    .carousel-container {
        width: 500%;
        display: block;
        position: static;
        height: 200px;
        transition: transform .4s;
    }
    .item {
        width: 414px;
        position: relative;
        float: left;
        height: 200px;
        background-color: transparent;
        overflow: hidden;
    }
    .title {
        width: inherit;
        position: absolute;
        height: 60px;
        bottom: 0;
        left: 0;
        background-color: hsla(0, 0%, 78%, .5);
        color: #fff;
        padding: 0 10px;
    }
</style>
