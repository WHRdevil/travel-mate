<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getPostById } from '../http/api/postApi'
import { getUserInfoById } from '../http/api/userApi'
import { BASE_URL } from '../utils/utils'
import CommentCard from '../components/CommentCard.vue'
import { createComment, getCommentList } from '../http/api/commentApi'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const onClickLeft = () => history.back()
const route = useRoute()

const themeVars = reactive({
  fontBold: '500',
  navBarIconColor: 'black',
  borderWidth: '0',
  navBarTextColor: 'black'
})

const postInfo = ref({})
const commentList = ref([])

onMounted(() => {
  getPostById(route.query.id).then((value) => {
    // console.log(value)
    if (value.code == 1) {
      postInfo.value = value.data
      getUserInfoById(postInfo.value.admin_id).then((user) => {
        if (user.code == 1) {
          // console.log(user.data)
          postInfo.value.user = user.data
        }
      })
    }
  })
  getCommentList(route.query.id).then((value) => {
    console.log(value.data)
    if (value.code == 1) {
      commentList.value = value.data
    }
  })
})

const comment = ref('')

const onClick = () => {
  createComment({
    backpacking_id: route.query.id,
    content: comment.value
  }).then((value) => {
    console.log(value)
    if (value.code == 1) {
      showToast('发送成功')
      location.reload()
    }
  })
}
</script>

<template>
  <div v-if="postInfo.user">
    <van-sticky>
      <van-config-provider :theme-vars="themeVars">
        <van-nav-bar left-arrow @click-left="onClickLeft">
          <template #title>
            <div style="display: flex">
              <img
                class="avatar"
                :src="postInfo.user.pic.indexOf('http') == -1 ? BASE_URL + '/' + postInfo.user.pic : postInfo.user.pic"
                alt=""
              />
              <span class="name">{{ postInfo.user.account }}</span>
            </div>
          </template>
        </van-nav-bar>
      </van-config-provider>
    </van-sticky>
    <van-image
      v-if="JSON.parse(postInfo.pic).length != 0"
      width="100%"
      height="460px"
      :src="
        JSON.parse(postInfo.pic)[0].indexOf('http') == -1
          ? BASE_URL + '/' + JSON.parse(postInfo.pic)[0]
          : JSON.parse(postInfo.pic)[0]
      "
      alt=""
      fit="cover"
    />
    <div class="box">
      <p style="font-size: 18px; font-weight: bold">{{ postInfo.title }}</p>
      <span>计划描述: {{ postInfo.content }}</span>
      <div style="border: 2px solid rgb(227, 227, 227); margin: 15px 0"></div>
      <div class="departure">
        <svg>
          <use xlink:href="#icon-wxbdingwei"></use>
        </svg>
        <span>出发地 {{ postInfo.start }}</span>
      </div>
      <div class="destination">
        <svg>
          <use xlink:href="#icon-mudedi"></use>
        </svg>
        <span>目的地 {{ postInfo.end }}</span>
      </div>
      <div class="date">
        <svg>
          <use xlink:href="#icon-mudedi"></use>
        </svg>
        <span>
          起止时间
          {{
            new Date(postInfo.start_time).getFullYear() +
            '-' +
            new Date(postInfo.start_time).getMonth() +
            '-' +
            new Date(postInfo.start_time).getDay()
          }}
          至
          {{
            new Date(postInfo.end_time).getFullYear() +
            '-' +
            new Date(postInfo.end_time).getMonth() +
            '-' +
            new Date(postInfo.end_time).getDay()
          }}
        </span>
      </div>
    </div>
    <div class="divide"></div>
    <div class="comment">
      <div class="count">评论({{ commentList.length }})</div>
      <div class="comment-body">
        <CommentCard v-for="comment in commentList" :comment="comment" />
      </div>
    </div>
    <div class="foot">
      <input type="text" v-model="comment" placeholder="约伴出行，总会遇见" />
      <!-- <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-aixin"></use>
      </svg> -->
      <van-button type="primary" round @click="onClick">发送</van-button>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  width: 35px;
  height: 35px;
  border-radius: 100%;
}

.name {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
}

.box {
  margin: 0 10px;
}

.departure svg,
.destination svg,
.date svg {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 8px;
}

.divide {
  margin: 24px 0;
  border: 4px solid #ececec;
}

.comment {
  margin: 0 10px;
  margin-bottom: 56px;
}

.comment .count {
  font-weight: bold;
  margin: 10px 0;
}

.foot {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: white;
}

.foot input {
  margin: 0 16px;
  border-radius: 24px;
  border: none;
  height: 36px;
  padding: 0 16px;
  background-color: #f3f3f3;
}

.foot svg {
  height: 34px;
  width: 34px;
}

.foot button {
  height: 36px;
  width: 72px;
  margin-right: 16px;
}
</style>
