<script setup>
import UserTag from './UserTag.vue'
</script>

<template>
  <div class="post-container">
    <div class="head">
      <div class="avatar">
        <img src="https://avatars.githubusercontent.com/u/16703019?v=4" alt="" />
      </div>
      <div class="user-info">
        <div class="top">
          <span class="name">lonzzi</span>
          <UserTag type="male">21</UserTag>
        </div>
        <div class="date">17分钟前</div>
      </div>
    </div>
    <div class="body">
      <div class="title">一天出差</div>
      <div class="img">
        <van-grid :column-num="3">
          <van-grid-item>
            <van-image src="https://api.vvhan.com/api/view" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-container {
  display: flex;
  flex-direction: column;
}

.head {
  display: flex;
}

.avatar {
  margin-right: 16px;
}

.avatar img {
  width: 60px;
  border-radius: 100%;
}

.name {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}

.date {
  color: gray;
}

.body .title {
  margin-bottom: 16px;
}
</style>
