<template>
  <div class="content">
    <div class="inputPhoneBox">
      <el-input placeholder="请输入您的手机号码"></el-input>
      <div class="inputSure">确认</div>
    </div>
    <div class="productsBox">
      <div
        v-for="(it, index) in products"
        :key="it"
        class="productItem"
        :style="index === 0 ? 'margin-right:200px;' : ''"
      >
        <img src="../assets/product.png" alt="" class="productImg" mode="aspectFill"/>
        <span class="productTitle">天津雪人剧制悦游谷体验券</span>
        <span class="productPrice"
          >¥<span class="productPriceValue">168</span
          ><span class="productPriceNum">/位</span></span
        >
        <div class="productBuy">购买</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: ["", ""],
      lastIp: ""
    };
  },
  mounted(){
      this.lastIp = sessionStorage.getItem('ip')
  },
  methods: {
  }
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  align-items: center;
}
.inputPhoneBox {
  margin: 50px 30px;
  display: flex;
  align-items: center;
}
.inputPhoneTitle {
  font-size: 16px;
}
.el-input {
  margin-left: 30px;
  width: 300px;
}
.inputSure {
  margin-left: 20px;
  width: 80px;
  height: 40px;
  background: #5ec9c7;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.productsBox {
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.productItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.productImg {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background: lightgray;
}
.productTitle {
  font-size: 16px;
  margin-top: 40px;
  font-weight: 600;
  margin-bottom: 16px;
}
.productPrice {
  font-size: 12px;
  font-family: DINAlternate-Bold, DINAlternate;
  font-weight: bold;
  color: #5ec9c7;
  text-shadow: 0px 0px 10px rgba(51, 51, 51, 0.05);
}
.productPriceValue {
  font-size: 22px;
  font-family: DINAlternate-Bold, DINAlternate;
  font-weight: bold;
  color: #5ec9c7;
  line-height: 22px;
  text-shadow: 0px 0px 10px rgba(51, 51, 51, 0.05);
}
.productPriceNum {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #5ec9c7;
  line-height: 14px;
  text-shadow: 0px 0px 10px rgba(51, 51, 51, 0.05);
}
.productBuy {
  margin-top: 37px;
  width: 80px;
  height: 32px;
  background: #5ec9c7;
  box-shadow: 0px 0px 10px 0px rgba(51, 51, 51, 0.05);
  border-radius: 2px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>