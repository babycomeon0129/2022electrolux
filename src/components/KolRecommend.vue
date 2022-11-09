<template>
    <div class="kol-recommend">
        <div class="container">
            <TitleH2 title="KOL滿意推薦，聽聽他們怎麼說!" />
            <div class="kol-recommend__list">
                <div
                    v-for="(kol, index) in kolData"
                    :key="kol.id"
                    class="kol-recommend__container row"
                    :data-aos="aosAnimate(index)"
                >
                    <div class="col-6 col-m12">
                        <SwiperImg :images="kol.kolImg" />
                    </div>
                    <div class="kol-recommend__container__content col-6 col-m12">
                        <span>部落客</span>
                        <h3>{{ kol.blogName }}</h3>
                        <p>{{ kol.description }}</p>
                        <div class="kol-recommend__container__btn">
                            <GotoLinkBtn :btnName="`${kol.blogName}老實說`" :url="kol.link" :pa="index + 2" />
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
import GotoLinkBtn from '@/components/widget/GoToLinkBtn.vue';

import kolData from '@/assets/data/kol.json';

const aosAnimate = (index: number): string => (index % 2 === 0 ? 'fade-right' : 'fade-left');
</script>

<style lang="scss" scoped>
@import '@/assets/styles/kolRecommend';
</style>
