<script setup>
import { ref } from 'vue'
import UserTag from './UserTag.vue'
import { getAge, timeAgo } from '../utils/utils'
import { BASE_URL } from '../utils/utils'

defineProps(['post'])

</script>

<template>
  <div class="post-card" v-if="post.user">
    <div class="post-head">
      <div class="avatar">
        <img :src="post.user.pic.indexOf('http') == -1 ? BASE_URL + '/' + post.user.pic : post.user.pic" alt="" />
      </div>
      <div class="user-info">
        <span class="name">{{ post.user.account }}</span>
        <span class="tag">
          <UserTag :type="post.user.sex == 1 ? 'male' : 'female'">{{ getAge(new Date(post.user.birthday)) }}</UserTag>
        </span>
      </div>
      <div class="date">{{ timeAgo(new Date(post.user.create_time)) }}</div>
    </div>
    <div class="post-body">
      <div class="title">{{ post.title }}</div>
      <div class="desc">
        <van-text-ellipsis rows="2" :content="post.content" />
      </div>
      <div class="departure">
        <svg>
          <use xlink:href="#icon-wxbdingwei"></use>
        </svg>
        <span>出发地 {{ post.start }}</span>
      </div>
      <div class="destination">
        <svg>
          <use xlink:href="#icon-mudedi"></use>
        </svg>
        <span>目的地 {{ post.end }}</span>
      </div>
      <div class="date">
        <svg>
          <use xlink:href="#icon-mudedi"></use>
        </svg>
        <span
          >起止时间
          {{
            new Date(post.start_time).getFullYear() +
            '-' +
            new Date(post.start_time).getMonth() +
            '-' +
            new Date(post.start_time).getDay()
          }}
          至
          {{
            new Date(post.end_time).getFullYear() +
            '-' +
            new Date(post.end_time).getMonth() +
            '-' +
            new Date(post.end_time).getDay()
          }}</span
        >
      </div>
      <div class="pic">
        <van-grid :column-num="3">
          <van-grid-item v-for="value in JSON.parse(post.pic)" :key="value">
            <van-image :src="BASE_URL + '/' + value" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="post-foot"></div>
  </div>
</template>

<style scoped>
.post-card {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 12px;
  background-color: white;
}

.post-head {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.post-head .date {
  flex: 1;
  text-align: right;
  color: gray;
}

.post-head img {
  width: 50px;
  border-radius: 100%;
}

.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.user-info .name {
  margin-bottom: 6px;
  font-size: 20px;
  font-weight: bold;
}

.post-body .title {
  font-weight: bold;
  font-size: 20px;
}

.post-body .desc {
  font-size: 18px;
  margin-bottom: 16px;
}

.departure svg,
.destination svg,
.post-body .date svg {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 8px;
}

.departure span,
.destination span,
.post-body .date span {
  color: gray;
}

.post-body .pic {
  margin-top: 16px;
}
</style>
