<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const active = ref(0)
const tablist = [
  {
    name: '附近',
    path: '/nearby',
    icon: {
      active: 'icon-fujin-copy',
      inactive: 'icon-fujin'
    }
  },
  {
    name: '约伴',
    path: '/chat',
    icon: {
      active: 'icon-duoren-copy',
      inactive: 'icon-duoren'
    }
  },
  {
    name: '消息',
    path: '/message',
    icon: {
      active: 'icon-shouye-copy',
      inactive: 'icon-shouye'
    }
  },
  {
    name: '去旅行',
    path: '/trip',
    icon: {
      active: 'icon-xingqiu-copy',
      inactive: 'icon-xingqiu'
    }
  },
  {
    name: '我的',
    path: '/me',
    icon: {
      active: 'icon-wode-wodefensi-copy',
      inactive: 'icon-wode-wodefensi'
    }
  }
]
</script>

<template>
  <RouterView />
  <van-tabbar class="tabbar" v-model="active" active-color="#1296db" route>
    <van-tabbar-item v-for="item in tablist" replace :to="item.path">
      <span>{{ item.name }}</span>
      <template #icon="props">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="`#${props.active ? item.icon.active : item.icon.inactive}`"></use>
        </svg>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
.tabbar {
  max-width: 762px;
  min-width: 320px;
  margin: 0 auto;
  left: 0;
  right: 0;
}
</style>
