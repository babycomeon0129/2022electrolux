<template>
    <div class="title" :class="{ mode2: props.mode === 2 }">
        <h2 v-html="props.title"></h2>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    mode: {
        type: Number,
        default: 1,
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/widgetStyle';
</style>
