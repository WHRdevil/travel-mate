<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const onClickLeft = () => history.back();

const themeVars = reactive({
    fontBold: '500',
    navBarIconColor: 'black',
    borderWidth: '0',
})

const result = ref('');
const showPicker = ref(false);
const onConfirm = ({ selectedValues }) => {
    result.value = selectedValues.join('/');
    showPicker.value = false;
};

const checked = ref('1');

</script>

<template>
    <van-sticky>
        <van-config-provider :theme-vars="themeVars">
            <van-nav-bar title="新用户注册" left-arrow @click-left="onClickLeft" />
        </van-config-provider>
    </van-sticky>
    <div class="content">
        <div class="avatar">
            <svg>
                <use xlink:href="#icon-xiangji-copy"></use>
            </svg>
        </div>
        <van-cell-group inset>
            <van-field v-model="username" name="用户名" placeholder="请输入昵称(不能超过12个字符)"
                :rules="[{ required: true, message: '请输入昵称' }]" />

            <van-field v-model="result" is-link readonly name="datePicker" placeholder="点击选择时间"
                @click="showPicker = true" />
            <van-popup v-model:show="showPicker" position="bottom">
                <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
            </van-popup>

            <van-field name="radio">
                <template #input>
                    <van-radio-group v-model="checked" direction="horizontal" class="sex">
                        <van-radio name="1">男</van-radio>
                        <van-radio name="2">女</van-radio>
                    </van-radio-group>
                </template>
            </van-field>

            <van-field v-model="phone" name="电话" placeholder="请输入手机号" 
            :rules="[{ required: true, message: '请输入手机号' }]" />

            <van-field v-model="password" name="密码" placeholder="请输入密码" 
            :rules="[{ required: true, message: '请输入密码' }]" />

            <van-field v-model="repassword" name="电话" placeholder="请再次输入密码" 
            :rules="[{ required: true, message: '请输入密码' }]" />

        </van-cell-group>
        <button>注册</button>
        <router-link to="/login" class="login">已有账号？点此登录</router-link>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.avatar {
    width: 100px;
    height: 100px;
    border: 1px solid rgb(185, 184, 184);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 15px;
}

.avatar svg {
    width: 40px;
    height: 40px;
}

.van-cell-group {
    width: 90%;
}

.van-field {
    font-size: 16px;
    border-bottom: 1px solid rgb(223, 222, 222);
    margin-top: 15px;
}

/* .sex {
    display: flex;
    align-items: center;
} */
:deep(.van-radio-group) {
    margin-left: 90px;
}

.van-radio {
    margin-right: 50px;
}

button{
    color: white;
    width: 250px;
    height: 50px;
    background-color: #9b2a2a;
    border: 1px solid white;
    border-radius: 25px;
    margin-top: 50px;
}

.login{
    color: #1989FA;
    margin-top: 20px;
}
</style>