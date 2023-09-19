<script setup>
import { reactive, ref } from 'vue'
const onClickLeft = () => history.back();

const themeVars = reactive({
    fontBold: '500',
    navBarIconColor: 'black',
    borderWidth: '0',
})
const item = reactive({
    gridItemContentPadding: 0,
})
</script>

<template>
    <van-sticky>
        <van-config-provider :theme-vars="themeVars">
            <van-nav-bar left-arrow @click-left="onClickLeft" />
        </van-config-provider>
    </van-sticky>
    <img src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1307/10/c0/23166997_1373443405186.jpg" alt="">
    <div class="box">
        <span class="name">Devil</span>
        <div class="affect">
            <span>{{ }}<span>关注</span></span>
            <span class="point">~</span>
            <span>{{ }}<span>粉丝</span></span>
        </div>
        <span class="info">资料</span>
    </div>
    <van-config-provider :theme-vars="item">
        <van-grid :column-num="2" :border="false" :center="false" style="margin: 0 15px;">
            <van-grid-item :theme-vars="item">
                <p>ID:<span>{{ 1 }}</span></p>
            </van-grid-item>
            <van-grid-item :theme-vars="item">
                <p>性别:<span>{{ 2 }}</span></p>
            </van-grid-item>
            <van-grid-item :theme-vars="item">
                <p>年龄:<span>{{ 3 }}</span></p>
            </van-grid-item>
            <van-grid-item :theme-vars="item">
                <p>家乡:<span>{{ 4 }}</span></p>
            </van-grid-item>
            <van-grid-item :theme-vars="item">
                <p>职业:<span>{{ 5 }}</span></p>
            </van-grid-item>
            <van-grid-item :theme-vars="item">
                <p>情感:<span>{{ 6 }}</span></p>
            </van-grid-item>
        </van-grid>
    </van-config-provider>

    <button>关注</button>
</template>

<style scoped>
.van-grid-item>div {
    padding: 0;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 15px;
}

img {
    width: 100vw;
    height: 260px;
}

.name {
    font-size: 18px;
    font-weight: bold;
    margin-top: 8px;
}

.affect {
    margin-top: 8px;
}

.affect .point {
    margin: 0 20px;
}

.affect span {
    font-size: 12px;
    color: gray;
}

.info {
    font-size: 18px;
    font-weight: bold;
    margin-top: 30px;
}


.van-grid p {
    color: gray;
}

.van-grid span {
    color: black;
}



button {
    width: 60px;
    height: 30px;
    color: white;
    background-color: #d61b78;
    border: 1px solid white;
    border-radius: 25px;
    margin: 0 15px;
}
</style>
