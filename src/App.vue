<template>
  <div id="app">
    <!--操作区域-->
    <div class="main">
      <router-view></router-view>
    </div>
    <!--底部部导航-->
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import bottomNav from "@/components/common/bottomNav";

export default {
  name: "App",
  components: {
    bottomNav
  }
};
</script>

<style scope>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.main{
  margin-bottom: 3rem;
}
</style>
