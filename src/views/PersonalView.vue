<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getUserInfoById } from '../http/api/userApi'
import { getAge } from '../utils/utils'
import { followById } from '../http/api/userApi'
import { showToast } from 'vant'
import { BASE_URL } from '../utils/utils'

const onClickLeft = () => history.back()

const userInfo = ref({})

const route = useRoute()
onMounted(() => {
  getUserInfoById(route.query.id).then((value) => {
    console.log(value)
    if (value.code == 1) {
      userInfo.value = value.data
    }
  })
})

const themeVars = reactive({
  fontBold: '500',
  navBarIconColor: 'black',
  borderWidth: '0'
})

const item = reactive({
  gridItemContentPadding: 0
})

const alreadyClick = ref(false)

const followUser = () => {
  const self_id = localStorage.getItem('id')
  console.log(self_id)
  if (self_id == route.query.id) {
    showToast('不能关注自己')
  } else {
    followById(route.query.id).then((value) => {
      console.log(value)
      alreadyClick.value = true
      userInfo.value.followers = userInfo.value.followers + 1
    })
  }
}
</script>

<template>
  <van-sticky>
    <van-config-provider :theme-vars="themeVars">
      <van-nav-bar left-arrow @click-left="onClickLeft" />
    </van-config-provider>
  </van-sticky>
  <van-image
    v-if="userInfo.pic"
    :src="userInfo.pic.indexOf('http') == -1 ? BASE_URL + '/' + userInfo.pic : userInfo.pic"
    fit="cover"
  />
  <div class="box">
    <span class="name">{{ userInfo.account }}</span>
    <div class="affect">
      <span>{{ userInfo.following }}<span>关注</span></span>
      <span class="point">~</span>
      <span>{{ userInfo.followers }}<span>粉丝</span></span>
    </div>
    <span class="info">资料</span>
  </div>
  <van-config-provider :theme-vars="item">
    <van-grid :column-num="2" :border="false" :center="false" style="margin: 0 15px">
      <van-grid-item :theme-vars="item">
        <p>
          ID:<span>{{ userInfo.admin_id }}</span>
        </p>
      </van-grid-item>
      <van-grid-item :theme-vars="item">
        <p>
          性别:<span>{{ userInfo.sex == 1 ? '男' : '女' }}</span>
        </p>
      </van-grid-item>
      <van-grid-item :theme-vars="item">
        <p>
          年龄:<span>{{ getAge(new Date(userInfo.birthday)) }}</span>
        </p>
      </van-grid-item>
      <van-grid-item :theme-vars="item">
        <p>
          家乡:<span>{{ userInfo.home }}</span>
        </p>
      </van-grid-item>
      <van-grid-item :theme-vars="item">
        <p>
          职业:<span>{{ userInfo.job }}</span>
        </p>
      </van-grid-item>
      <van-grid-item :theme-vars="item">
        <p>
          情感:<span>{{ userInfo.emotion }}</span>
        </p>
      </van-grid-item>
    </van-grid>
  </van-config-provider>

  <button :class="alreadyClick ? 'followed' : ''" @click="followUser">{{ alreadyClick ? '已关注' : '关注' }}</button>
</template>

<style scoped>
.van-grid-item > div {
  padding: 0;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 15px;
}

.van-image {
  width: 100vw;
  height: 260px;
}

.name {
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
}

.affect {
  margin-top: 8px;
}

.affect .point {
  margin: 0 20px;
}

.affect span {
  font-size: 12px;
  color: gray;
}

.info {
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
}

.van-grid p {
  color: gray;
}

.van-grid span {
  color: black;
}

button {
  /* width: 60px; */
  height: 30px;
  color: white;
  background-color: #d61b78;
  border: 1px solid white;
  border-radius: 25px;
  margin: 0 15px;
}

.followed {
  background-color: gray;
}
</style>
