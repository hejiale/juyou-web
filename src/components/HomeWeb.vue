<template>
  <div class="container">
    <homeMenu @on-change-menu="onChangeTab"></homeMenu>
    <div class="contentBox">
      <img
        src="../assets/backgournd2.jpg"
        class="imageStyle"
        mode="aspectFill"
        v-if="activeIndex === 0"
      />
      <img
        src="../assets/backgournd3.jpg"
        class="imageStyle"
        mode="aspectFill"
        v-if="activeIndex === 1"
      />
      <homeBook v-if="activeIndex === 2"></homeBook>
      <homeStore v-if="activeIndex === 3"></homeStore>
      <img
        src="../assets/backgournd4.png"
        class="imageStyle"
        v-if="activeIndex === 4"
      />
      <homeBottom></homeBottom>
    </div>
    <homeDownload v-if="activeIndex === 0"></homeDownload>
  </div>
</template>
<script>
import homeMenu from "./home-menu.vue";
import homeBottom from "./home-bottom.vue";
import homeDownload from "./home-download.vue";
import homeBook from "./home-book.vue";
import homeStore from "./home-store.vue";
export default {
  components: {
    homeBottom,
    homeDownload,
    homeMenu,
    homeBook,
    homeStore
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  created() {
  },
  methods: {
    onChangeTab(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  width: 100%;
}
.contentBox {
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  /* bottom: 170px; */
  width: 100%;
  background-image:url("../assets/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background: #fafafa;
}
.imageStyle {
  width: 100%;
  display: block;
}
</style>