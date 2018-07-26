<template>
  <div>
    <!-- <section style="text-align:center">
              <div>Acustom 商城</div>
          </section> -->
    <section class="logo_section">
      <img src="@/assets/img/HOME/Acustom_logo.png" alt="" class="logoImg">
    </section>
    <section class="carousel_section">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in carousel" :key="index">
          <img :src="image" class="carousel_img" />
        </van-swipe-item>
      </van-swipe>
    </section>
    <section class="toggle_section">
      <div class="toggle">
        <div class="custom" :class="{activeClass:isActive}" @click="toggle(1)">量身定制</div>
        <div class="smart" :class="{activeClass:!isActive}" @click="toggle(2)">智能选衣</div>
      </div>
      <div class="customShow" v-if="isActive">
        <div class="line">
          <div class="triangle"></div>
          <div class="orthogon"></div>
        </div>
        <div class="showTitle">
          衬衫定制
        </div>
        <div class="staticShow">
          <img :src="clothesData.custom.static.img" alt="" class="staticShow_img">
        </div>
        <div class="showScroll">
          <div class="showInner">
            <div class="firstShow">
              <img :src="clothesData.custom.show.firstShow.img" alt="" class="img">
              <div class="name">{{clothesData.custom.show.firstShow.name}}</div>
              <div class="price">￥{{clothesData.custom.show.firstShow.price|moneyFilter}}</div>
            </div>
            <div class="otherShows">
              <div class="show" v-for="(item,index) in clothesData.custom.show.otherShow" :key="index">
                <img :src="item.img" alt="" class="img">
                <div class="name">{{item.name}}</div>
                <div class="price">￥{{item.price |moneyFilter}}</div>
              </div>
              <div class="show lastShow">
                <div  class="lastShow-inner">
                  <div class="count">+63</div>
                  <div class="look">查看全部商品</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="smartShow" v-if="!isActive">
        <div class="line">
          <div class="triangle"></div>
          <div class="orthogon"></div>
        </div>
         <div class="showTitle">
           智能选衣
        </div>
        <div class="staticShow">
          <img :src="clothesData.smart.static.img" alt="" class="staticShow_img">
        </div>
        <div class="showScroll">
          <div class="showInner">
            <div class="firstShow">
              <img :src="clothesData.smart.show.firstShow.img" alt="" class="img">
              <div class="name">{{clothesData.smart.show.firstShow.name}}</div>
              <div class="price">￥{{clothesData.smart.show.firstShow.price|moneyFilter}}</div>
            </div>
            <div class="otherShows">
              <div class="show" v-for="(item,index) in clothesData.smart.show.otherShow" :key="index">
                <img :src="item.img" alt="" class="img">
                <div class="name">{{item.name}}</div>
                <div class="price">￥{{item.price|moneyFilter}}</div>
              </div>
              <div class="show lastShow">
                <div class="lastShow-inner">
                  <div class="count">+63</div>
                  <div class="look">查看全部商品</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { toMoney } from "@/filter/moneyFilter.js";
import axios from "axios";
export default {
  data() {
    return {
      isActive: true,
      carousel: [
        require("@/assets/img/HOME/banner.png"),
        require("@/assets/img/HOME/banner4.png"),
        require("@/assets/img/HOME/polobanner.png")
      ],

      images: [
        require("@/assets/img/HOME/1.png"),
        require("@/assets/img/HOME/2.png"),
        require("@/assets/img/HOME/3.png")
      ],
      clothesData: {
        custom: {
          static: {
            img: require("@/assets/img/HOME/1-banner.png")
          },
          show: {
            firstShow: {
              img: require("@/assets/img/HOME/1-left.png"),
              name: "标准领缎纹高定衬衫标准领缎纹高定衬衫",
              price: 10000
            },
            otherShow: [
              {
                img: require("@/assets/img/HOME/1-1.png"),
                name: "标准领缎纹高定衬衫",
                price: 398
              },
              {
                img: require("@/assets/img/HOME/1-2.png"),
                name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
                price: 398
              },
              {
                img: require("@/assets/img/HOME/1-3.png"),
                name: "标准领缎纹高定衬衫",
                price: 398
              },
              {
                img: require("@/assets/img/HOME/1-4.png"),
                name: "标准领缎纹高定衬衫",
                price: 398
              },
              {
                img: require("@/assets/img/HOME/1-5.png"),
                name: "标准领缎纹高定衬衫",
                price: 398
              }
            ]
          }
        },
        smart: {
          static: {
            img: require("@/assets/img/HOME/2-banner.png")
          },
          show: {
            firstShow: {
              img: require("@/assets/img/HOME/2-left.png"),
              name: "标准领缎纹高定衬衫",
              price: 398
            },
            otherShow: [
              {
                img: require("@/assets/img/HOME/2-1.png"),
                name: "标准领缎纹高定衬衫",
                price: 398
              },
              {
                img: require("@/assets/img/HOME/2-2.png"),
                name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
                price: 398
              },
              {
                img: require("@/assets/img/HOME/2-3.png"),
                name: "标准领缎纹高定衬衫",
                price: 398
              },
              {
                img: require("@/assets/img/HOME/2-4.png"),
                name: "标准领缎纹高定衬衫",
                price: 398
              },
              {
                img: require("@/assets/img/HOME/2-5.png"),
                name: "标准领缎纹高定衬衫",
                price: 398
              }
            ]
          }
        }
      },
      // textDate: []
    };
  },
  // created() {
  //   axios({
  //     url: "https://www.easy-mock.com/mock/5b585622fce1393a862d02d7/shop/main",
  //     method: "get"
  //   })
  //     .then(response => {
  //       console.log(response);
  //       if (response.status == 200) {
  //         this.textDate = response.data.data;
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  methods: {
    toggle(a) {
      if (a > 1) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    }
  }
};
</script>

<style>
.van-swipe__indicator--active {
  background-color: white !important;
}

.van-swipe__indicator {
  background-color: #999;
  width: 10px;
  height: 10px;
}
</style>

<style scoped lang="less">
.logo_section {
  padding: 26px;
  .logoImg {
    height: 86px;
    width: 308px;
  }
}

.carousel_section {
  padding-bottom: 20px;
  .carousel_img {
    width: 100%;
    height: 338px;
  }
}

.toggle_section {
  margin-top: 40px;
  .toggle {
    text-align: center;
    margin-bottom: 26px;
    .activeClass {
      background-color: black;
      color: white;
      box-shadow: 0 16px 24px -5px rgba(24, 24, 24, 0.16);
    }
    .custom,
    .smart {
      height: 64px;
      width: 202px;
      line-height: 64px;
      font-size: 26px;
      border-radius: 60px;
      text-align: center;
      display: inline-block;
      border: 1px solid black;
    }
    .custom {
      margin-right: 74.5px;
    }
    .smart {
      margin-left: 74.5px;
    }
  }
  .customShow,
  .smartShow {
    padding-left: 20px;
    padding-right: 20px;
    .line {
      height: 32px;
      width: 100%;
      margin-left: -20px;
      margin-right: -40px;
      position: relative;
      .triangle {
        width: 0px;
        height: 0px;
        border-left: 18px solid transparent;
        border-right: 18px solid transparent;
        border-bottom: 18px solid #f2f2f2;
        position: relative;
      }
      .orthogon {
        height: 12px;
        width: 100%;
        background-color: #f2f2f2;
      }
    }
    .showTitle {
      text-align: center;
      font-size: 42px;
      font-weight: 600;
      height: 59px;
      line-height: 59px;
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .staticShow {
      width: 100%;
      .staticShow_img {
        width: 100%;
        height: 344px;
      }
      margin-bottom: 18px;
    }
    .showScroll {
      padding-bottom: 40px;
      width: 100%;
      overflow-y: scroll;
      font-size: 0;
      .showInner {
        width: 1019px;
        display: flex;
        justify-content: space-between;
        .show {
          width: 220px;
          height: 230px;
          text-align: center;
          display: inline-block;
          border: 1px solid rgba(180, 180, 180, 0.6);
          margin-right: 24px;
          .img {
            width: 160px;
            height: 160px;
            margin-top: 11px;
          }
          .name {
            font-size: 16px;
            width: 143px;
            margin: 9px auto 0;
            height: 24px;
            font-family: pingFangSC-Light, sans-serif;
            overflow: hidden;
          }
          .price {
            width: 160px;
            margin: 0 auto;
            font-size: 18px;
            height: 18px;
            line-height: 18px;
            font-family: PingFangSC-Medium, sans-serif;
          }
        }
        .show:nth-child(1),
        .show:nth-child(2) {
          margin-bottom: 20px;
        }
        .show:nth-child(3),
        .show:nth-child(6) {
          margin-right: 0;
        }
        .firstShow {
          margin-right: 23px;
          .img {
            width: 281px;
            height: 360px;
          }
          .name {
            width: 214px;
            height: 30px;
            font-size: 22px;
            margin: 0 auto;
            text-align: center;
            overflow: hidden;
            margin-top: 40px;
            font-family: pingFangSC-Light, sans-serif;
          }
          .price {
            width: 180px;
            text-align: center;
            font-size: 32px;
            margin: 0 auto;
            height: 32px;
            line-height: 32px;
            font-family: PingFangSC-Medium, sans-serif;
          }
        }
        .lastShow {
          position: absolute;
          .lastShow-inner {
            margin-top: 65px;
            .look {
              font-size: 16px;
              font-family: ingFangSC-Light, sans-serif;
            }
            .count {
              font-size: 36px;
              font-family: PingFangSC-Medium, sans-serif;
            }
          }
        }
        .otherShows {
          display: inline-block;
          width: 738px;
          position: relative;
        }
      }
    }
  }
  .customShow {
    .line {
      .triangle {
        left: 180px;
      }
    }
  }
  .smartShow {
    .line {
      .triangle {
        left: 535px;
      }
    }
  }
}
</style>
