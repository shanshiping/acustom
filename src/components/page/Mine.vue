<template>
  <div class="mine">
    <section>
      <div class="banner"></div>
      <div class="news_show">
        <div class="self_show">
          <img src="@/assets/img/HOME/banner3.png" alt="" class="avatar">
          <span class="user_name">柯西西</span>
          <span class="user_phone">18121069140</span>
          <div class="integra_inner"><img src="@/assets/img/HOME/banner3.png" alt="" class="integra_img">签到领积分</div>
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
      </div>
    </section>
    <section></section>
    <section></section>
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

  .banner {
    position: relative;
    top:10px;
    background-color: #373737;
    border-bottom: 1px soild #373737;
    height: 578px;
    width: 1110;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-right-radius:50%;
    border-top-left-radius:50%;
  }
  .news_show {
    padding: 10px;
    background-color: #ffffff;
    position: absolute;
    top: 150px;
    margin: 35px;
    .self_show {
      width: 660px;
      height: 120px;
      position: relative;
      .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
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
        .integra_img {
          width: 32px;
          height: 30px;
          margin-right: 17px;
          vertical-align: -5px;
        }
      }
    }
    .reten_inner {
      margin-top: 30px;

      .reten {
        display: inline-block;
        .title {
          color: #666;
          font-size: 24px;
          font-family: pingFangSC-Medium;
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
        margin-top: 20px;
      }
    }
  }
}
</style>
