<template>
    <TheHeader />
    <PainPoints />
    <main>
        <TheUnboxing />
        <KolRecommend />
        <TheHighlights />
        <MoreInfo />
    </main>
    <TheFooter />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import TheHeader from '@/components/TheHeader.vue';
import PainPoints from '@/components/PainPoints.vue';
import TheUnboxing from '@/components/TheUnboxing.vue';
import KolRecommend from '@/components/KolRecommend.vue';
import TheHighlights from '@/components/TheHighlights.vue';
import MoreInfo from '@/components/MoreInfo.vue';
import TheFooter from '@/components/TheFooter.vue';

import AOS from 'aos';

onMounted(() => {
    AOS.init();
});
</script>
