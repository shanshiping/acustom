<template>
        <section class="coupons">
            <div class="title_inner">
               <div class="title">红包/抵用券</div>
                <div class="count">共<span>3</span>张</div>
            </div>
            <div class="coupons_inner">
                <div class="coupons_item" v-for="item in coupons" :key="item">
                    <div class="item_left">
                        <div class="amount">{{item.amount}}</div>
                        <div class="condition">满<span>{{item.condition}}</span>可用</div>
                    </div>
                    <div class="item_right">
                        <div class="amount_title">{{item.amount_title}}</div>
                        <div class="validity">{{item.validity}}</div>
                        <div class="range">{{item.range}}</div>
                        <div class="button">立即使用</div>
                    </div>
                </div>
                 
            </div>
        </section>
</template>
<style scoped lang="less">
.coupons {
  .title_inner {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
    margin-top: 10px;
    .title {
      font-size: 30px;
      color: #333;
    }
    .count {
      font-size: 24px;
      color: #666;
    }
  }
  .coupons_inner {
    background-color: white;

    .coupons_item {
      margin-left: 20px;
      margin-right: 20px;
      background-color: white;
      box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.08);
      margin-bottom: 20px;
      border-radius: 4px;
      .item_left {
        border-right: 1px dashed #bcbcbc;
        display: inline-block;
        width: 150px;
        text-align: center;
        height: 160px;
        .amount {
          color: #f44747;
          font-size: 44px;
          margin-top: 50px;
          font-weight: 600;
        }
        .condition {
          color: #333;
          font-size: 20px;
        }
      }
      .item_right {
        display: inline-block;
        width: 553px;
        height: 160px;
        position: absolute;
        .amount_title {
          position: absolute;
          display: inline-block;
          left: 30px;
          top: 46px;
          font-size: 28px;
          color: #333333;
          font-weight: 600;
        }
        .validity {
          position: absolute;
          display: inline-block;
          top: 86px;
          left: 30px;
          font-size: 23px;
          font-size: 23px;
          color: #666;
        }
        .range {
          position: absolute;
          display: inline-block;
          top: 116px;
          left: 30px;
          font-size: 23px;
          color: #666;
        }
        .button {
          position: absolute;
          display: inline-block;
          font-size: 26px;
          color: #f44747;
          top: 55px;
          right: 0px;
          border: 1px solid #f44747;
          padding: 5px 15px;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      coupons: [
          { amount: 20, condition: 299, amount_title: "新用户首单专享",validity:"2018.07.20---2018.08.01",range:"所有商品适用" },
          { amount: 30, condition: 399, amount_title: "智能配码福利社",validity:"2018.07.20---2018.08.01",range:"仅限于智能配码专场使用" },
          { amount: 30, condition: 399, amount_title: "量身定制福利社",validity:"2018.07.20---2018.08.01",range:"仅限于量身定制专场使用" },

      ]
    };
  }
};
</script>


