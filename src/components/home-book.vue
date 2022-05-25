<template>
  <div class="content">
    <span class="title">商户入驻</span>
    <div class="inputBox">
      <span class="inputTitle"><span class="tag">*</span>店铺名称：</span>
      <el-input class="input" v-model="name"></el-input>
    </div>
    <div class="inputBox">
      <span class="inputTitle"><span class="tag">*</span>店铺LOGO：</span>
      <el-upload
        accept="image/png,image/jpg,image/jpeg"
        class="avatar-uploader"
        :action="$config.uploadUrl()"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        ref="poster-cover"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="inputBox">
      <span class="inputTitle"><span class="tag">*</span>联系电话：</span>
      <el-input class="input" v-model="phone"></el-input>
    </div>
    <div class="inputBox">
      <span class="inputTitle"><span class="tag">*</span>联系人：</span>
      <el-input class="input" v-model="username"></el-input>
    </div>
    <div class="submitBox" @click="onSubmit">提交</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: "",
      name: '',
      phone: '',
      username:''
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res.data.fileUrl)
    },
    onSubmit(){
      if(!this.name.length || !this.phone.length || !this.username.length || !this.imageUrl.length){
        this.$message.error("请填写必填项内容")
        return;
      }
      this.$message.success("已受理您的入驻请求，平台将于三个工作日内审核并与您联系!");
    }
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
.tag{
  width: 2px;
  height: 2px;
  color: red;
}
</style>