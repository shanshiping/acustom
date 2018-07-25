<template>
    <section class="right">
        <section class="banner-inner">
            <img src="@/assets/img/HOME/sort_banner.png" alt="" class="banner-img">
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
                        <router-link  to="/allgoods">
                        <div class="lastShow_inner">
                            <div class="quantity">+63</div>
                            <div class="look">查看全部商品</div>
                        </div>
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
<style scoped lang="less">
.right {
  width: 540px;
  float: right;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 50px;
  .banner-inner {
    .banner-img {
      width: 100%;
    }
  }
  .listShow {
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(180, 180, 180, 0.6);
    .listShow-name {
      font-family: pingFangSC-Medium sans-serif;
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 26px;
    }
    .showInner {
      display: flex;
      justify-content: space-between;
      .otherShows {
        display: inline-block;
        position: relative;
        .show {
          height: 215px;
          width: 170px;
          display: inline-block;
          text-align: center;
          margin-right: 10px;
          .name {
            height: 20px;
            width: 143px;
            line-height: 20px;
            overflow: hidden;
            font-size: 18px;
            margin: 0 auto;
            margin-top: 15px;
            margin-bottom: 15px;
            color: #666;
          }
          .price {
            height: 1rem;
          }
          .img {
            width: 166px;
            height: 166px;
          }
        }
        .show.lastShow {
          position: absolute;
          background-color: rgb(243, 243, 243);
          width: 166px;
          height: 166px;
          .lastShow_inner {
            margin-top: 50px;
            .quantity {
              font-size: 36px;
              color: #191919;
              font-family: pingFangSC-Medium sans-serif;
            }
            .look {
              font-size: 18px;
              color: #666;
              font-family: pingFangSC-Medium sans-serif;
            }
          }
        }
      }
    }
  }
}
</style>

