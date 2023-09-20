<script setup>
import { onMounted, ref } from 'vue'
import { getUserInfoById } from '../http/api/userApi'
import { BASE_URL } from '../utils/utils'

const props = defineProps({
  comment: Object
})

const userInfo = ref({})

onMounted(() => {
  getUserInfoById(props.comment.admin_id).then((value) => {
    // console.log(value)
    if (value.code == 1) {
      userInfo.value = value.data
    }
  })
})
</script>

<template>
  <div v-if="userInfo.pic" class="comment-card">
    <div class="avatar">
      <img :src="userInfo.pic.indexOf('http') == -1 ? BASE_URL + '/' + userInfo.pic : userInfo.pic" />
    </div>
    <div class="body">
      <div class="name">
        {{ userInfo.account }}
      </div>
      <div class="content">
        {{ props.comment.content }}
      </div>
      <!-- <div class="date">
        {{ '2个月前' }}
      </div> -->
    </div>
  </div>
  <van-divider />
</template>

<style scoped>
.comment-card {
  display: flex;
  margin-bottom: 24px;
}

.avatar {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.avatar img {
  border-radius: 100%;
  width: 40px;
  height: 40px;
}

.body .name {
  font-weight: bold;
  margin-bottom: 4px;
}

.body .content {
  margin-bottom: 4px;
}
</style>
