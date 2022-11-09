<template>
    <div class="highlights">
        <div class="container">
            <TitleH2 title="亮眼特色" />
            <div class="highlights__list">
                <div
                    v-for="(highlight, index) in highlightsData"
                    :key="highlight.id"
                    class="highlights__container row"
                    :class="`highlights__container__${index + 1}`"
                    :data-aos="aosAnimate(index)"
                >
                    <div class="highlights__container__img col-6 col-m12">
                        <SwiperImg v-if="index === 0" :images="highlight.img" />
                        <img v-if="index > 0" :src="imgSrc(highlight.img[0])" class="rwdimg" loading="lazy" />
                        <div v-if="index === 0" class="highlights__container__focus row">
                            <div
                                v-for="(focus, idx) in highlight.focus"
                                :key="`focus${idx}`"
                                class="highlights__container__focus__content row"
                            >
                                <img :src="imgSrc(focus.icon)" class="rwdmax" loading="lazy" />
                                <p v-html="focus.text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="highlights__container__content col-6 col-m12 row">
                        <div class="highlights__container__content__box">
                            <div>
                                <h3 v-html="highlight.title"></h3>
                                <p v-html="highlight.description"></p>
                            </div>
                            <div v-if="index > 0" class="highlights__container__focus row">
                                <div
                                    v-for="(focus, idx) in highlight.focus"
                                    :key="`focus${idx}`"
                                    class="highlights__container__focus__content row"
                                >
                                    <img :src="imgSrc(focus.icon)" class="rwdmax" loading="lazy" />
                                    <p v-html="focus.text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TitleH2 from '@/components/widget/TitleH2.vue';
import SwiperImg from '@/components/widget/SwiperImg.vue';

import highlightsData from '@/assets/data/highlights.json';

const imgSrc = (imgName: string): string => require(`@/assets/images/${imgName}`);
const aosAnimate = (index: number): string => (index % 2 === 0 ? 'fade-right' : 'fade-left');
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theHighlights';
</style>
