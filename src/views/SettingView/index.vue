<script setup>
import { reactive, ref } from 'vue'
const onClickLeft = () => history.back();

const themeVars = reactive({
    fontBold: '500',
    navBarIconColor: 'black',
    borderWidth: '0',
})

const logout = () => {
    localStorage.removeItem('token')
    location.reload()
}
</script>

<template>
    <van-sticky>
        <van-config-provider :theme-vars="themeVars">
            <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
        </van-config-provider>
    </van-sticky>
    <RouterLink to="/setting/purview">
        <van-cell is-link title="应用权限" />
    </RouterLink>
    <RouterLink to="/setting/about">
        <van-cell is-link title="关于我们" />
    </RouterLink>
    <RouterLink to="/setting/server">
        <van-cell is-link title="用户服务协议" />
    </RouterLink>

    <van-cell is-link title="退出登录" @click="logout" />
</template>

<style scoped></style>
