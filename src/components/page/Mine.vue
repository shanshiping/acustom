<template>
  <div class="mine">
    <section class="news_inner">
      <div class="banner"></div> 
      <div class="news_show">
        <div class="self_show">
          <img src="@/assets/img/main/not_login.png" alt="" class="avatar">
          <span class="user_name">柯西西</span>
          <span class="user_phone">18121069140</span>
          <div class="integra_inner"><img src="@/assets/img/main/integral.png" alt="" class="integra_img">签到领积分</div>
        </div>
        <div class="reten_inner clearfix">
          <div class="reten">
            <span class="title">购买返现(元)</span>
            <div class="amount">266.12</div>
          </div>
          <div class="button">
            提现
          </div>
        </div>
        <div class="course_inner">
          <div class="course">
                <div class="course_item">53.2</div>
            <div class="course_title">可提现金额</div>
        
          </div>
          <div class="course">
            <div class="course_item">89.66</div>
            <div class="course_title">交易中</div>
          </div>
          <router-link class="course" to="/coupons">
            <div class="course_item">12.23</div>
            <div class="course_title">优惠券</div>
          </router-link>
          <div class="course">
            <div class="course_item">365</div>
            <div class="course_title">我的积分</div>
          </div>
        </div>
      </div>
    </section>
    <section class="order_show">
      <div class="title_inner clearfix">
        <span class="title">我的订单</span>
        <div class="show_all">查看全部订单 > </div>
      </div>
      <div class="order_inner">
        <div class="order_item">
          <img src="@/assets/img/main/unpaid.png" class="order_img" alt="">
          <div class="order_title">待支付</div>
        </div>
        <div class="order_item">
          <img src="@/assets/img/main/unreceived.png" class="order_img" alt="">
          <div class="order_title">待收货</div>
        </div>
        <div class="order_item">
          <img src="@/assets/img/main/no_evaluated.png" class="order_img" alt="">
          <div class="order_title">待评价</div>
        </div>
         <div class="order_item">
          <img src="@/assets/img/main/after_sale.png" class="order_img" alt="">
          <div class="order_title">售后/退款</div>
        </div>
      </div>
      <div>

      </div>
    </section>
    <section class="order_show">
      <div class="title_inner clearfix">
        <span class="title">常用功能</span>
      </div>
      <div class="order_inner">
        <div class="order_item">
          <img src="@/assets/img/main/adress.png" class="order_img" alt="">
          <div class="order_title">收货地址</div>
        </div>
        <div class="order_item">
          <img src="@/assets/img/main/collect.png" class="order_img" alt="">
          <div class="order_title">我的收藏</div>
        </div>
        <div class="order_item">
          <img src="@/assets/img/main/size_management.png" class="order_img" alt="">
          <div class="order_title">尺寸管理</div>
        </div>
         <div class="order_item">
          <img src="@/assets/img/main/question.png" class="order_img" alt="">
          <div class="order_title">常见问题</div>
        </div>
         <div class="order_item">
          <img src="@/assets/img/main/advice.png" class="order_img" alt="">
          <div class="order_title">意见反馈</div>
        </div>
        <div class="order_item">
          <img src="@/assets/img/main/setting.png" class="order_img" alt="">
          <div class="order_title">设置</div>
        </div>
         <div class="order_item">
          <img src="@/assets/img/main/about_us.png" class="order_img" alt="">
          <div class="order_title">关于我们</div>
        </div>
      </div>
      <div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.mine {
  background-color: #f3f3f3;
  overflow: hidden;
  .news_inner {
    background-color: #FFFFFF;
    margin-bottom: 35px;
    .banner {
      position: relative;
      top: -275px;
      left: -173px;
      background-color: #373737;
      border-bottom: 1px soild #373737;
      height: 578px;
      width: 1110px;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
      border-top-right-radius: 50%;
      border-top-left-radius: 50%;
    }
    .news_show {
      padding: 10px;
      background-color: #ffffff;
      position: absolute;
      border-radius: 6px;
      box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
      top: 95px;
      margin:35px 35px 0 35px;
      .self_show {
        width: 660px;
        height: 120px;
        position: relative;
        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background-color: gray;
        }
        .user_name {
          font-family: pingFangSC-Heavy;
          color: #333;
          font-size: 32px;
          position: absolute;
          top: 20px;
          margin-left: 20px;
        }
        .user_phone {
          font-size: 28px;
          color: #666;
          font-family: pingFangSC-Medium;
          position: absolute;
          top: 70px;
          margin-left: 20px;
        }
        .integra_inner {
          display: inline-block;
          color: #333;
          position: absolute;
          right: 2px;
          top: 47px;
          font-size: 24px;
          font-weight: 300;
          .integra_img {
            width: 40px;
            height:40px;
            margin-right: 17px;
            vertical-align: -14px;
          }
        }
      }
      .reten_inner {
        margin-top: 30px;
        .reten {
          display: inline-block;
          margin-bottom: 60px;
          margin-left: 20px;
          .title {
            color: #666;
            font-size: 24px;
            font-family: pingFangSC-Medium;
            font-weight: 300;
          }
          .amount {
            color: #333;
            font-size: 48px;
            font-weight: 600;
            font-family: pingFangSC-Heavy;
            margin-top: 28px;
          }
        }
        .button {
          display: inline-block;
          color: #666;
          font-size: 24px;
          border: 1px solid #666;
          padding: 14px 40px;
          border-radius: 45px;
          float: right;
          font-weight: 300;
          margin-top: 50px;
        }
      }
      .course_inner {
        font-size: 0;
        .course {
          width: 165px;
          display: inline-block;
          text-align: center;
          .course_title {
            font-size: 24px;
            color: #333333;
            font-weight: 300;
          }
          .course_item {
            font-size: 38px;
          }
        }
      }
    }
  }
  .order_show {
    background-color: #FFFFFF;
    margin-bottom: 30px;
    padding-top: 30px;
    // padding-bottom: 30px;
    .title_inner {
      height: 36px;
      line-height: 36px;
      padding-left: 45px;
      padding-right: 45px;
      padding-bottom: 50px;
      .title {
        font-size: 34px;
        color: #000;
       
      }
      .show_all {
        font-size: 24px;
        color: #848383;
        float: right;
        font-weight: 300;
        .show_all_img {
          vertical-align: -10px;
        }
      }
    }
    .order_inner {
      display: flex;
      flex-wrap: wrap;
      padding-left: 45px;
      padding-right: 45px;
      align-content: space-between;
      .order_item {
        text-align: center;
        width: 165px;
        .order_img{
          width: 66px;
          height: 66px;
        }
        .order_title{
          font-size: 24px;
           font-weight: 300;
        }
      }
    }
    .order_inner:nth-child(2) {
      .order_item {
      margin-bottom: 60px;
      }
    }
  }
}
</style>
