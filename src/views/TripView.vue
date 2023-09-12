<script setup>
const hotel = [
    {
        img: 'src/assets/img/hotel1.jpg',
        title: '厦门华尔道夫（Waldorf-Astoria）',
        descript: '作为国内最新的华尔道夫，同柏悦入口的低调不同，这座以优雅庄园为主题的酒店开场足够震撼！'
    },
    {
        img: 'src/assets/img/hotel2.jpg',
        title: '南昌华侨城福朋喜来登酒店',
        descript: '虽临近象湖，但与象湖水域之间间隔有玛雅水上乐园，低区主要为绿地景观，高区才可一览湖面景色。'
    },
    {
        img: 'src/assets/img/hotel3.jpg',
        title: '「归隐川·云天麓谷」',
        descript: '在这里可以实现避开人群一路向寂静走去院子里湖光清冽 住进寂风美学民宿里可以枕山而眠 听蝉鸣鸟叫声醒来'
    },
    {
        img: 'src/assets/img/hotel4.jpg',
        title: '青城山·宿仙谷',
        descript: '林海最深处的禅意避世民宿,宿仙谷，地处青城后山腹地背倚浑然天成的青城山陡峭山石与幽深峡谷的灵泉瀑布为邻鸟鸣空涧，凡尘心归'
    }
]
const shopinfo = [
    {
        img: 'src/assets/img/hotel1.jpg',
        info: '有浅色木纹配普拉达绿大理石与深色木纹配紫罗兰大理石两种因带小朋友选择了楼层更高的深色木纹的远景双床房。',
        money: 739,
    },
    {
        img: 'src/assets/img/hotel2.jpg',
        info: '赋予城市酒店更多的度假感和本土性，并从现代建筑学意义上，探寻其连贯合理的底层精神表达、空间塑造、平立面逻辑、建构逻辑。',
        money: 499,
    },
    {
        img: 'src/assets/img/hotel3.jpg',
        info: '这里有湖景大床房 双床房Loft房型间风景不一但都通透明亮房品选用上层 榫卯结构搭配石头侘寂风十足',
        money: 559,
    },
    {
        img: 'src/assets/img/hotel4.jpg',
        info: '进谷入园，外庭院汲取传统东方美学遵循自然的规律在庭院中引入大自然的景物生长方式造景让院子更具有深厚的文化底蕴和内涵',
        money: 466,
    }
]
</script>

<template>
    <h1>热门民宿</h1>
    <div class="wrap">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in hotel">
                <div class="info">
                    <div class="title" align="left">
                        <div class="pictil">
                            {{ item.title }}
                        </div>
                        <div class="desc">
                            <van-text-ellipsis :content="item.descript" />
                        </div>
                    </div>
                    <img :src="item.img" alt="">
                </div>
            </van-swipe-item>
            <template #indicator>
            </template>
        </van-swipe>
    </div>
    <van-search v-model="value" placeholder="搜索酒店" @search="onSearch" shape="round" />
    <h1>酒店+车+景自由行套餐</h1>
    <div class="shop">
        <div class="info" v-for="info in shopinfo">
            <img :src="info.img" alt="">
            <div class="desc">
                <van-text-ellipsis rows='2' :content="info.info" />
            </div>
            <span class="currency">¥</span>
            <span class="price">{{ info.money }}</span>
            <span class="unit"> / 晚</span>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 20px;
    margin: 5px 16px 20px;
}

.wrap {
    margin: 0 16px;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 220px;
    text-align: center;
    background-color: white;
}

.info {
    position: relative;
}

.my-swipe .van-swipe-item img {
    position: absolute;
    left: 0;
    /* width: 100%; */
    width: 358px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
}

.head,
.title {
    position: absolute;
    z-index: 1;
    margin-top: 150px;
    margin-left: 8px;
}

.title .pictil {
    font-weight: bolder;
    font-family: '楷体';

}

.title .desc {
    width: 330px;
    font-size: 18px;
    font-family: '楷体';
}

.shop {
    margin: 0 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

}

.shop .info {
    width: 171px;
    height: 220px;
}

.shop .info img {
    width: 171px;
    border-radius: 10px;
}

.shop .desc {
    color: black;
    font-weight: bold;
    /* font-family: '楷体'; */
}

.shop .currency {
    font-size: 12px;
    color: #FF058F;
}

.shop .price {
    font-size: 18px;
    color: #FF058F;
}

.shop .unit {
    font-size: 14px;
    color: #A6A7B1;
}</style>