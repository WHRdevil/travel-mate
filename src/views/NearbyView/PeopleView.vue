<script setup>
import { ref, onMounted } from 'vue'
import PeopleCard from '../../components/PeopleCard.vue'
import { getRandUserInfo } from '../../http/api/userApi'

const usersInfo = ref([])

onMounted(() => {
  getRandUserInfo(10).then((value) => {
    console.log(value)
    usersInfo.value = value.data
  }).catch((err) => {
    console.log(err)
  })
})
</script>

<template>
  <PeopleCard v-for="user in usersInfo" v-bind="user" />
</template>

<style scoped></style>
