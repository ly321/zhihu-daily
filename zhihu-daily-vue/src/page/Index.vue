<template>
    <div class="index">
        <Carousel></Carousel>
        <ArticleList></ArticleList>
    </div>
</template>
<script>
    import Carousel from '../components/Carousel.vue'
    import ArticleList from '../components/ArticleList.vue'
    export default {
        name: 'index',
        data() {
            return {
            }
        },
        components: {
            Carousel,
            ArticleList,
        }
    }
</script>