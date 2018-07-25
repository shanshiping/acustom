<template>
    <div>
       <section class="carousel_section">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in carousel" :key="index">
          <img :src="image" class="carousel_img" />
        </van-swipe-item>
      </van-swipe>
    </section>
    <section class="goods-message"> 
        <div class="price-inner clearfix">
        <span class="price">￥299.00</span>
        <span class="collect">收藏
            <img src="@/assets/img/car/collection.png" alt="" class="collect_img">
        </span>
        </div>
        <div class="goodsName">英伦红蓝格纹衬衫</div>
    </section>
    <section class="feature_inner">
            <span class="feature"><img  class="feature_img" src="@/assets/img/car/√.png" alt=""> 顺丰包邮</span>
            <span class="feature"><img class="feature_img" src="@/assets/img/car/√.png" alt=""> 智能配码</span>
            <span class="feature"><img class="feature_img" src="@/assets/img/car/√.png" alt=""> 售后无忧</span>
    </section>
    <section class="text">
        面料是诠释服装风格和特性的灵魂所在，Acustom品牌选择面
料都是通过国际生态纺织标准100认证，款式经典、裁剪性好
是您优质生活的不二选择。
    </section>
    <section class="goodsAction">
        <div class="service">
            <img src="@/assets/img/car/contact_us.png" alt="">
            <div>联系我们</div> 
        </div>
        <div class="myCar">
            <img src="@/assets/img/car/buy.png" alt="">
            <div>我的购物车</div>
        </div>
        <div class="addCar">
            <div class="button">加入购物车</div>
        </div>
        <div class="size">
            <div class="button">柯西西</div>
        </div>
    </section>
    </div>
</template>
<script>
export default {
  data() {
    return {
      carousel: [
        require("@/assets/img/car/WW60061-1.jpg"),
        require("@/assets/img/car/WW60061-1.jpg"),
        require("@/assets/img/car/WW60061-1.jpg")
      ]
    };
  }
};
</script>

<style lang="less">
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.carousel_section {
  padding-bottom: 20px;
  .carousel_img {
    width: 100%;
    height: 728px;
  }
}
.goods-message {
  .price-inner {
    height: 65px;
    line-height: 65px;
    padding-left: 15px;
    padding-right: 15px;
    .price {
      font-size: 38px;
      color: #f85453;
      font-family: pingFangSC-Bold;
    }
    .collect {
      float: right;
      font-size: 26px;
      color: #666;
      padding-top: 4px;
      font-family: PingFang-SC-Medium;
      .collect_img {
        width: 25px;
        height: 25px;
        vertical-align: -3px;
      }
    }
  }
  .goodsName {
    padding-left: 15px;
    padding-right: 15px;
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    color: #333;
    font-family: pingFangSC-Bold;
  }
}
.feature_inner {
  padding-left: 20px;
  padding-right: 20px;
  height: 60px;
  line-height: 60px;
  font-size: 26px;
  font-family: pingFangSC-Regular;
  color: #666;
  .feature {
    text-align: center;
    display: inline-block;
    width: 230px;
    .feature_img {
      vertical-align: -5px;
    }
  }
}
.goodsAction {
  position: fixed;
  bottom: 95px;
  padding-left: 20px;
  padding-right: 20px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background-color:white;
  z-index: 8;
  .service,
  .myCar {
    width: 90px;
    text-align: center;
    color: #666;
  }
  .addCar,
  .size {
    width: 263px;
    .button {
      font-size: 30px;
      margin: 10px auto;
      text-align: center;
      width: 225px;
      height: 80px;
      line-height: 80px;
      border-radius: 6px;
    }
  }
  .size {
    .button {
      border: 2px solid #353535;
      color: #353535;
    }
  }
  .addCar {
    .button {
      background-color: #222222;
      color: #fff;
    }
  }
}
.text {
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 20px;
  padding-right: 2px;
  font-size: 26px;
  color:#666;
  font-family: pingFangSC-Light;
  line-height: 40px;
  margin-top: 40px;
  margin-bottom: 150px;
}
</style>
