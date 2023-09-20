<script setup>
import { reactive, ref } from 'vue'
import { uploadImage } from '../http/api/staticApi'
import { updateUserInfo } from '../http/api/userApi'
import { useRouter } from 'vue-router'

const onClickLeft = () => history.back()
const router = useRouter()

const text = ref('')

const minDate = new Date(1980, 0, 1)
const maxDate = new Date(2023, 8, 1)
const emotion = [
  { text: '保密', value: 'secrecy' },
  { text: '单身', value: 'single' },
  { text: '已婚', value: 'married' },
  { text: '恋爱中', value: 'dating' }
]
const occupation = [
  { text: '主播', value: 'anchor' },
  { text: '设计师', value: 'designer' },
  { text: '建筑师', value: 'architect' },
  { text: '老师', value: 'teacher' },
  { text: '自由职业者', value: 'freelancer' }
]
const sex = [
  { text: '男', value: '1' },
  { text: '女', value: '2' }
]
const hometown = ref('')

const themeVars = reactive({
  fontBold: '500',
  navBarIconColor: 'black',
  borderWidth: '0'
})

const imgPath = ref('')
const afterRead = (file) => {
  console.log(file.file)
  const data = new FormData()
  data.append('file', file.file)
  uploadImage(data)
    .then((value) => {
      console.log(value)
      if (value.code == 1) {
        imgPath.value = value.data.url
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

const fileList = ref([])

const result = ref('')
const showPicker = ref(false)
const onConfirm = ({ selectedValues }) => {
  result.value = selectedValues.join('/')
  showPicker.value = false
}

const fieldEmotionValue = ref('')
const showEmotion = ref(false)
const emotionOnConfirm = ({ selectedOptions }) => {
  showEmotion.value = false
  fieldEmotionValue.value = selectedOptions[0].text
}

const fieldSexValue = ref('')
const sexValue = ref(1)
const showSex = ref(false)
const sexOnConfirm = ({ selectedOptions }) => {
  showSex.value = false
  fieldSexValue.value = selectedOptions[0].text
  sexValue.value = selectedOptions[0].value
}

const fieldOccupationValue = ref('')
const showOccupation = ref(false)
const occupationOnConfirm = ({ selectedOptions }) => {
  showOccupation.value = false
  fieldOccupationValue.value = selectedOptions[0].text
}

const onSubmit = () => {
  const info = {
    pic: imgPath.value,
    account: text.value,
    birthday: new Date(result.value.split('/')[0], result.value.split('/')[1], result.value.split('/')[2]),
    sex: sexValue.value,
    emotion: fieldEmotionValue.value,
    job: fieldOccupationValue.value,
    home: hometown.value
  }
  console.log(info)
  updateUserInfo(info).then((value) => {
    console.log(value)
    router.replace('/me')
  })
}
</script>

<template>
  <van-sticky>
    <van-config-provider :theme-vars="themeVars">
      <van-nav-bar title="个人资料" left-arrow @click-left="onClickLeft" />
    </van-config-provider>
  </van-sticky>
  <div class="box">
    <span style="font-weight: bold">修改头像</span>
    <div style="margin: 10px 0">
      <van-uploader :after-read="afterRead" v-model="fileList" multiple />
    </div>
  </div>
  <div style="border: 2px solid rgb(227, 227, 227); margin: 15px 20px"></div>
  <div class="box">
    <span style="color: gray">我的信息</span>
    <div class="form">
      <van-cell-group inset>
        <van-field v-model="text" label="昵称" input-align="right" placeholder="请输入昵称"> {{}} </van-field>
      </van-cell-group>
      <div class="bir" style="margin: 0 16px; font-size: 18px">
        <van-field
          label="生日"
          v-model="result"
          is-link
          input-align="right"
          name="datePicker"
          placeholder="点击选择时间"
          @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" :min-date="minDate" :max-date="maxDate" />
        </van-popup>

        <van-field
          v-model="fieldSexValue"
          is-link
          readonly
          label="性别"
          placeholder="请选择性别"
          @click="showSex = true"
          input-align="right"
        />
        <van-popup v-model:show="showSex" round position="bottom">
          <van-picker :columns="sex" @cancel="showSex = false" @confirm="sexOnConfirm" />
        </van-popup>

        <van-field
          v-model="fieldEmotionValue"
          is-link
          readonly
          label="情感"
          placeholder="请选择情感"
          @click="showEmotion = true"
          input-align="right"
        />
        <van-popup v-model:show="showEmotion" round position="bottom">
          <van-picker :columns="emotion" @cancel="showEmotion = false" @confirm="emotionOnConfirm" />
        </van-popup>

        <van-field
          v-model="fieldOccupationValue"
          is-link
          readonly
          label="职业"
          placeholder="请选择职业"
          @click="showOccupation = true"
          input-align="right"
        />
        <!-- 加一个初始值（就是未修改之前的数据） -->
        <van-popup v-model:show="showOccupation" round position="bottom">
          <van-picker :columns="occupation" @cancel="showOccupation = false" @confirm="occupationOnConfirm" />
        </van-popup>

        <van-field v-model="hometown" label="家乡" placeholder="请选择家乡" input-align="right" />
      </div>
    </div>
  </div>
  <button
    @click="onSubmit"
    style="
      color: white;
      width: 200px;
      height: 50px;
      background-color: red;
      /* margin: 20xp auto 0;  */
      border: 0px solid white;
      border-radius: 25px;
      position: fixed;
      left: 25%;
      bottom: 20px;
    "
  >
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
