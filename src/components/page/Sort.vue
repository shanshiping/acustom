<template>
  <div class="clearfix">
    <aside class="left">
      <div v-for="(item,index) in sidebar" :key="index">
        <div class="leftTitle" v-if="item.children.length" @click="toggleShow(index)">{{item.name}}
          <img src="@/assets/img/sort/arrow_on.png" alt="" v-show="!item.childrenIsshow" class="arrow">
          <img src="@/assets/img/sort/arrow_under.png" alt="" v-show="item.childrenIsshow" class="arrow">
        </div>
        <router-link v-if="!item.children.length" to="/">{{item.name}}</router-link>
        <ul v-if="item.children.length" v-show="item.childrenIsshow">
          <li v-for="(childrenItem,index) in item.children" :key="index" class="leftChildern">
            <router-link :to="childrenItem.path">{{childrenItem.title}}</router-link>
          </li>
        </ul>
      </div>
    </aside>
    <router-view class="aaa" style='display:inline-block'></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sidebar: [
        {
          name: "量身定制",
          childrenIsshow: true,
          children: [
            { title: "男装", path: "/sort" },
            { title: "女装", path: "/sort/customWoman" }
          ]
        },
        {
          name: "智能配码",
          childrenIsshow: true,
          children: [
            { title: "男装", path: "/sort/smartMan" },
            { title: "女装", path: "/sort/smartWoman" }
          ]
        }
      ]
    };
  },
  methods: {
    toggleShow(index) {
      let that = this.sidebar;
      that[index].childrenIsshow = !that[index].childrenIsshow;
    }
  }
};
</script>
<style scoped>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.left {
  width: 170px;
  float: left;
  position: fixed;
}
.leftTitle,
.leftChildern {
  height: 98px;
  line-height: 98px;
  text-align: center;
  font-size: 26px;
}
.leftChildern:nth-child(1) {
  border-bottom: 1px solid #ccc;
}
.leftTitle{
  font-family: pingFangSC-Bold, sans-serif;
  border-right: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
}
.leftChildern {
  background-color: rgb(243, 244, 245);
  border-left: 6px solid transparent;
  font-family: pingFangSC-Medium, sans-serif;
}
.leftChildern a {
  color: black;
}

.leftChildern:hover,
.leftChildern:hover {
  border-left: 6px solid black;
}
.arrow {
  width: 22px;
  height: 12px;
  vertical-align: 0px;
  margin-left: 5px;
}
</style>
