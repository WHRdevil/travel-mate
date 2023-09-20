<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { uploadImage } from '../http/api/staticApi'
import { register } from '../http/api/authApi'

const onClickLeft = () => history.back()

const router = useRouter()

const minDate = new Date(1980, 0, 1)
const maxDate = new Date(2023, 8, 1)

const userInfo = ref({
  account: '',
  pic: '',
  sex: 1,
  phone: '',
  password: '',
  repassword: '',
  birthday: ['2000', '0', '1']
})

const themeVars = reactive({
  fontBold: '500',
  navBarIconColor: 'black',
  borderWidth: '0'
})

const result = ref('')
const showPicker = ref(false)
const onConfirm = ({ selectedValues }) => {
  result.value = selectedValues.join('/')
  showPicker.value = false
}

const afterRead = (file) => {
  console.log(file.file)
  const data = new FormData()
  data.append('file', file.file)
  uploadImage(data)
    .then((value) => {
      if (value.code == 1) {
        userInfo.value.pic = value.data.url
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

const errMessage = ref('')

const onSubmit = () => {
  let data = JSON.parse(JSON.stringify(userInfo.value))
  console.log(data)
  if (data.password != data.repassword) {
    // errMessage.value = '两次输入的密码不一致'
  } else {
    register(data).then((value) => {
      console.log(value)
      if (value.code == 1) {
        localStorage.setItem('token', value.data.token)
        localStorage.setItem('phone', value.data.phone)
        localStorage.setItem('id', value.data.id)
        router.replace('/')
      }
    })
  }
}

const comparePassword = () => {
  if (userInfo.value.password != userInfo.value.repassword) {
    errMessage.value = '两次输入的密码不一致'
  } else {
    errMessage.value = ''
  }
}
</script>

<template>
  <van-sticky>
    <van-config-provider :theme-vars="themeVars">
      <van-nav-bar title="新用户注册" left-arrow @click-left="onClickLeft" />
    </van-config-provider>
  </van-sticky>
  <div class="content">
    <div class="avatar">
      <!-- <svg>
        <use xlink:href="#icon-xiangji-copy"></use>
      </svg> -->
      <van-uploader :after-read="afterRead" v-if="userInfo.pic == ''" />
      <img v-else :src="userInfo.pic" alt="" />
    </div>
    <van-cell-group inset>
      <van-field
        v-model="userInfo.account"
        name="用户名"
        placeholder="请输入昵称(不能超过12个字符)"
        :rules="[{ required: true, message: '请输入昵称' }]"
      />

      <van-field v-model="result" is-link name="datePicker" placeholder="点击选择时间" @click="showPicker = true" />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-date-picker
          @confirm="onConfirm"
          @cancel="showPicker = false"
          :min-date="minDate"
          :max-date="maxDate"
          v-model="userInfo.birthday"
        />
      </van-popup>

      <van-field name="radio">
        <template #input>
          <van-radio-group v-model="userInfo.sex" direction="horizontal" class="sex">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field
        v-model="userInfo.phone"
        name="电话"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />

      <van-field
        v-model="userInfo.password"
        name="密码"
        placeholder="请输入密码"
        type="password"
        :rules="[{ required: true, message: '请输入密码' }]"
      />

      <van-field
        v-model="userInfo.repassword"
        name="电话"
        placeholder="请再次输入密码"
        type="password"
        :error-message="errMessage"
        @update:model-value="comparePassword"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
    </van-cell-group>
    <button @click="onSubmit">注册</button>
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 15px;
}

.avatar img {
  width: 80px;
  height: 80px;
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

button {
  color: white;
  width: 250px;
  height: 50px;
  background-color: #9b2a2a;
  border: 1px solid white;
  border-radius: 25px;
  margin-top: 50px;
}

.login {
  color: #1989fa;
  margin-top: 20px;
}
</style>
