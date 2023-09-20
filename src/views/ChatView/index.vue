<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import PostView from './PostView.vue'
import { getRandPost } from '../../http/api/postApi'
import { getUserInfoById } from '../../http/api/userApi'
import { BASE_URL } from '../../utils/utils'

const posts = ref([])
onMounted(() => {
  getRandPost(10)
    .then((value) => {
      // console.log(value)
      if (value.code == 1) {
        posts.value = value.data
        for (let i in posts.value) {
          // console.log(posts.value[i].pic)
          if (value.data[i].pic) {
            // posts.value[i].pic = JSON.parse(value.data[i])
          }
          getUserInfoById(posts.value[i].admin_id).then((user) => {
            if (user.code == 1) {
              // console.log(user.data)
              posts.value[i].user = user.data
            }
          })
        }
      }
    })
    .catch((err) => {
      console.log(err)
    })
})

const router = useRouter()

const value = ref('')
const curIndex = ref(0)
const swipe = ref()
const active = ref('0')

// const images = [
//   'https://www.loliapi.com/acg/?id=28',
//   'https://www.loliapi.com/acg/?id=29',
//   'https://www.loliapi.com/acg/?id=32',
//   'https://www.loliapi.com/acg/?id=31',
//   'https://www.loliapi.com/acg/?id=27'
// ]

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
    name: '动态',
    path: 'message'
  }
  // {
  //   name: '热门',
  //   path: 'party'
  // },
  // {
  //   name: '会员',
  //   path: 'assistant'
  // },
  // {
  //   name: '官方',
  //   path: 'assistant'
  // }
]

const typeComponent = {
  // message: MessageView,
  // party: PartyView,
  // assistant: AssistantView
}
</script>

<template>
  <div class="chat-body" v-if="posts[curIndex]">
    <div class="head">
      <van-search v-model="value" class="search" shape="round" placeholder="热门目的地，计划" left-icon="" />
      <van-button class="submit" @click="onSubmit" round>发布</van-button>
    </div>
    <div class="swipe-wrap">
      <div class="bg">
        <img :src="BASE_URL + '/' + JSON.parse(posts[curIndex].pic)[0]" alt="" />
      </div>
      <van-swipe ref="swipe" class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
        <van-swipe-item v-for="img in posts.slice(0, 5)">
          <div class="swipe-container">
            <div class="swipe-head">{{ img.title }}</div>
            <RouterLink :to="{ name: 'showplan', query: { id: img.backpacking_id } }">
              <div class="body">
                <img :src="BASE_URL + '/' + JSON.parse(img.pic)[0]" alt="" />
                <div class="cover">
                  <div class="cover-body">
                    <van-text-ellipsis :content="img.content" />
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="thumbnail">
            <div class="img-container" v-for="(img, index) in posts.slice(0, 5)">
              <img
                :src="BASE_URL + '/' + JSON.parse(img.pic)[0]"
                alt=""
                :class="active == index ? 'selected' : ''"
                @click="onClick(index)"
              />
            </div>
          </div>
        </template>
      </van-swipe>
    </div>
    <van-tabs v-model:active="active" shrink animated>
      <template #nav-right> </template>
      <van-tab class="tab" v-for="item in tablist" :title="item.name">
        <div class="content">
          <PostView :posts="posts" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped>
.chat-body {
  margin-bottom: 50px;
}

.head {
  display: flex;
  align-items: center;
  background-color: white;
}

a {
  color: black;
}

.swipe-container .swipe-head {
  margin: 16px 10px;
  text-align: left;
  font-weight: bold;
}

.swipe-container .cover {
  text-align: left;
}

.swipe-container .cover-body {
  margin: 16px 10px;
  font-size: 14px;
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
