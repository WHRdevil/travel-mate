<script setup>
import { reactive, ref } from 'vue'
const title = ref('title')
const onClickLeft = () => history.back();

const themeVars = reactive({
    fontBold: '500',
    navBarIconColor: 'black',
    borderWidth: '0',
})
</script>
<template>
    <van-sticky>
        <van-config-provider :theme-vars="themeVars">
            <van-nav-bar :title="title" left-arrow @click-left="onClickLeft">
                <template #right>
                    <van-icon name="search" size="18" />
                </template>
            </van-nav-bar>
        </van-config-provider>
    </van-sticky>
    <div class="text">
        <span>约伴出行用户请不要微信私聊，谨防上当受骗。不付款、不转账。
            若收到彩票、赌博、酒托饭托等骗子相关的信息。
            请马上举报，系统将做永久封号处理。
        </span>
    </div>
    
    <div class="foot">
        <svg class="icon">
            <use xlink:href="#icon-yuyin"></use>
        </svg>
        <input type="text" placeholder="请输入聊天内容">
        <svg class="icon">
            <use xlink:href="#icon-biaoqing"></use>
        </svg>
        <svg class="icon">
            <use xlink:href="#icon-jiahao"></use>
        </svg>
    </div>
</template>

<style scoped>
.text {
    font-size: 12px;
    color: #BBBBC4;
    background-color: #F5F6FA;
    border-radius: 10px;
    font-family: "微软雅黑";
    padding: 2px 5px 2px;
    line-height: 18px;
    margin: 0 10px;
}

.foot {
    width: 100%;
    height: 30px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.foot .icon{
    width: 36px;
    height: 36px;
    margin: auto 10px;
}
.foot input{
    width: 100%;
    flex-grow: 1;
    background-color: #F5F6FA;
    border: 1px solid rgb(215, 215, 215);
    border-radius: 20px;
    padding: 16px 12px;
}

.foot input::placeholder {
    color: #b8b9bb;
}
</style>