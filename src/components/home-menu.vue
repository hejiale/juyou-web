<template>
  <div class="top">
    <div class="logoBox">
      <img src="../assets/logo.png" alt="" class="logoImg" mode="aspectFill"/>
      <!-- <span class="title">剧游宇宙</span> -->
    </div>
    <div class="menuBar">
      <div
        v-for="(menu, index) in menus"
        :key="index"
        class="menuBarItem"
        :class="index === activeIndex ? 'activeSpan':''"
        @click="onChangeTab(index)"
      >
        {{ menu }}
        <div
          class="menuBarLine"
          :class="activeIndex === index ? 'active' : ''"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: ["首页", "关于我们", "商户入驻", "平台商城", "联系我们"],
      activeIndex: 0,
    };
  },
  methods: {
    onChangeTab(index) {
      this.activeIndex = index;
      this.$emit("on-change-menu", this.activeIndex);
    },
  },
};
</script>
<style scoped>
.top {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  height: 64px;
}
.logoBox {
  margin: 0 30px;
  display: flex;
  align-items: center;
}
.logoImg {
  width: 95px;
  height: 48px;
}
/* .title {
  font-size: 16px;
  font-weight: 700;
  color: #333333;
  margin-left: 5px;
} */
.menuBar {
  display: flex;
  align-items: center;
}
.menuBarItem {
  color: #333333;
  font-size: 16px;
  margin-right: 80px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  padding-bottom: 10px;
}
.menuBarLine {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5px;
  background: #fff;
  border-radius: 5px;
}
.active {
  background: #5EC9C7;
}
.activeSpan{
  color:#5EC9C7;
}
</style>