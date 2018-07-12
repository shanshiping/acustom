<template>
  <div>
    <!-- <section style="text-align:center">
            <div>Acustom 商城</div>
        </section> -->
    <section class="logo_section">
      <img src="@/assets/img/HOME/Acustom_logo.png" alt="" class="logoImg">
    </section>
    <section class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in carousel" :key="index">
          <img :src="image" style="width:100%" />
        </van-swipe-item>
      </van-swipe>
    </section>
    <section>
      <div class="toggle">
        <div class="custom" :class="{activeClass:isActive}" @click="toggle(1)">量身定制</div>
        <div class="smart" :class="{activeClass:!isActive}" @click="toggle(2)">智能选衣</div>
      </div>
      <div class="customShow" v-if="isActive">
        <div class="staticShow">
          <img :src="clothesData.custom.static.img" alt="">
        </div>
        <div class="showScroll">
          <div class="showInner">
            <div class="show firstShow">
              <img :src="clothesData.custom.show.firstShow.img" alt="">
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
                <div style="margin-top:3rem">
                  <h2>+63</h2>
                  <div>查看全部商品</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="smartShow" v-if="!isActive">
        <div class="staticShow">
          <img :src="clothesData.smart.static.img" alt="">
        </div>
        <div class="showScroll">
          <div class="showInner">
            <div class="show firstShow">
              <img :src="clothesData.smart.show.firstShow.img" alt="">
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
                <div style="margin-top:3rem">
                  <h2>+63</h2>
                  <div>查看全部商品</div>
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
          static: { img: require("@/assets/img/HOME/1-banner.png") },
          show: {
            firstShow: {
              img: require("@/assets/img/HOME/1-left.png"),
              name: "两粒扣西装",
              price: 398
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
          static: { img: require("@/assets/img/HOME/2-banner.png") },
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
      }
    };
  },
  filters:{
    moneyFilter(money){
      return toMoney(money)
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
}
</style>

<style scoped>
.showInner {
  display: flex;
  justify-content: space-between;
}
.logoImg {
  height: 5rem;
  width: 15rem;
}
.carousel .carousel_img {
  width: 100%;
  height: 15rem;
  display: block;
  padding: 1.9rem 3.8rem;
  box-sizing: border-box;
  background-color: #fff;
  pointer-events: none;
}
.logo_section {
  padding: 0.5rem;
}
.showInner {
  width: 34rem;
}
.staticShow img {
  width: 23.4rem;
}
.showInner .show {
  font-size: 0.5rem;
  height: 9rem;
  width: 6rem;
  display: inline-block;
  text-align: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid rgba(180, 180, 180, 0.6);
  padding: 0.2rem;
  margin-top: 0.2rem;
}
.showInner .show .name {
  height: 2rem;
  width: 5.8rem;
  overflow: hidden;
}
.showInner .show .price {
  height: 1rem;
}

.showInner .show .img {
  width: 5rem;
  height: 5rem;
}
.firstShow img {
  height: 12rem !important;
  width: 100% !important;
}
.firstShow .name {
  font-size: 1rem;
  margin-top: 1rem;
  width: 9.5rem !important;
  height: 1.25rem !important;
}
.firstShow {
  height: 17rem !important;
  width: 10rem !important;
  border: 0 !important;
}
.showScroll {
  width: 100%;
  overflow-y: scroll;
  font-size: 0;
}
.otherShows {
  display: inline-block;
  width: 23rem;
  position: relative;
}
.toggle {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.toggle .custom,
.toggle .smart {
  text-align: center;
  display: inline-block;
  border: 1px solid black;
  width: 4.3rem;
  border-radius: 3.75rem;
  padding: 0.5rem;
  cursor: pointer;
}
.toggle .activeClass {
  background-color: black;
  color: white;
}
.lastShow {
  position: absolute;
}
</style>
