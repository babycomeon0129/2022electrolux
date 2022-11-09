<template>
    <div class="unboxing">
        <div class="container">
            <TitleH2 title="搶先評測老實說" />
            <p class="unboxing-slogan">居家清潔免沾手，讓你清潔毫不費力！</p>
            <div class="unboxing-container row" data-aos="fade-up">
                <div class="col-6 col-m12">
                    <SwiperImg :images="unboxingImg" />
                </div>
                <div class="unboxing-content col-6 col-m12">
                    <h3 class="unboxing-content__title">
                        【2022乾吸濕拖吸塵器開箱(五星)評測】全球首創「免手洗淨汙分流系統」，濕拖更乾淨不髒手！伊萊克斯直立濕拖吸塵器UltimateHome
                        700
                    </h3>
                    <p>
                        受夠每回打掃把自己弄得腰痠背痛、還要忍受手洗拖布弄髒雙手嗎？好不容易吸好地板卻發現吸塵器吸頭被毛髮纏繞卡住，影響吸塵效能好困擾！出現這些困擾讓我們居家打掃時間拉長、掃完身心靈更加疲憊？不如選對產品一次到位，讓打掃不再是費時勞力苦差事！
                    </p>
                    <div class="unboxing-content__btn">
                        <GotoLinkBtn btnName="看專業評測去" url="https://styleme.pixnet.net/post/226249249" :pa="1" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TitleH2 from '@/components/widget/TitleH2.vue';
import GotoLinkBtn from '@/components/widget/GoToLinkBtn.vue';
import SwiperImg from '@/components/widget/SwiperImg.vue';

const unboxingImg = ['unboxing__img01.jpg', 'unboxing__img02.jpg', 'unboxing__img03.jpg'];
</script>
<style lang="scss" scoped>
@import '@/assets/styles/theUnboxing';
</style>
