<template>
    <div class="carousel">
        <div class="carousel-container">
            <div class="item" v-for="item in items">
                <img :src="item.image|image" >
                <div class="title">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import {getCarousel} from '../service/http.js';
    export default{
        name:'carousel',
        data(){
            return{
                items:[],
            } 
        },
        methods:{

        },
        mounted(){
            getCarousel().then((res)=>{
                this.items=res.top_stories;
            });
        }
    }
</script>
<style>

</style>
