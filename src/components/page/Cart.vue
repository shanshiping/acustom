<template>
  <div>
    <!-- <section class="remind claerfix">
      <div class="remindTitle"><img src="@/assets/img/car/phone.png" alt="" class="phoneImg"> 绑定手机号,保存购物车的商品</div>
      <button class="bindButton">立即绑定</button>
    </section> -->
    <!-- <section class="carEmpty">
      <div class="empty_text">购物车快饿瘪了ToT</div>
      <div class="empty_pick">快给我挑点宝贝，对！就要定制的那款</div>
    </section> -->
    <section class="hasgoods"> 
      <div class="hasgoods_item" v-for=" (item,index) in cartData" :key="index">
         <van-checkbox v-model="item.isChecked" class="checked"></van-checkbox>
         <img :src="item.img" alt="" class="goods_img">
           <span class="goods_name">{{item.name}}</span>
         <img src="@/assets/img/car/delete.png" class="delete_img">
         <div class="option">
           <div class="size_show">
             尺寸: <span>{{item.size}}</span>
           </div>
            <button class="change_button">更换定制项</button>
         </div>
          <span class="price">
        {{item.price|moneyFilter}}
          </span>
          <van-stepper class="count_operation" v-model="item.count" />
      </div>
      <div class="claerfix settlement_inner">
      <div class="inner_left">
        <span class="all_checked_inner">
          <van-checkbox v-model="isChecked" class="all_checked">全选</van-checkbox>
        </span>
        <div class="total">合计：<span>￥ 0</span></div>
        <div class="selected">已选：<span>0</span> 件</div>
      </div>
      <div class="inner_right">
        结算
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
      isChecked: false,
      cartData: [
        {
          img: require("@/assets/img/HOME/1-2.png"),
          name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
          price: 11,
          size: "柯西西",
          count: 3,
          isChecked: false
        },
        {
          img: require("@/assets/img/HOME/1-2.png"),
          name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
          price: 11,
          size: "柯西西",
          count: 3,
          isChecked: false
        },
        {
          img: require("@/assets/img/HOME/1-2.png"),
          name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
          price: 11,
          size: "柯西西",
          count: 3,
          isChecked: false
        },
        {
          img: require("@/assets/img/HOME/1-2.png"),
          name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
          price: 11,
          size: "柯西西",
          count: 3,
          isChecked: false
        },
        {
          img: require("@/assets/img/HOME/1-2.png"),
          name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
          price: 11,
          size: "柯西西",
          count: 3,
          isChecked: false
        },
        {
          img: require("@/assets/img/HOME/1-2.png"),
          name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
          price: 11,
          size: "柯西西",
          count: 3,
          isChecked: false
        },
        {
          img: require("@/assets/img/HOME/1-2.png"),
          name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
          price: 11,
          size: "柯西西",
          count: 3
        },
        {
          img: require("@/assets/img/HOME/1-2.png"),
          name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
          price: 11,
          size: "柯西西",
          count: 3,
          isChecked: false
        }
      ]
    };
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  }
};
</script>
<style lang="less">
.checked {
  position: relative;
  .van-icon {
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
.count_operation .van-stepper__input {
  height: 46px;
  width: 65px;
  font-size: 24px;
}
.count_operation .van-stepper__minus {
  border-radius: 10px 0px 0px 10px;
}
.count_operation .van-stepper__plus {
  border-radius: 0px 10px 10px 0px;
}
.count_operation .van-stepper__minus,
.count_operation .van-stepper__plus {
  font-size: 36px !important;
  height: 50px;
  width: 60px;
}
.count_operation .van-stepper__minus::before,
.count_operation .van-stepper__plus::before {
  width: 16px;
  height: 2px;
}
.count_operation .van-stepper__minus::after,
.count_operation .van-stepper__plus::after {
  height: 16px;
  width: 2px;
}
</style>

<style lang="less" scoped>
.claerfix::after {
  content: "";
  display: block;
  clear: both;
}
.remind {
  border-top: 1px solid rgba(180, 180, 180, 0.6);
  border-bottom: 1px solid rgba(180, 180, 180, 0.6);
  padding: 28px 20px;
  .phoneImg {
    width: 23px;
    height: 41px;
    vertical-align: -9px;
    margin-right: 20px;
  }
  .remindTitle {
    font-size: 28px;
    float: left;
    color: #121212;
  }
  .bindButton {
    width: 99px;
    font-size: 19px;
    padding: 5px 10px;
    border: 1px solid #5f5f5f;
    color: #5f5f5f;
    border-radius: 6px;
    background-color: white;
    float: right;
  }
  .bindButton:active {
    background-color: #5f5f5f;
    color: white;
    border: 1px solid transparent;
  }
}
.carEmpty {
  text-align: center;
  margin-top: 100px;
  .empty_text {
    font-size: 32px;
    margin-bottom: 30px;
  }
  .empty_pick {
    font-size: 24px;
    color: #464646;
  }
}
.hasgoods {
  background-color: #f2f2f2;
  padding-bottom: 100px;
  .hasgoods_item {
    background-color: #fff;
    backgroud-color: blue;
    margin-bottom: 20px;
    height: 290px;
    position: relative;
    .checked {
      display: inline-block;
      width: 85px;
      height: 280px;
    }
    .goods_img {
      width: 180px;
      height: 180px;
      position: absolute;
      left: 85px;
      top: 50%;
      transform: translate(0, -50%);
    }
    .goods_name {
      width: 316px;
      display: inline-block;
      font-size: 28px;
      overflow: hidden;
      position: absolute;
      top: 50px;
      left: 282px;
    }
    .delete_img {
      width: 34px;
      height: 34px;
      position: absolute;
      top: 60px;
      right: 25px;
    }
    .option {
      position: absolute;
      top: 130px;
      left: 282px;
      .size_show,
      .change_button {
        border-radius: 10px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        width: 182px;
        font-size: 24px;
      }
      .size_show {
        background-color: #3f4349;
        color: #fff;
        display: inline-block;
        margin-right: 20px;
      }
      .change_button {
        background-color: white;
        color: #666;
        border: 1px solid #666;
      }
    }
    .price,
    .count_operation {
      position: absolute;
      height: 50px;
      line-height: 50px;
      top: 210px;
    }
    .price {
      color: #ff3b30;
      font-size: 36px;
      left: 282px;
    }
    .count_operation {
      display: inline-block;
      right: 35px;
    }
  }
  .settlement_inner {
    width: 100%;
    background-color: #fff;
    .inner_right {
      float: right;
      width: 260px;
      height: 98px;
      line-height: 98px;
      text-align: center;
      font-size: 24px;
      color: #fff;
      background-color: #3f4349;
    }
    .inner_left {
      float: left;
      height: 98px;
      width: 490px;
      position: relative;
      font-size: 22px;
      color: #7b7b7b;
      .all_checked_inner {
        display: inline-block;
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translate(0, -50%);
      }
      .total {
        position: absolute;
         left:343px;
         top:16px;
      }
      .selected {
        position: absolute;
         left: 343px;
         top:56px;
      }
    }
  }
}
</style>
