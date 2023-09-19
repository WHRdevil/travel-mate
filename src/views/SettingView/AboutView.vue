<script setup>
import { reactive, ref } from 'vue'
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
            <van-nav-bar title="关于我们" left-arrow @click-left="onClickLeft" />
        </van-config-provider>
    </van-sticky>
    <div class="box">
        <h1 style="font-weight: normal;">关于约伴出行</h1>
        <div style="line-height: 20px; ">
            <p>访问官网</p>
            <p>www.imyueben.com</p>
            <p>www.vcway.cn</p>
        </div>
        <div style="line-height: 20px; margin-top: 20px;">
            <p>官网邮箱</p>
            <p>Yn@ynwangli.com</p>
        </div>
        <div style="line-height: 20px; margin-top: 20px;">
            <p>网络内容从业人员违法违规行为举报</p>
            <p>32999999@qq.com</p>
        </div>
    </div>
</template>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 20px;
}
</style>
