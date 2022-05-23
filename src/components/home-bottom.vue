<template>
  <div class="bottom">
    <div class="bottomBox">
      <span style="margin-bottom: 20px;color: #fff;">本公司社交产品适合18岁以上用户</span>
      <div class="bottomMethods">
        <a class="bottomMethodsSpan" href="https://www.juyyds.com/user-agm/"
          >《用户注册协议》</a
        >
        <div class="bottomSpace"></div>
        <a class="bottomMethodsSpan" href="https://www.juyyds.com/privacy-agm/"
          >《隐私协议》</a
        >
      </div>
      <span style="margin-bottom: 20px;color: #fff;"
        >地址：江苏省苏州市工业园区国际科技园四期研发楼21楼</span
      >
      <span
        style="color: #fff;">版权所有：©剧游（苏州）文化科技发展有限公司<span
          style="margin-left: 20px;color: #fff;"
          >网站备案号：</span
        ><a href="https://beian.miit.gov.cn/" class="beianText"
          >苏ICP备2021048789号-1</a
        ></span
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.bottom {
  background: #000;
  display: flex;
  z-index: 2;
  align-items: center;
  justify-content: center;
}
.bottomBox {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  font-size: 12px;
  text-align: center;
  padding: 30px 0;
}
.bottomMethods {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottomMethodsSpan {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
}
.bottomSpace {
  width: 2px;
  height: 16px;
  margin: 0 30px;
  background: #fff;
}
.beianText {
  text-decoration: none;
  color: #5EC9C7;
}
</style>