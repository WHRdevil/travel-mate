<script setup>
defineProps(['type'])
</script>

<template>
  <div :class="`tag ${type}`">{{ type == 'male' ? '♂' : type == 'female' ? '♀' : '' }}<slot></slot></div>
</template>

<style scoped>
.tag {
  display: inline;
  color: white;
  background-color: #1989fa;
  padding: 3px 8px;
  border-radius: 24px;
  margin-right: 16px;
}

.male,
.blue {
  color: white;
  background-color: #1989fa;
}

.female,
.pink {
  color: white;
  background-color: palevioletred;
}

.green {
  color: white;
  background-color: #07c160;
}
</style>
