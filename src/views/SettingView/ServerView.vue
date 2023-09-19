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
            <van-nav-bar title="用户服务协议" left-arrow @click-left="onClickLeft" />
        </van-config-provider>
    </van-sticky>
    <div class="box">
        <h1>“约伴出行”用户协议</h1>
        <p>更新日期：2023年9月18日</p>
        <span>生效日期：2023年9月18日</span>
        <h3 style="font-weight: normal;">1.导言</h3>
        <span>欢迎您使用“约伴出行”软件及相关服务!</span>
        <p>“约伴出行”软件及相关服务，系指网立科技（云南）有限公司及其关联方(以下简称“公司”)合法拥有并运营的、标注名称为“约伴出行”的客户端应用程序以及相关网站(www.imyueban.com)向您提供的产品与服务，包括但不限于个性化音视频推荐、发布信息、互动交流、搜索查询等核心功能及其他功能。《“约伴出行”用户服务协议》(以下称“本协议”)是您与公司就您下载、安装、注册、登录、使用(以下统称“使用”)“约伴出行”软件，并获得“约伴出行”软件提供的相关服务所订立的协议。
        </p>
        <p>为了更好地为您提供服务，请您在开始使用“约伴出行”软件及相关服务之前，认真阅读并充分理解本协议，特别是涉及免除或者限制责任的条款、权利许可和信息使用的条款、同意开通和使用特殊单项服务的条款、法律适用和争议解决条款等。其中，免除或者限制责任条款等重要内容将以加粗形式提示您注意，您应重点阅读。
        </p>
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
