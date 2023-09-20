<script setup>
import { ref, onMounted } from 'vue'
import { getUserInfo } from '../http/api/userApi'
import { BASE_URL } from '../utils/utils'

const content = [
  {
    icon: '#icon-xingqiu1',
    text: '我的动态'
  },
  {
    icon: '#icon-jihua',
    text: '我的计划'
  },
  {
    icon: '#icon-lg_zhishiguanli',
    text: '我的手账'
  },
  {
    icon: '#icon-shoucang',
    text: '我的收藏'
  },
  {
    icon: '#icon-yaoqing',
    text: '我的邀请'
  },
  {
    icon: '#icon-renzheng',
    text: '我的认证'
  },
  {
    icon: '#icon-dingdan',
    text: '我的订单'
  },
  {
    icon: '#icon-zu16',
    text: '我的报名'
  }
]

const userInfo = ref({})

onMounted(() => {
  getUserInfo().then((res) => {
    console.log(res)
    if (res.code == 1) {
      userInfo.value = res.data
    }
  })
})
</script>

<template>
  <div class="body">
    <div class="head">
      <div class="icon">
        <svg>
          <use xlink:href="#icon-xiangji"></use>
        </svg>
        <span>换封面</span>
      </div>
      <RouterLink :to="{ name: 'setting' }">
        <div class="icon">
          <svg>
            <use xlink:href="#icon-shezhi"></use>
          </svg>
          <span>设置</span>
        </div>
      </RouterLink>
    </div>
    <div class="center">
      <div class="row1">
        <RouterLink class="icon avatar" :to="{ name: 'personal', query: { id: userInfo.admin_id } }">
          <img
            v-if="userInfo.pic"
            :src="userInfo.pic.indexOf('http') == -1 ? BASE_URL + '/' + userInfo.pic : userInfo.pic"
            alt=""
          />
          <svg v-else>
            <use xlink:href="#icon-touxiang"></use>
          </svg>
        </RouterLink>
        <div class="text">
          <span class="name">{{ userInfo.account }}</span>
          <span class="id"
            >ID:<span>{{ userInfo.admin_id }}</span></span
          >
          <div class="content">
            <span class="con">好友:<span>0</span></span>
            <span class="con"
              >粉丝:<span>{{ userInfo.followers }}</span></span
            >
            <span class="con"
              >关注:<span>{{ userInfo.following }}</span></span
            >
            <span class="con">小队:<span>0</span></span>
          </div>
        </div>
      </div>
      <div class="row2">
        <RouterLink :to="{ name: 'revise' }">
          <div>
            <svg>
              <use xlink:href="#icon-gangbi"></use>
            </svg>
            <span>修改资料</span>
          </div>
        </RouterLink>
        <div>
          <svg>
            <use xlink:href="#icon-qianbao"></use>
          </svg>
          <span>我的钱包</span>
        </div>
      </div>
      <div class="row3">
        <div>
          <svg>
            <use xlink:href="#icon-yanjing"></use>
          </svg>
          <span>谁看过我</span>
        </div>
        <div>
          <svg>
            <use xlink:href="#icon-huiyuanzhongxin"></use>
          </svg>
          <span>会员中心</span>
        </div>
        <div>
          <svg>
            <use xlink:href="#icon-liwu"></use>
          </svg>
          <span>我的礼物</span>
        </div>
        <div>
          <svg>
            <use xlink:href="#icon-tuoxie"></use>
          </svg>
          <span>我的互动</span>
        </div>
      </div>
      <div class="line"></div>
      <h1>常用功能</h1>
      <van-grid :border="false" :column-num="4" :gutter="20">
        <van-grid-item v-for="item in content">
          <svg>
            <use :xlink:href="item.icon"></use>
          </svg>
          <span>{{ item.text }}</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<style scoped>
.head {
  width: 100vw;
  height: 130px;
  background-image: url('../assets/img/bgpic.jpg');
  display: flex;
  justify-content: flex-end;
}

.icon {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px 0;
}

.body .center .avatar {
  width: 56px;
  height: 56px;
}

.center .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}

.icon span {
  color: white;
}

.center {
  height: 500px;
  border-radius: 10px;
  margin-top: -30px;
  background-color: white;
}

.row1 {
  display: flex;
}

.row1 .icon {
  width: 70px;
  margin-top: 30px;
}

.row1 .text {
  padding-top: 7px;
  display: flex;
  flex-direction: column;
}

.text .name {
  font-size: 20px;
  font-weight: bold;
  margin: 6px 0 6px -10px;
}

.text .id {
  margin: 6px 0;
}

.text .content {
  margin: 6px 0 6px -10px;
}

.text .con {
  margin-right: 28px;
}

.row2 {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.row2 a {
  color: black;
}

.row2 div {
  width: 150px;
  height: 35px;
  border: 1px solid rgb(240, 239, 239);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.row2 svg {
  width: 100px;
  height: 50px;
}

.row2 svg {
  width: 19px;
  height: 19px;
}

.row2 span {
  font-size: 14px;
  font-family: '微软雅黑';
  margin-left: 5px;
}

.row3 {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}

.row3 div {
  width: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
  flex-wrap: wrap;
  justify-content: space-around;
}

.row3 svg {
  width: 36px;
  height: 36px;
  padding-bottom: 10px;
}

.row3 span {
  font-size: 14px;
}

.line {
  width: 90vw;
  border: 1px solid rgb(240, 239, 239);
  margin: 20px auto;
}

h1 {
  font-size: 18px;
  margin-left: 24px;
}

.van-grid .van-grid-item svg,
.icon img {
  width: 40px;
  height: 40px;
}

.van-grid .van-grid-item span {
  font-size: 14px;
  margin-top: 8px;
  color: rgb(127, 121, 121);
}
</style>
