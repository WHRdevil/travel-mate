<script setup>
defineProps(['type'])
</script>

<template>
  <div :class="`tag ${type}`">
    <svg v-if="type == 'male' || type == 'female'">
      <use :xlink:href="`#icon-${type == 'male' ? 'nan' : type == 'female' ? 'nv' : ''}`"></use>
    </svg>
    <slot></slot>
  </div>
</template>

<style scoped>
.tag {
  display: inline;
  color: white;
  background-color: #1989fa;
  padding: 3px 8px;
  border-radius: 24px;
  margin-right: 16px;
  text-align: center;
}

.tag svg {
  width: 12px;
  height: 12px;
  margin-right: 2px;
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
