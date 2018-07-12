<template>
  <div>
    <section class="remind claerfix">
      <div class="remindTitle"><img src="@/assets/img/car/phone.png" alt="" class="phoneImg"> 绑定手机号,保存购物车的商品</div>
      <button class="bindButton">立即绑定</button>
    </section>
    <section class="carEmpty">
      <h3>购物车快饿瘪了ToT</h3>
      <div>快给我挑点宝贝，对！就要定制的那款</div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.claerfix::after {
  content: "";
  display: block;
  clear: both;
}
.remind {
  border: 1px solid rgba(180, 180, 180, 0.6);
  padding: 0.5rem;
  .phoneImg {
    width: 1rem;
    height: 1.5rem;
    vertical-align: -9px;
  }
  .remindTitle {
    font-size: 0.5rem;
    float: left;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .bindButton {
    font-size: 0.5rem;
    width: 5rem;
    height: 1.5rem;
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
  margin-top: 5rem;
}
</style>
