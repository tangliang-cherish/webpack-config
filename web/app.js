import './css/common.css';
import Layer from './components/layer/layer.js';
const app = function(){
	const dom = document.getElementById("app");
	const layer = new Layer();
	dom.innerHTML = layer.tpl({
		name:"Tom",
		arr:['mi',"oppo"],
		user:"TY"
	})
}
new app()
