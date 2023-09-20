<script setup>
import { ref, onMounted } from 'vue'
import PeopleCard from '../../components/PeopleCard.vue'
import { getRandUserInfo } from '../../http/api/userApi'

const usersInfo = ref([])

onMounted(() => {
  getRandUserInfo(10)
    .then((value) => {
      console.log(value)
      usersInfo.value = value.data
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<template>
  <RouterLink v-for="user in usersInfo" :to="{ name: 'personal', query: { id: user.admin_id } }">
    <PeopleCard v-bind="user" />
  </RouterLink>
</template>

<style scoped>
a {
  color: black;
}
</style>
