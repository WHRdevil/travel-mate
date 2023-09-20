<script setup>
import { reactive, ref } from 'vue'
const onClickLeft = () => history.back();

const themeVars = reactive({
    fontBold: '500',
    navBarIconColor: 'black',
    borderWidth: '0',
    navBarTextColor: 'black',
})
</script>

<template>
    <van-sticky>
        <van-config-provider :theme-vars="themeVars">
            <van-nav-bar left-arrow @click-left="onClickLeft">
                <template #title>
                    <div style="display: flex;">
                        <img class='avatar' src="../assets/img/hotel1.jpg" alt="">
                        <span class="name">name</span>
                    </div>
                </template>
            </van-nav-bar>
        </van-config-provider>
    </van-sticky>
    <van-image width="100vw" height="460px" src="http://p2.qhimgs4.com/t01fd61ef8c5088feff.jpg" alt="" fit="cover" />
    <div class="box">
        <p style="font-size: 18px; font-weight: bold;">成都，找同行</p>
        <span>descripe 计划描述 {{ }}</span>
        <div style="border: 2px solid rgb(227, 227, 227); margin: 15px 0;"></div>
        <div class="departure">
            <svg>
                <use xlink:href="#icon-wxbdingwei"></use>
            </svg>
            <span>出发地 乌鲁木齐</span>
        </div>
        <div class="destination">
            <svg>
                <use xlink:href="#icon-mudedi"></use>
            </svg>
            <span>目的地 伊犁</span>
        </div>
        <div class="date">
            <svg>
                <use xlink:href="#icon-mudedi"></use>
            </svg>
            <span>起止时间 2023-9-25 至 2023-10-07</span>
        </div>
    </div>
</template>

<style scoped>
.avatar {
    width: 35px;
    height: 35px;
    border-radius: 100%;
}

.name {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
}

.box {
    margin: 0 10px;
}

.departure svg,
.destination svg,
.date svg {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 8px;
}
</style>
