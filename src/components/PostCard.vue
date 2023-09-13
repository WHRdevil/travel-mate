<script setup>
import { ref } from 'vue'
import UserTag from './UserTag.vue'

const text = ref('乌鲁木齐出发，自驾北疆环线，自驾北疆环线，自驾北疆环线，自驾北疆环线，自驾北疆环线，自驾北疆环线，')
</script>

<template>
  <div class="post-card">
    <div class="post-head">
      <div class="avatar">
        <img src="https://avatars.githubusercontent.com/u/16703019?v=4" alt="" />
      </div>
      <div class="user-info">
        <span class="name">lonzzi</span>
        <span class="tag">
          <UserTag type="male">39</UserTag>
        </span>
      </div>
      <div class="date">1个小时前</div>
    </div>
    <div class="post-body">
      <div class="title">9月新疆赏秋环线组队</div>
      <div class="desc">
        <van-text-ellipsis rows="2" :content="text" />
      </div>
      <div class="departure">
        <svg>
          <use xlink:href="#icon-wxbdingwei"></use>
        </svg>
        <span>出发地 乌鲁木齐</span>
      </div>
      <div class="destination">
        <svg>
          <use xlink:href="#icon-mudedi"></use>
        </svg>
        <span>目的地 伊犁</span>
      </div>
      <div class="date">
        <svg>
          <use xlink:href="#icon-mudedi"></use>
        </svg>
        <span>起止时间 2023-9-25 至 2023-10-07</span>
      </div>
      <div class="pic">
        <van-grid :column-num="3">
          <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
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
