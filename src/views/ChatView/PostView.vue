<script setup>
import PostCard from '../../components/PostCard.vue'
import { onMounted, ref } from 'vue'

defineProps(['posts'])
</script>

<template>
  <div class="post-view">
    <RouterLink v-for="post in posts" :to="{}">
      <PostCard :post="post" />
    </RouterLink>
  </div>
</template>

<style scoped>
.post-view {
  padding-top: 16px;
  background-color: rgb(233, 241, 245);
}

.post-view a {
  color: black;
}
</style>
