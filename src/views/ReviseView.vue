<script setup>
import { reactive, ref } from 'vue'
const onClickLeft = () => history.back();

const themeVars = reactive({
    fontBold: '500',
    navBarIconColor: 'black',
    borderWidth: '0',
})

const afterRead = (file) => {
    // 此时可以自行将文件上传至服务器
    console.log(file);
};
const fileList = ref([]);
</script>

<template>
    <van-sticky>
        <van-config-provider :theme-vars="themeVars">
            <van-nav-bar title="个人资料" left-arrow @click-left="onClickLeft" />
        </van-config-provider>
    </van-sticky>
    <div class="box">
        <span style="font-weight: bold;">修改头像</span>
        <div style="margin: 10px 0;">
            <van-uploader :after-read="afterRead" v-model="fileList" multiple />
        </div>
        <div style="border: 2px solid rgb(227, 227, 227); margin: 15px 0;"></div>
        <span style="color: gray;">我的信息</span>
        <!-- <van-cell-group inset>
            <van-field v-model="value" label="昵称" placeholder="请输入用户名" />
        </van-cell-group> -->

    </div>
</template>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
}
</style>
