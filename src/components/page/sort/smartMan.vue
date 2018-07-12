<template>
    <section class="right">
        <section class="banner-inner">
            <img src="@/assets/img/HOME/1-banner.png" alt="" class="banner-img">
        </section>
        <section class="listShow" v-for="(goodsShowItem,goodsIndex) in goodsShow" :key="goodsIndex">
            <p class="listShow-name">{{goodsShowItem.kindsName}}</p>
            <div class="showInner">
                <div class="otherShows">
                    <div class="show" v-for="(item,index) in goodsShowItem.goods" :key="index">
                        <img :src="item.img" alt="" class="img">
                        <div class="name">{{item.name}}</div>
                    </div>
                    <div class="show lastShow">
                        <router-link style="margin-top:3rem" to="/allgoods">
                            <h2>+63</h2>
                            <div>查看全部商</div>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
export default {
  data() {
    return {
      goodsShow: [
        {
          kindsName: "男装",
          goods: [
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            }
          ]
        },
        {
          kindsName: "衬衫",
          goods: [
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            }
          ]
        },
        {
          kindsName: "衬衫",
          goods: [
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: "￥398.00"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.right {
  width: 17rem;
  float: right;
}
.leftTitle,
.leftChildern {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.leftChildern {
  background-color: rgb(243, 244, 245);
}
.leftChildern a{
  color:black;

}

.leftChildern:hover,.leftChildern:hover{
  border-left:3px solid black;
}
.banner-inner {
  padding: 0.5rem;
}
.banner-img {
  width: 100%;
}
.showInner {
  display: flex;
  justify-content: space-between;
}
.showInner .show {
  font-size: 0.5rem;
  height: 7rem;
  width: 4.5rem;
  display: inline-block;
  text-align: center;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  padding: 0.2rem;
  margin-top: 0.2rem;
}
.showInner .show .name {
  height: 2rem;
  line-height: 2rem;
  overflow: hidden;
}
.showInner .show .price {
  height: 1rem;
}

.showInner .show .img {
  width: 4.5rem;
  height: 5rem;
}
.otherShows {
  display: inline-block;

  position: relative;
}
.lastShow {
  position: absolute;
  background-color: rgb(243, 243, 243);
}
.listShow {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(180, 180, 180, 0.6);
}
.listShow-name{
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>

