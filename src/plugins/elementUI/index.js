
// 里面的这些 MessageBox Dropdown 都是 element 组件库标签的驼峰写法
import { MessageBox, Message, Upload, Input } from 'element-ui';
 
const element = {
	install: function (Vue) {
        Vue.use(Upload);
        Vue.use(Input);
        // 下面是注册 element 的 动态组件重命名 到 原型中
		Vue.prototype.$msgbox = MessageBox;
		Vue.prototype.$alert = MessageBox.alert;
		Vue.prototype.$confirm = MessageBox.confirm;
		Vue.prototype.$message = Message;
	},
};
export default element;