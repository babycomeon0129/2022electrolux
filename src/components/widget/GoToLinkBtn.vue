<template>
    <a class="goToLink btn" :href="props.url" target="_blank">{{ props.btnName }}</a>
</template>

<script setup leng="ts">
import { defineProps } from 'vue';

const props = defineProps({
    btnName: String,
    url: String,
    pa: Number,
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/widgetStyle';
</style>
