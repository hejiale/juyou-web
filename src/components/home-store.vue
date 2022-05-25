<template>
  <div class="content">
    <div class="inputPhoneBox">
      <el-input placeholder="请输入您的手机号码" v-model="telPhone"></el-input>
      <div class="inputSure" @click="getUserId">确认</div>
    </div>
    <span v-if="userName" style="color:#5ec9c7;">查询到用户：{{userName}}</span>
    <div class="productsBox">
      <div
        v-for="(it, index) in 2"
        :key="index"
        class="productItem"
        :style="index === 0 ? 'margin-right:200px;' : ''"
      >
        <img
          src="../assets/product.png"
          alt=""
          class="productImg"
          mode="aspectFill"
        />
        <span class="productTitle">天津雪人剧制悦游谷体验券</span>
        <span class="productPrice"
          >¥<span class="productPriceValue">168</span
          ><span class="productPriceNum">/位</span></span
        >
        <div class="productBuy" @click="onBuy">购买</div>
      </div>
    </div>
    <div class="code-pop" v-if="showPayCode" @click="showPayCode = false">
      <div class="code-content">
        <div ref="qrcode" class="codeImg"></div>
        <span class="codeTitle">请使用支付宝扫码支付</span>
      </div>
    </div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
import { Loading } from "element-ui";
export default {
  components: {},
  data() {
    return {
      lastIp: "",
      showPayCode: false,
      telPhone: "",
      userId: "",
      userName: null
    };
  },
  mounted() {
    this.lastIp = sessionStorage.getItem("ip");
  },
  methods: {
    async getUserId() {
      if (!this.telPhone.length) {
        this.$message.error("请输入手机号!");
        return;
      }
      let res = await this.$api.userGetUserByPhone({
        phone: this.telPhone,
      });
      if (res.id) {
        this.userId = res.id;
        this.userName = res.nickName;
      } else {
        this.$message.error("未查询到用户信息!");
      }
    },
    async onBuy() {
      if (!this.telPhone.length) {
        this.$message.error("请输入手机号!");
        return;
      }
      let loadingInstance = Loading.service({ fullscreen: true });
      
      let res = await this.$api.payBuyProductWithHome({
        userId: this.userId,
        money: 168,
        userIp: this.lastIp,
        productStatus: "XUE_CODE",
      });
      this.showPayCode = true;
      loadingInstance.close();

      if (res.aliH5PayUrl) {
        this.$nextTick(() => {
          this.creatQrCode(res.aliH5PayUrl);
        });
      }
    },
    creatQrCode(url) {
      this.qrcode = new QRCode(this.$refs.qrcode, {
        width: 150, // 二维码宽度
        height: 150, // 二维码高度
        text: url,
        background: "#ffffff", // 二维码的后景色
        foreground: "#000000", // 二维码的前景色
        correctLevel: QRCode.CorrectLevel.H,
      });
    },
  },
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
.code-pop {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.code-content{
  width: 300px;
  height: 300px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
}
.codeImg {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.codeTitle {
  margin-top: 30px;
}
</style>