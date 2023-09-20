<script setup>
import { reactive, ref } from 'vue'
const onClickLeft = () => history.back();

const minDate = new Date(1980, 0, 1)
const maxDate = new Date(2023, 8, 1)
const emotion = [
    { text: '保密', value: 'secrecy' },
    { text: '单身', value: 'Single' },
    { text: '已婚', value: 'married' },
    { text: '恋爱中', value: 'dating' },
]
const occupation = [
    { text: '主播', value: 'anchor' },
    { text: '设计师', value: 'designer' },
    { text: '建筑师', value: 'architect' },
    { text: '老师', value: 'teacher' },
    { text: '自由职业者', value: 'freelancer' },
]
const sex = [
    { text: '男', value: 'male' },
    { text: '女', value: 'female' },
]
const hometown = [
    {
        text: '浙江',
        value: 'Zhejiang',
        // children: [
        //     {
        //         text: '杭州',
        //         value: 'Hangzhou',
        //         children: [
        //             { text: '西湖区', value: 'Xihu' },
        //             { text: '余杭区', value: 'Yuhang' },
        //         ],
        //     },
        //     {
        //         text: '温州',
        //         value: 'Wenzhou',
        //         children: [
        //             { text: '鹿城区', value: 'Lucheng' },
        //             { text: '瓯海区', value: 'Ouhai' },
        //         ],
        //     },
        // ],
    },
    {
        text: '江西',
        value: 'Jiangxi',
        // children: [
        //     {
        //         text: '抚州',
        //         value: 'Fuzhou',
        //         children: [
        //             { text: '临川区', value: 'Linchuan' },
        //             { text: '台江区', value: 'Taijiang' },
        //         ],
        //     },
        //     {
        //         text: '南昌',
        //         value: 'Nanchang',
        //         children: [
        //             { text: '新建区', value: 'Xinjian' },
        //             { text: '红谷滩区', value: 'Honggutan' },
        //         ],
        //     },
        // ],
    },
]

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

const result = ref('')
const showPicker = ref(false)
const onConfirm = ({ selectedValues }) => {
    result.value = selectedValues.join('/')
    showPicker.value = false
}

const fieldEmotionValue = ref('');
const showEmotion = ref(false);
const emotionOnConfirm = ({ selectedOptions }) => {
    showEmotion.value = false;
    fieldEmotionValue.value = selectedOptions[0].text;
};

const fieldSexValue = ref('');
const showSex = ref(false);
const sexOnConfirm = ({ selectedOptions }) => {
    showSex.value = false;
    fieldSexValue.value = selectedOptions[0].text;
};

const fieldOccupationValue = ref('');
const showOccupation = ref(false);
const occupationOnConfirm = ({ selectedOptions }) => {
    showOccupation.value = false;
    fieldOccupationValue.value = selectedOptions[0].text;
};

const fieldHometownValue = ref('');
const showHometown = ref(false);
const hometownOnConfirm = ({ selectedOptions }) => {
    showHometown.value = false;
    fieldHometownValue.value = selectedOptions[0].text;
};
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
    </div>
    <div style="border: 2px solid rgb(227, 227, 227); margin: 15px 20px;"></div>
    <div class="box">
        <span style="color: gray;">我的信息</span>
        <div class="form">
            <van-cell-group inset>
                <van-field v-model="text" label="昵称" input-align="right" placeholder="请输入昵称">
                    {{ }} //原有的昵称
                </van-field>
            </van-cell-group>
            <div class="bir" style="margin: 0 16px; font-size: 18px;">
                <van-field label="生日" v-model="result" is-link input-align="right" name="datePicker" placeholder="点击选择时间"
                    @click="showPicker = true" />
                <van-popup v-model:show="showPicker" position="bottom">
                    <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" :min-date="minDate"
                        :max-date="maxDate" />
                </van-popup>

                <van-field v-model="fieldSexValue" is-link readonly label="性别" placeholder="请选择性别" @click="showSex = true"
                    input-align="right" />
                <!-- 加一个初始值（就是未修改之前的数据） -->
                <van-popup v-model:show="showSex" round position="bottom">
                    <van-picker :columns="sex" @cancel="showSex = false" @confirm="sexOnConfirm" />
                </van-popup>

                <van-field v-model="fieldEmotionValue" is-link readonly label="情感" placeholder="请选择情感"
                    @click="showEmotion = true" input-align="right" />
                <!-- 加一个初始值（就是未修改之前的数据） -->
                <van-popup v-model:show="showEmotion" round position="bottom">
                    <van-picker :columns="emotion" @cancel="showEmotion = false" @confirm="emotionOnConfirm" />
                </van-popup>

                <van-field v-model="fieldOccupationValue" is-link readonly label="职业" placeholder="请选择职业"
                    @click="showOccupation = true" input-align="right" />
                <!-- 加一个初始值（就是未修改之前的数据） -->
                <van-popup v-model:show="showOccupation" round position="bottom">
                    <van-picker :columns="occupation" @cancel="showOccupation = false" @confirm="occupationOnConfirm" />
                </van-popup>

                <van-field v-model="fieldHometownValue" is-link readonly label="家乡" placeholder="请选择家乡"
                    @click="showHometown = true" input-align="right" />
                <!-- 加一个初始值（就是未修改之前的数据） -->
                <van-popup v-model:show="showHometown" round position="bottom">
                    <van-picker :columns="hometown" @cancel="showHometown = false" @confirm="hometownOnConfirm" />
                </van-popup>
            </div>
        </div>
    </div>
    <button 
    style="color: white; 
    width: 200px;
    height: 50px;
    background-color: red;
    /* margin: 20xp auto 0;  */
    border: 0px solid white; 
    border-radius: 25px; 
    position: fixed;
    left: 25% ;
    bottom: 20px;    
    ">
    保存
    </button>
</template>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 20px;
    /* position: relative; */
}

.box .form {
    width: 100%;
}

.van-cell {
    padding: 12px 0;
}
</style>
