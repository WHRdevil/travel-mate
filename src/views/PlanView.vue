<script setup>
import { reactive, ref } from 'vue'
const onClickLeft = () => history.back();

const themeVars = reactive({
    fontBold: '500',
    navBarIconColor: 'black',
    borderWidth: '0',
    navBarTextColor: 'black',
})

const columns = [
    { text: 'AA制', value: 'AA' },
    { text: '男A女免', value: 'A' },
    { text: '免费参加', value: 'FREE' },
];
const fieldValue = ref('');
const showPicker = ref(false);
const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    fieldValue.value = selectedOptions[0].text;
};

const date = ref('');
const show = ref(false);

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
const checkDate = (values) => {
    const [start, end] = values;
    show.value = false;
    date.value = `${formatDate(start)} - ${formatDate(end)}`;
};


const afterRead = (file) => {
    // 此时可以自行将文件上传至服务器
    console.log(file);
};
const fileList = ref([]);
</script>

<template>
    <van-sticky>
        <van-config-provider :theme-vars="themeVars">
            <van-nav-bar left-text="发布计划" left-arrow @click-left="onClickLeft">
                <template #right>
                    <button>发布</button>
                </template>
            </van-nav-bar>
        </van-config-provider>
    </van-sticky>
    <div class="box">
        <span>填写基本信息</span>
        <div class="form">
            <van-cell-group inset>
                <!-- 输入任意文本 -->
                <van-field v-model="text" label="出发地" input-align="right" size="large" placeholder="请输入出发地" />
                <!-- 输入任意文本 -->
                <van-field v-model="text" label="目的地" input-align="right" size="large" placeholder="请输入目的地" />
                <!-- 允许输入正整数，调起纯数字键盘 -->
                <van-field v-model="digit" type="digit" label="人均预算（元）" label-width="120px" input-align="right" size="large"
                    placeholder="输入人均预算" />
                <!-- 允许输入正整数，调起纯数字键盘 -->
                <van-field v-model="digit" type="digit" label="希望人数（人）" label-width="120px" input-align="right" size="large"
                    placeholder="输入邀请人数" />
            </van-cell-group>
            <div style="margin: 0 16px;">
                <van-field v-model="fieldValue" is-link readonly label="分摊方式" @click="showPicker = true"
                    input-align="right" />
                <van-popup v-model:show="showPicker" round position="bottom">
                    <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                </van-popup>

                <van-cell title="行程日期" is-link :value="date" @click="show = true" input-align="right" />
                <van-calendar v-model:show="show" type="range" @confirm="checkDate" />
            </div>
        </div>
    </div>
    <div class="line"></div>
    <div class="box">
        <div class="form">
            <van-cell-group inset>
                <van-field v-model="value" placeholder="请输入计划标题" style="font-size: 18px;" />
            </van-cell-group>
            <van-divider :style="{ color: '#000000', borderColor: '#000000', padding: '0 16px', margin: '0' }" />
            <van-cell-group inset>
                <van-field v-model="message" rows="3" autosize type="textarea"
                    placeholder="填写您的行程描述，优质的文案和图片会获得系统推荐。描述内容留有微信号、链接、第三方联系方式的，系统会删除您的计划，严重者封号处理。" />
            </van-cell-group>
            <div class="pic">
                <van-uploader :after-read="afterRead" v-model="fileList" multiple />
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    color: rgb(121, 121, 121);
    border: 1px solid white;
    border-radius: 15px;
    width: 55px;
    height: 26px;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 15px;
}

.box span {
    font-weight: bold;
}

.box .form {
    width: 100%;
}

.van-cell {
    padding: 12px 0;
}

.line {
    border: 8px solid rgb(230, 229, 229);
    margin: 15px 0;
}
.pic{
    margin-left: 12px;
}
</style>
