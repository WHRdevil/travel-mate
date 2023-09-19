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
            <van-nav-bar title="应用权限" left-arrow @click-left="onClickLeft" />
        </van-config-provider>
    </van-sticky>
    <div class="box">
        <h2>约伴出行权限申请与使用情况说明</h2>
        <p>1.为保障约伴出行能实现与安全稳定运行之目的，我们可能会
            申请或使用操作系统的相关权限;</p>
        <p>2.为保障您的知情权，我们通过下列列表将产品可能申请、使用的相关操作系统权限进行展示，您可以根据实际需要对相关权限进行管理;</p>
        <p>3.根据产品的升级，申请、使用权限的类型与目的可能会有变动，我们将及时根据这些变动对列表进行调整，以确保您及时获悉权限的申请与使用情况;</p>
        <p>4.请您知悉，我们为业务与产品的功能与安全需要，我们可能也会使用第三方SDK，这些第三方也可能会申请或使用相关操作系统权限;</p>
        <p>5.在使用产品的过程中，您可能会使用第三方开发的H5页面或小程序，这些第三方开发开发的插件或小程序也可能因业务功能所必需而申请或使用相关操作系统权限：</p>
        <p>本说明适用于约伴出行，具体的适用范围将在以下列表中说
            明。</p>
    </div>
</template>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 15px;
}
</style>
