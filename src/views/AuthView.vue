<script setup>
import { ref } from 'vue'
import { login } from '../http/api/authApi'
import { useRouter } from 'vue-router'

const phone = ref('')
const password = ref('')
const passwordVisibility = ref(false)
const router = useRouter()

const onClick = () => {
  login({
    phone: phone.value,
    password: password.value
  })
    .then((res) => {
      console.log(res)
      if (res.code == 1) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('phone', res.data.phone)
        localStorage.setItem('id', res.data.id)
        router.replace('/')
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <div class="container">
    <svg class="icon avatar" aria-hidden="true">
      <use xlink:href="#icon-touxiang"></use>
    </svg>
    <div class="info">
      <van-cell-group inset class="info-group">
        <van-field v-model="phone" input-align="center" clearable required placeholder="输入手机号码" />
        <van-field
          v-model="password"
          input-align="center"
          :type="passwordVisibility ? 'text' : 'password'"
          required
          placeholder="输入登录密码"
        >
          <template #button v-if="password != ''">
            <svg class="icon" aria-hidden="true" @click="passwordVisibility = !passwordVisibility">
              <use :xlink:href="`#icon-${passwordVisibility ? 'yanjing1' : 'biyanjing'}`"></use>
            </svg>
          </template>
        </van-field>
        <van-button
          type="primary"
          class="submit"
          size="large"
          :disabled="phone == '' || password == '' ? true : false"
          @click="onClick()"
        >
          登录
        </van-button>
        <div class="foot">
          <span class="forget"> </span>
          <span class="register">
            <RouterLink :to="{ name: 'register' }">注册账号</RouterLink>
          </span>
        </div>
      </van-cell-group>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  margin-top: 60px;
  margin-bottom: 40px;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: 1px solid rgb(220, 220, 220);
}

.info-group {
  width: 240px;
}

.info-group .van-field {
  background-color: rgb(248, 248, 248);
  color: white;
  border-radius: 24px;
  margin-bottom: 12px;
}

.info-group .submit {
  border-radius: 24px;
  margin-bottom: 12px;
}

.info .foot {
  display: flex;
  justify-content: space-between;
}
</style>
