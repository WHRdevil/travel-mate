<script setup>
import UserTag from './UserTag.vue'
import UserPlan from './UserPlan.vue'
</script>

<template>
  <div>
    <div class="people-card">
      <div class="user-avatar">
        <img src="https://avatars.githubusercontent.com/u/16703019?v=4" alt="" />
      </div>
      <div class="user-info">
        <div class="info-head">
          <div class="name">lonzzi</div>
          <div class="date">1天前 716m</div>
        </div>
        <div class="info-body">
          <UserTag type="male">21</UserTag>
          <UserTag type="green">1城</UserTag>
        </div>
        <div class="info-foot">
          <UserPlan title="计划">南昌</UserPlan>
          <UserPlan title="计划">南昌</UserPlan>
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
