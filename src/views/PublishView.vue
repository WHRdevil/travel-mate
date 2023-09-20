<script setup>
import { reactive, ref } from 'vue'
import { uploadImage } from '../http/api/staticApi'
import { uploadPost } from '../http/api/postApi'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()
const onClickLeft = () => history.back()

const postInfo = reactive({
  start: '',
  end: '',
  money: '',
  registered: '',
  payment: '',
  start_time: '',
  end_time: '',
  title: '',
  content: '',
  pic: []
})

const themeVars = reactive({
  fontBold: '500',
  navBarIconColor: 'black',
  borderWidth: '0',
  navBarTextColor: 'black'
})

const columns = [
  { text: 'AA制', value: '1' },
  { text: '男A女免', value: '2' },
  { text: '免费参加', value: '3' }
]
const fieldValue = ref('')
const showPicker = ref(false)
const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false
  postInfo.payment = selectedOptions[0].value
  fieldValue.value = selectedOptions[0].text
}

const date = ref('')
const show = ref(false)

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`
const checkDate = (values) => {
  const [start, end] = values
  postInfo.start_time = start
  postInfo.end_time = end
  show.value = false
  date.value = `${formatDate(start)} - ${formatDate(end)}`
}

const afterRead = (file) => {
  console.log(file.file)
  const data = new FormData()
  data.append('file', file.file)
  uploadImage(data)
    .then((value) => {
      console.log(value)
      if (value.code == 1) {
        postInfo.pic.push(value.data.url)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
const fileList = ref([])

const onSubmit = () => {
  console.log(postInfo)
  uploadPost(postInfo).then((value) => {
    console.log(value)
    if (value.code == 1) {
      router.replace({ name: 'showplan', query: { id: value.data.id } })
    }
  })
}
</script>

<template>
  <van-sticky>
    <van-config-provider :theme-vars="themeVars">
      <van-nav-bar left-text="发布计划" left-arrow @click-left="onClickLeft">
        <template #right>
          <button @click="onSubmit">发布</button>
        </template>
      </van-nav-bar>
    </van-config-provider>
  </van-sticky>
  <div class="box">
    <span>填写基本信息</span>
    <div class="form">
      <van-cell-group inset>
        <van-field
          v-model="postInfo.start"
          label="出发地"
          input-align="right"
          size="large"
          placeholder="请输入出发地"
        />
        <van-field v-model="postInfo.end" label="目的地" input-align="right" size="large" placeholder="请输入目的地" />
        <van-field
          v-model="postInfo.money"
          type="digit"
          label="人均预算（元）"
          label-width="120px"
          input-align="right"
          size="large"
          placeholder="输入人均预算"
        />
        <van-field
          v-model="postInfo.registered"
          type="digit"
          label="希望人数（人）"
          label-width="120px"
          input-align="right"
          size="large"
          placeholder="输入邀请人数"
        />
      </van-cell-group>
      <div style="margin: 0 16px">
        <van-field
          v-model="fieldValue"
          is-link
          readonly
          label="分摊方式"
          @click="showPicker = true"
          input-align="right"
        />
        <van-popup v-model:show="showPicker" round position="bottom">
          <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
        </van-popup>

        <van-cell title="行程日期" is-link :value="date" @click="show = true" input-align="right" />
        <van-calendar v-model:show="show" type="range" @confirm="checkDate" />
      </div>
    </div>
  </div>
  <div class="line"></div>
  <div class="box">
    <div class="form">
      <van-cell-group inset>
        <van-field v-model="postInfo.title" placeholder="请输入计划标题" style="font-size: 18px" />
      </van-cell-group>
      <van-divider :style="{ color: '#000000', borderColor: '#000000', padding: '0 16px', margin: '0' }" />
      <van-cell-group inset>
        <van-field
          v-model="postInfo.content"
          rows="3"
          autosize
          type="textarea"
          placeholder="填写您的行程描述，优质的文案和图片会获得系统推荐。描述内容留有微信号、链接、第三方联系方式的，系统会删除您的计划，严重者封号处理。"
        />
      </van-cell-group>
      <div class="pic">
        <van-uploader :after-read="afterRead" v-model="fileList" multiple />
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  border: 1px solid black;
  border-radius: 15px;
  width: 55px;
  height: 26px;
  background-color: white;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 15px;
}

.box span {
  font-weight: bold;
}

.box .form {
  width: 100%;
}

.van-cell {
  padding: 12px 0;
}

.line {
  border: 8px solid rgb(230, 229, 229);
  margin: 15px 0;
}
.pic {
  margin-left: 12px;
}
</style>
