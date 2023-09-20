<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import PostView from './PostView.vue'

const router = useRouter()

const value = ref('')
const curIndex = ref(0)
const swipe = ref()
const active = ref('0')

const images = [
  'https://www.loliapi.com/acg/?id=28',
  'https://www.loliapi.com/acg/?id=29',
  'https://www.loliapi.com/acg/?id=32',
  'https://www.loliapi.com/acg/?id=31',
  'https://www.loliapi.com/acg/?id=27'
]

const onChange = (index) => {
  curIndex.value = index
}

const onClick = (index) => {
  swipe.value.swipeTo(index)
}

const onSubmit = () => {
  router.push({ name: 'publish' })
}

const tablist = [
  {
    name: '最新',
    path: 'message'
  },
  {
    name: '热门',
    path: 'party'
  },
  {
    name: '会员',
    path: 'assistant'
  },
  {
    name: '官方',
    path: 'assistant'
  }
]

const typeComponent = {
  // message: MessageView,
  // party: PartyView,
  // assistant: AssistantView
}
</script>

<template>
  <div>
    <div class="head">
      <van-search v-model="value" class="search" shape="round" placeholder="热门目的地，计划" left-icon="" />
        <van-button class="submit" @click="onSubmit" round>发布</van-button>
    </div>
    <div class="swipe-wrap">
      <div class="bg">
        <img :src="images[curIndex]" alt="" />
      </div>
      <van-swipe ref="swipe" class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
        <van-swipe-item v-for="img in images">
          <div class="swipe-container">
            <div class="swipe-head">head</div>
            <div class="body">
              <img :src="img" alt="" />
              <div class="cover">title</div>
            </div>
          </div>
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="thumbnail">
            <div class="img-container" v-for="(img, index) in images">
              <img :src="img" alt="" :class="active == index ? 'selected' : ''" @click="onClick(index)" />
            </div>
          </div>
        </template>
      </van-swipe>
    </div>
    <van-tabs v-model:active="active" shrink animated>
      <template #nav-right> </template>
      <van-tab class="tab" v-for="item in tablist" :title="item.name">
        <div class="content">
          <PostView />
          <!-- <component :is="typeComponent[item.path]"></component>  -->
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped>
.head {
  display: flex;
  align-items: center;
  background-color: white;
}

.head .van-search {
  width: 100%;
}

.submit {
  font-weight: bold;
  border: 1px solid black;
}

.head button {
  flex-shrink: 0;
}

.my-swipe {
  margin-bottom: 20px;
}

.bg img {
  position: absolute;
  height: 420px;
  width: 100%;
  top: 80px;
  overflow: hidden;
  object-fit: cover;
  filter: blur(50px);
  z-index: -1;
}

.my-swipe .van-swipe-item {
  font-size: 20px;
  text-align: center;
  /* background-color: #39a9ed; */
  border-radius: 12px;
}

.my-swipe .van-swipe-item img {
  height: 300px;
  width: 95%;
  border-radius: 12px;
  object-fit: cover;
}

.my-swipe .head {
  margin-bottom: 20px;
}

.my-swipe .cover {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  width: 95%;
  border-radius: 0 0 12px 12px;
  background-color: white;
}

.thumbnail {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}

.thumbnail img {
  height: 40px;
  width: 40px;
  border-radius: 4px;
  object-fit: cover;
}

.thumbnail .selected {
  border: 3px solid white;
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
