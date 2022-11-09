<template>
    <header>
        <div class="nav row">
            <a class="header__logo"
                ><img src="@/assets/images/logo.png" class="nav-logo" />
                <h1>2022 伊萊克斯極適家居700</h1>
            </a>
            <div class="menu-icon for-mobile" @click="menuState = !menuState" :class="{ action: menuState }">
                <div class="bar1" />
                <div class="bar2" />
                <div class="bar3" />
            </div>
            <ul :class="{ action: menuState }">
                <li><a @click="scrolltoBlock('painpoints')">痛點調查</a></li>
                <li>
                    <a @click="scrolltoBlock('unboxing')">搶先評測老實說</a>
                </li>
                <li>
                    <a @click="scrolltoBlock('kol-recommend')">KOL滿意推薦</a>
                </li>
                <li>
                    <a
                        class="nav__highlights"
                        @click="
                            highlightsStatus = !highlightsStatus;
                            scrolltoBlock('highlights');
                        "
                        :class="{ action: highlightsStatus }"
                        >亮眼特色<img src="@/assets/images/arrow-d.png" />
                        <ul>
                            <li @click.stop="scrolltoBlock('highlights__container__1')">
                                免手洗淨汙分流系統 淨水洗淨 潔淨真正到位
                            </li>
                            <li @click.stop="scrolltoBlock('highlights__container__2')">
                                LED免沾手濕拖吸頭深層髒汙 一拖即淨
                            </li>
                            <li @click.stop="scrolltoBlock('highlights__container__3')">
                                新款毛髮截斷吸頭 吸力提升20% 輕鬆踩踏 毛髮不糾結
                            </li>
                            <li @click.stop="scrolltoBlock('highlights__container__4')">
                                拋光滾刷吸頭淨如拋光，地板光潔如新
                            </li>
                            <li @click.stop="scrolltoBlock('highlights__container__5')">五重過濾 防阻二次汙染</li>
                            <li @click.stop="scrolltoBlock('highlights__container__6')">一推即用 吸塵不費吹灰之力</li>
                        </ul>
                    </a>
                </li>
            </ul>
        </div>
    </header>
    <img src="@/assets/images/default__banner.png" class="rwdimg for-pc" loading="lazy" />
    <img src="@/assets/images/default__banner__mb.png" class="rwdimg for-mobile" loading="lazy" />
    <h2 class="for-mobile header-title">買就送淨汙分流清洗槽,優惠只到<br />2022/12/31哦！</h2>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

/** 亮點特色開關 */
const highlightsStatus = ref(false);
/** 漢堡menu開關 */
const menuState = ref(false);
/** 點擊滑動至指定區域
 * @param {string} path 路徑
 * @param {string} block 區塊名字
 */
const scrolltoBlock = async (block: string) => {
    if (block !== 'highlights') {
        menuState.value = false;
        highlightsStatus.value = false;
    }
    const goToBlock = document.querySelector(`.${block}`) as HTMLElement;
    let offsetTopPosition = screen.width > 767 ? 80 : 65;

    // 亮點特色裡頭的小menu專用規則
    if (block.includes('highlights__container')) {
        highlightsStatus.value = false;
        const highlightsBlock = document.querySelector('.highlights') as HTMLElement;
        offsetTopPosition -= highlightsBlock.offsetTop + 50;
    }

    window.scroll({
        top: goToBlock.offsetTop - offsetTopPosition,
        behavior: 'smooth',
    });
};

watch(menuState, (newValue) => {
    if (!newValue) {
        highlightsStatus.value = false;
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theHeader';
</style>
