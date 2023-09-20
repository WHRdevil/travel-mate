<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import DynamicView from './DynamicView.vue'
import PeopleView from './PeopleView.vue'

const active = ref(0)
const show = ref(false)
const route = useRoute()
const sexGroup = ref('0')
const ageGroup = ref('0')

const tablist = [
  {
    name: '附近人',
    path: 'people'
  }
  // {
  //   name: '动态',
  //   path: 'dynamic'
  // }
]

const typeComponent = {
  people: PeopleView,
  dynamic: DynamicView
}
</script>

<template>
  <van-tabs v-model:active="active" shrink animated line-width="0px" line-height="0px" sticky>
    <template #nav-right>
      <div class="right-btn">
        <van-button v-if="route.path.includes('dynamic')" class="submit" round>发布</van-button>
        <svg v-else class="icon" aria-hidden="true" @click="show = true">
          <use xlink:href="#icon-shaixuan"></use>
        </svg>
      </div>
    </template>
    <div class="body">
      <van-tab v-for="item in tablist" :title="item.name" replace :to="{ name: item.path }">
        <div class="container">
          <component :is="typeComponent[item.path]"></component>
        </div>
      </van-tab>
    </div>
  </van-tabs>
  <van-action-sheet v-model:show="show" title="筛选">
    <div class="filter-panel">
      <div class="radio-group-title">性别</div>
      <van-radio-group v-model="sexGroup" direction="horizontal" class="radio-group">
        <van-radio name="0">
          <template #icon="props">
            <div :class="`radio-btn ${props.checked ? 'checked' : ''}`">全部</div>
          </template>
        </van-radio>
        <van-radio name="1">
          <template #icon="props">
            <div :class="`radio-btn ${props.checked ? 'checked' : ''}`">男</div>
          </template>
        </van-radio>
        <van-radio name="2">
          <template #icon="props">
            <div :class="`radio-btn ${props.checked ? 'checked' : ''}`">女</div>
          </template>
        </van-radio>
      </van-radio-group>
      <div class="radio-group-title">年龄</div>
      <van-radio-group v-model="ageGroup" direction="horizontal" class="radio-group">
        <van-radio name="0">
          <template #icon="props">
            <div :class="`radio-btn ${props.checked ? 'checked' : ''}`">不限</div>
          </template>
        </van-radio>
        <van-radio name="1">
          <template #icon="props">
            <div :class="`radio-btn ${props.checked ? 'checked' : ''}`">18-25</div>
          </template>
        </van-radio>
        <van-radio name="2">
          <template #icon="props">
            <div :class="`radio-btn ${props.checked ? 'checked' : ''}`">25-30</div>
          </template>
        </van-radio>
      </van-radio-group>
      <div class="btn-group">
        <van-button round>重置</van-button>
        <van-button round>确认</van-button>
      </div>
    </div>
  </van-action-sheet>
</template>

<style scoped>
.right-btn {
  align-self: center;
  flex-grow: 1;
  text-align: right;
}

.right-btn .submit {
  height: 34px;
  border: 1px solid black;
  font-weight: bold;
}

.right-btn svg {
  cursor: pointer;
}

.filter-panel {
  margin: 16px;
}

.radio-group-title {
  font-size: 18px;
  margin-bottom: -16px;
}

.radio-btn {
  font-size: 14px;
  border: 1px solid rgb(235, 235, 235);
  padding: 10px 20px;
  border-radius: 24px;
  margin-bottom: 24px;
}

.checked {
  color: white;
  background-color: red;
}

.radio-group {
  height: 80px;
  margin-bottom: 16px;
}

.btn-group {
  display: flex;
  justify-content: space-around;
}

.btn-group > button {
  background-color: red;
  color: white;
  padding: 10px 20px;
}

.body {
  margin-bottom: 50px;
}
</style>
