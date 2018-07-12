<template>
  <div>
    <section class="banner">
      <img class="bannerImg" src="@/assets/img/HOME/banner3.png" alt="">
    </section>
    <section class="operate">
      <div class="operate_card">
        <div class="information">
          <img src="@/assets/img/HOME/banner3.png" alt="" class="buddha">
          <span>阿狸</span>
        </div>
        <div class="state">
          <ul>
            <li class="stateItem">全部</li>
            <li class="stateItem"></li>
            <li class="stateItem">待付款</li>
            <li class="stateItem"></li>
            <li class="stateItem">待发货</li>
            <li class="stateItem"></li>
            <li class="stateItem">已发货</li>
            <li class="stateItem"></li>
            <li class="stateItem">已完成</li>
          </ul>
        </div>
      </div>
      <div class="other">
        <ul>
          <li class="otherItem"><img class="otherImg" src="@/assets/img/main/coupon.png" alt="">优惠券<img class="otherRight" src="@/assets/img/main/arrow_right.png" alt=""></li>
          <li class="otherItem"><img class="otherImg" src="@/assets/img/main/size.png" alt="">我的尺寸<img class="otherRight" src="@/assets/img/main/arrow_right.png" alt=""></li>
          <li class="otherItem"><img class="otherImg" src="@/assets/img/main/size.png" alt="">亲友尺寸<img class="otherRight" src="@/assets/img/main/arrow_right.png" alt=""></li>
          <li class="otherItem"><img class="otherImg" src="@/assets/img/main/adress.png" alt="">我的地址<img class="otherRight" src="@/assets/img/main/arrow_right.png" alt=""></li>
          <li class="otherItem"><img class="otherImg" src="@/assets/img/main/collection.png" alt="">我的收藏<img class="otherRight" src="@/assets/img/main/arrow_right.png" alt=""></li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.banner .bannerImg {
  width: 100%;
  height: 8rem;
}
.operate {
  position: absolute;
  top: 6.75rem;
  left: 0;
  right: 0;
  padding: 0.5rem;
  .operate_card {
    border-radius: 6px;
    padding-bottom: 0.5rem;
    box-shadow: -4px 0px 16px 0px rgba(0, 0, 0, 0.08);
    background-color: white;
  }
  .information {
    height: 5rem;
    line-height: 5rem;
    .buddha {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      vertical-align: -1.125rem;
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
  .state {
    font-size: 0;
    .stateItem {
      font-size: 1rem;
      display: inline-block;
      width: 4.3rem;
      text-align: center;
    }
    .stateItem:nth-child(2n) {
      background-color: rgba(180, 180, 180, 0.6);
      width: 0.1rem;
      height: 0.5rem;
    }
  }
  .other {
    margin-top: 1rem;
    .otherItem {
      border-bottom: 0.05rem solid rgba(180, 180, 180, 0.6);
      height: 3rem;
      line-height: 3rem;
      position: relative;
      .otherImg {
        width: 1.5rem;
        height: 1.5rem;
        vertical-align: -0.44rem;
        margin-right: 0.5rem;
      }
      .otherRight {
        width: 0.5rem;
        height: 0.5rem;
        vertical-align: 1px;
        position: absolute;
        top: 1.3rem;
        left: 21rem;
      }
    }
  }
}
</style>
