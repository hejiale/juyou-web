<template>
  <div class="content">
    <span class="title">商户入驻</span>
    <div class="inputBox">
      <span class="inputTitle">店铺名称：</span>
      <el-input class="input"></el-input>
    </div>
    <div class="inputBox">
      <span class="inputTitle">店铺LOGO：</span>
      <el-upload
        accept="image/png,image/jpg,image/jpeg"
        class="avatar-uploader"
        :action="$config.uploadUrl()"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="inputBox">
      <span class="inputTitle">联系电话：</span>
      <el-input class="input"></el-input>
    </div>
    <div class="inputBox">
      <span class="inputTitle">联系人：</span>
      <el-input class="input"></el-input>
    </div>
    <div class="submitBox">提交</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res.data.fileUrl)
    },
    // beforeAvatarUpload(file) {
    //   const imgTypeArr = ["image/png", "image/jpg", "image/jpeg"];
    //   const allowImgType = imgTypeArr.includes(file.type);
    //   const isLt10M = file.size / 1024 / 1024 < 2;
    
    //   if (!allowImgType) {
    //     this.$message.error("只能上传png,jpg,jpeg格式的图片");
    //     return false;
    //   }
    //   if (!isLt10M) {
    //     this.$message.error("大小不能超过 2MB!");
    //     return false;
    //   }
    //   // jfif pjp pjpeg 格式会被校验为 image/jpeg
    //   let isjfif = file.name.slice(-5) === ".jfif";
    //   let ispjp = file.name.slice(-4) === ".pjp";
    //   let ispjpeg = file.name.slice(-6) === ".pjpeg";
    //   if (isjfif || ispjp || ispjpeg) {
    //     this.$message.error("只能上传png,jpg,jpeg格式的图片");
    //     return false;
    //   }
    // },
  },
};
</script>
<style scoped>
.content {
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 32px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 80px;
  color: #333333;
}
.inputBox {
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 400px;
}
.inputTitle {
  font-size: 16px;
  color: #909090;
  width: 130px;
}
.input {
  font-size: 16px;
  margin-left: 40px;
  border: unset;
  height: 40px;
}
.submitBox {
  margin-top: 50px;
  width: 320px;
  height: 48px;
  background: #5EC9C7;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.avatar-uploader{
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: #fff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>