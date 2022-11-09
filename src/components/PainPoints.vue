<template>
    <div class="painpoints">
        <div class="container">
            <TitleH2
                :title="`根據市調發現，<span class='for-mobile focus'><br></span>居家拖地清潔有這<span class='focus'>3</span>大痛點`"
                :mode="2"
            />
            <div class="painpoints-content row">
                <div class="painpoints-content__box col-4 col-m12 row" data-aos="fade-up" data-aos-delay="100">
                    <div class="painpoints-content__img col-m6">
                        <img src="@/assets/images/painpoint__img__01.png" class="rwdimg" loading="lazy" />
                    </div>
                    <div class="painpoints-content__text col-m6">
                        <p>需要一直清洗拖布</p>
                    </div>
                </div>
                <div class="painpoints-content__box col-4 col-m12 row" data-aos="fade-up">
                    <div class="painpoints-content__img col-m6">
                        <img src="@/assets/images/painpoint__img__02.png" class="rwdimg" loading="lazy" />
                    </div>
                    <div class="painpoints-content__text col-m6">
                        <p>手洗拖布容易弄髒周圍和弄髒雙手</p>
                    </div>
                </div>
                <div class="painpoints-content__box col-4 col-m12 row" data-aos="fade-up" data-aos-delay="100">
                    <div class="painpoints-content__img col-m6">
                        <img src="@/assets/images/painpoint__img__03.png" class="rwdimg" loading="lazy" />
                    </div>
                    <div class="painpoints-content__text col-m6">
                        <p>需提沉重的水桶</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TitleH2 from '@/components/widget/TitleH2.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/painPoint';
</style>
