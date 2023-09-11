<script setup>
defineProps(['title'])
</script>

<template>
  <div class="plan">
    <div class="title">
      {{ title }}
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.plan {
  display: flex;
  width: 50%;
  background-color: rgb(230, 230, 230);
  color: #333;
  border-radius: 24px;
  padding: 3px 8px;
}
</style>
