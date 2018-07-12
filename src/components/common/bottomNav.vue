<template>
  <div class="nav">
    <router-link class="nav-item home" to="/">
      <div class="nav-item-name">首页</div>
    </router-link>
    <router-link class="nav-item sort" to="/sort">
      <div class="nav-item-name sort">分类</div>
    </router-link>
    <router-link class="nav-item cart" to="/cart">
      <div class="nav-item-name">购物车</div>
    </router-link>
    <router-link class="nav-item mine" to="/mine">
      <div class="nav-item-name">我的</div>
    </router-link>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
  methods: {
    text: function() {}
  }
};
</script>

<style scope>
.nav {
  height: 3rem;
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.navImg {
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: -3px;
}
.nav-item {
  flex: 1;
  text-decoration: none;
  padding-top: 0.2rem;
}
.nav-item:link,
.nav-item:visited {
  background-color: white;
  color: black;
}
.nav-item:hover,
.nav-item:active {
  color: black;
}
.nav-item {
  background-size: 1.5rem 1.5rem;
  background-position: 2.25rem 0.187rem;
  background-repeat: no-repeat;
}
.home.nav-item {
  background-image: url("../../assets/img/bottomNav/home.png");
}
.sort.nav-item {
  background-image: url("../../assets/img/bottomNav/sort.png");
}
.cart.nav-item {
  background-image: url("../../assets/img/bottomNav/buy.png");
}
.mine.nav-item {
  background-image: url("../../assets/img/bottomNav/mine.png");
} 
.home.nav-item:hover,
.home.nav-item:active {
  background-image: url("../../assets/img/bottomNav/home_on.png");
} 
.sort.nav-item:hover,
.sort.nav-item:active {
  background-image: url("../../assets/img/bottomNav/sort_on.png");
}
.cart.nav-item:hover,
.cart.nav-item:active {
  background-image: url("../../assets/img/bottomNav/buy_on.png");

}
.mine.nav-item:hover,
.mine.nav-item:active {
  background-image: url("../../assets/img/bottomNav/mine_on.png");
}
.nav-item-name {
  margin-top: 1.43rem;
}
</style>

 