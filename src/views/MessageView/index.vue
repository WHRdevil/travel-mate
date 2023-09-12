<script setup>
import { ref } from 'vue'
import MessageView from './MessageView.vue'
import AssistantView from './AssistantView.vue'
import PartyView from './PartyView.vue'

const active = ref('0')

const tablist = [
  {
    name: '消息',
    path: 'message'
  },
  {
    name: '小分队',
    path: 'party'
  },
  {
    name: '助手',
    path: 'assistant'
  }
]

const typeComponent = {
  message: MessageView,
  party: PartyView,
  assistant: AssistantView
}
</script>

<template>
  <van-tabs v-model:active="active" shrink animated line-width="0px" line-height="0px" sticky>
    <template #nav-right> </template>
    <van-tab v-for="item in tablist" :title="item.name" replace :to="{ name: item.path }">
      <div class="container">
        <component :is="typeComponent[item.path]"></component>
      </div>
    </van-tab>
  </van-tabs>
</template>

<style scoped></style>
