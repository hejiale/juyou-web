<template>
  <div class="container">
    <img
      src="../assets/backgournd2.jpg"
      class="imageStyle"
      mode="aspectFill"
      v-if="type === 0"
    >
    <img
      src="../assets/backgournd3.jpg"
      class="imageStyle"
      mode="aspectFill"
      v-if="type === 1"
    >
    <img
      src="../assets/backgournd4.jpg"
      class="imageStyle"
      mode="aspectFill"
      v-if="type === 2"
    >
    <div class="bottom">
      <div style="width: 80%; font-size: 15px; text-align: center">
        <p>
          <span @click="changeImage(0)" class="canClick">首页</span>
          <span @click="changeImage(1)" class="canClick">联系我们</span>
          <span @click="changeImage(2)" class="canClick">关于我们</span>
          <span style="color: #d98c32"
            >主办单位：©剧游宇宙（苏州）文化科技发展有限公司<a
              href="https://beian.miit.gov.cn/"
              style="text-decoration: none; color: #d98c32"
              >网站备案号：苏ICP备2021048789号-1</a
            ></span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 0,
    };
  },
  async created(){
    await this.$api.roleQueryRolePage({
        "pageNo": 1 /*当前页码*/,
        "pageSize": 1 /*分页大小*/
    })
  },
  methods: {
    changeImage(type) {
      this.type = type;
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  width: 100%;
}
.canClick {
  cursor: pointer;
  margin-right: 20px;
}
.imageStyle {
  width: 100%;
  margin-bottom: 50px;
}
.bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}
</style>