<script setup>
import { onMounted, ref } from 'vue'
import { getRandHotel } from '../http/api/hotelApi'
import { BASE_URL } from '../utils/utils'

const hotels = ref([])
onMounted(() => {
  getRandHotel().then((value) => {
    console.log(value)
    if (value.code == 1) {
      hotels.value = value.data
    }
  })
})
</script>

<template>
  <h1>热门民宿</h1>
  <div class="wrap">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in hotels">
        <RouterLink :to="{ name: 'hotel', query: { id: item.hotel_id } }">
          <div class="info">
            <div class="title" align="left">
              <div class="pictil">
                {{ item.title }}
              </div>
              <div class="desc">
                <van-text-ellipsis :content="item.content" />
              </div>
            </div>
            <img :src="BASE_URL + '/' + item.pic" alt="" />
          </div>
        </RouterLink>
      </van-swipe-item>
      <template #indicator> </template>
    </van-swipe>
  </div>
  <van-search placeholder="搜索酒店" shape="round" />
  <h1>酒店+车+景自由行套餐</h1>
  <div class="shop">
    <div class="info" v-for="info in hotels">
      <RouterLink :to="{ name: 'hotel', query: { id: info.hotel_id } }">
        <img :src="BASE_URL + '/' + info.pic" alt="" />
        <div class="desc">
          <van-text-ellipsis rows="2" :content="info.content" />
        </div>
        <span class="currency">¥</span>
        <span class="price">{{ info.money }}</span>
        <span class="unit"> / 晚</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 20px;
  margin: 5px 16px 20px;
}

.my-swipe a {
  color: white;
}

.wrap {
  margin: 0 16px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 220px;
  text-align: center;
  background-color: white;
}

.info {
  position: relative;
}

.my-swipe .van-swipe-item img {
  position: absolute;
  left: 0;
  /* width: 100%; */
  width: 358px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
}

.head,
.title {
  position: absolute;
  z-index: 1;
  margin-top: 150px;
  margin-left: 8px;
}

.title .pictil {
  font-weight: bolder;
  font-family: '楷体';
}

.title .desc {
  width: 330px;
  font-size: 18px;
  font-family: '楷体';
}

.shop {
  margin: 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 50px;
}

.shop .info {
  width: 171px;
  height: 220px;
}

.shop .info img {
  width: 171px;
  border-radius: 10px;
}

.shop .desc {
  color: black;
  font-weight: bold;
  /* font-family: '楷体'; */
}

.shop .currency {
  font-size: 12px;
  color: #ff058f;
}

.shop .price {
  font-size: 18px;
  color: #ff058f;
}

.shop .unit {
  font-size: 14px;
  color: #a6a7b1;
}
</style>
