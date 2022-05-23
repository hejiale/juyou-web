<template>
  <div class="downloadBox">
    <div class="downloadLinkBox">
      <div
        class="iosBox"
        @mouseenter="showIosCode = true"
        @mouseleave="showIosCode = false"
      >
        App Store下载
      </div>
      <div
        class="androidBox"
        @mouseenter="showAndroidCode = true"
        @mouseleave="showAndroidCode = false"
      >
        Android下载
      </div>
    </div>
    <div>
      <div
        class="iosCodeBox"
        v-show="showIosCode"
        @mouseleave="showIosCode = false"
      ></div>
      <div
        class="androidCodeBox"
        v-show="showAndroidCode"
        @mouseleave="showAndroidCode = false"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showIosCode: false,
      showAndroidCode: false,
    };
  },
};
</script>
<style scoped>
.downloadBox {
  margin-left: 20%;
  margin-top: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  height: 260px;
  position: relative;
}
.downloadLinkBox {
  display: flex;
  align-items: center;
}
.androidBox,
.iosBox {
  width: 150px;
  height: 60px;
  background: #fff;
  margin-right: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  cursor: pointer;
}
.iosCodeBox {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150px;
  height: 150px;
  z-index: 1;
  background: #fff;
  margin-right: 30px;
}
.androidCodeBox {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 150px;
  height: 150px;
  z-index: 1;
  background: #fff;
  margin-right: 30px;
}
</style>