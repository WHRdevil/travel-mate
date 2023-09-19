<script setup>
import { reactive, ref } from 'vue'
const onClick = () => history.back();

const themeVars = reactive({
    fontBold: '500',
    navBarIconColor: 'black',
    borderWidth: '0',
})
const text = '酒店位于厦门岛的几何中心，繁华热闹的思明区商业中心磐基·莲花里。毗邻宁静雅致的莲花公园，紧邻厦门豪华的购物中心磐基名品中心，距离厦门高崎国际机场仅8公里。'
</script>

<template>
    <div class="header">
        <span @click="onClick">＜</span>
    </div>
    <div class="body">
        <div class="box">
            <p class="title">厦门华尔道夫</p>
            <van-text-ellipsis rows="2" :content="text" />
            <div class="line"></div>
            <p class="title">房东说</p>
            <span>酒店设有五间餐厅和一间酒吧，让您在品尝闽南特色风味的同时，也尽享各国美酒佳肴。水疗中心设有五间水疗室，每间均有私人露台，为宾客带来别致的舒逸体验。酒店还拥有设备先进的健身中心，设有桑拿房、蒸汽房和健身工作室；室外无边际泳池附有贴心宾客服务。</span>
            <p class="title">酒店描述</p>
            <span>秉承至真华尔道夫服务理念，酒店以低调奢华又具个性化的方式关注每一个细微之处，使每次入住都成为难忘铭心的特别回忆，成就华尔道夫体验。</span>
            <p class="title">位置</p>
            <span>中国 | 福建 | 厦门</span>
            <p class="title">服务设施</p>
            <span>1、华尔道夫水疗</span>
            <span>2、健身中心</span>
            <span>3、泳池</span>
        </div>
    </div>
</template>

<style scoped>
.header {
    width: 100vw;
    height: 250px;
    background-image: url('../assets/img/hotel1.jpg');
    background-size: cover;
}

.header span {
    color: white;
    font-size: 28px;
}

.body {
    background-color: white;
    border-radius: 10px;
    margin-top: -30px;
}


.body .title {
    font-size: 18px;
    font-weight: bold;
}
.box{
    display: flex;
    flex-direction: column;
    margin: 0 12px;
}
.line{
    border: 1px solid rgb(232, 232, 232);
    margin: 25px 0;
}

.box span{
    line-height: 24px;
}
</style>
