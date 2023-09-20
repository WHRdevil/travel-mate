<script setup>
import { reactive, ref, onMounted } from 'vue'
import { getHotelInfoById } from '../http/api/hotelApi'
import { useRoute } from 'vue-router'
import { BASE_URL } from '../utils/utils'

const onClick = () => history.back()

const route = useRoute()

const hotelInfo = ref({})
onMounted(() => {
  getHotelInfoById(route.query.id).then((value) => {
    console.log(value)
    if (value.code == 1) {
      hotelInfo.value = value.data
    }
  })
})

const themeVars = reactive({
  fontBold: '500',
  navBarIconColor: 'black',
  borderWidth: '0'
})
</script>

<template>
  <div v-if="hotelInfo.pic" class="header" :style="{ backgroundImage: `url(${BASE_URL + '/' + hotelInfo.pic})` }">
    <span @click="onClick">＜</span>
  </div>
  <div class="body">
    <div class="box">
      <p class="title">{{ hotelInfo.title }}</p>
      <van-text-ellipsis rows="2" :content="hotelInfo.content" />
      <div class="line"></div>
      <p class="title">房东说</p>
      <span>{{ hotelInfo.landlord_talk }}</span>
      <p class="title">酒店描述</p>
      <span>{{ hotelInfo.content }}</span>
      <p class="title">位置</p>
      <span>{{ hotelInfo.location }}</span>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100vw;
  height: 250px;
  background-image: url('../assets/img/hotel1.jpg');
  background-size: cover;
}

.header span {
  color: white;
  font-size: 28px;
}

.body {
  background-color: white;
  border-radius: 10px;
  margin-top: -30px;
}

.body .title {
  font-size: 18px;
  font-weight: bold;
}
.box {
  display: flex;
  flex-direction: column;
  margin: 0 12px;
}
.line {
  border: 1px solid rgb(232, 232, 232);
  margin: 25px 0;
}

.box span {
  line-height: 24px;
}
</style>
