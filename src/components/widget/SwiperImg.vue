<template>
    <swiper :modules="[Pagination, Navigation]" :pagination="{ clickable: true }" navigation>
        <swiper-slide v-for="(image, idx) in props.images" :key="`${image}${idx}`">
            <img :src="imgSrc(image)" class="rwdimg" loading="lazy" />
        </swiper-slide>
    </swiper>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const props = defineProps({
    images: Array,
});

const imgSrc = (imgName: string | unknown): string => require(`@/assets/images/${imgName}`);
</script>

<style lang="scss" scoped>
@import '@/assets/styles/widgetStyle';
</style>
