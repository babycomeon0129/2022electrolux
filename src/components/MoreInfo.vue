<template>
    <div class="moreInfo__btn row" data-aos="flip-down">
        <a href=" https://www.electrolux.com.tw/blog/ultimate-home-700-vacuum-cleaners/#/" target="_blank"
            ><span>了解<br />更多</span></a
        >
    </div>
    <div class="moreInfo">
        <div class="container">
            <SwiperImg :images="moreInfoImg" data-aos="fade-up" />
            <iframe
                src="https://www.youtube.com/embed/Ocbuz80EMTA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                data-aos="fade-up"
            ></iframe>
        </div>
    </div>
</template>

<script setup leng="ts">
import SwiperImg from '@/components/widget/SwiperImg.vue';

const moreInfoImg = [
    'moreInfo__img01.png',
    'moreInfo__img02.png',
    'moreInfo__img03.png',
    'moreInfo__img04.png',
    'moreInfo__img05.png',
];
</script>

<style lang="scss" scoped>
@import '@/assets/styles/moreInfo';
</style>
