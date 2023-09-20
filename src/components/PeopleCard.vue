<script setup>
import UserTag from './UserTag.vue'
import UserPlan from './UserPlan.vue'
import { timeAgo, getAge } from '../utils/utils'

defineProps(['account', 'create_time', 'sex', 'home', 'pic', 'birthday'])
</script>

<template>
  <div>
    <div class="people-card">
      <div class="user-avatar">
        <img :src="pic" alt="" />
      </div>
      <div class="user-info">
        <div class="info-head">
          <div class="name">{{ account }}</div>
          <div class="date">{{ timeAgo(Date.parse(create_time)) }}</div>
        </div>
        <div class="info-body">
          <UserTag :type="sex == 1 ? 'male' : 'female'">{{ getAge(Date.parse(birthday)) }}</UserTag>
          <!-- <UserTag type="green">1城</UserTag> -->
        </div>
        <div class="info-foot">
          <UserPlan title="计划">{{ home }}</UserPlan>
        </div>
      </div>
    </div>
    <van-divider />
  </div>
</template>

<style scoped>
.people-card {
  display: flex;
  /* width: 100%; */
}

.user-avatar {
  margin-right: 16px;
}

.user-avatar img {
  border-radius: 100%;
  width: 60px;
  height: 60px;
}

.user-info {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.info-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.info-head .name {
  font-size: 20px;
  font-weight: bold;
}

.info-head .date {
  color: gray;
}

.info-body {
  margin-bottom: 10px;
}

.info-foot {
  display: flex;
  width: 100%;
}

.info-foot .plan {
  margin-right: 4px;
}
</style>
