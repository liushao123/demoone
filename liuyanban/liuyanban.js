/*
* @Author: Administrator
* @Date:   2017-08-21 17:39:06
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-22 09:17:01
*/
window.onload=function(){
	let textarea=document.querySelector('textarea');//获取留言框内容
	let tips=document.querySelector('.tips');//获取120事件
	let max=textarea.maxLength;//留言框的最大长度
	let input=document.querySelector('.texta>input');//获取文本框内容
	let submit=document.querySelector('.submit'
	);//获取提交按钮
	textarea.onkeyup=function(){//键盘在留言框中弹起函数
		let str=textarea.value;//留言框中的元素设置为变量str
		tips.innerText=`${max-str.length}`//tips数值的变化
	}
	textarea.onkeydown=function(e){//键盘在留言框中按下函数
		if(e.keyCode==13){//如果按下shift键和enter键
			// textarea.innerText='';//留言框内容元素为空
			let content=document.querySelector('.content');//获取留言板
			// console.log(content)
			let lis=document.createElement('li');//创建li元素子节点
			lis.innerHTML=`
				<img src="9 (2).png" alt="">
				<div class="item">
					<h3>${input.value}</h3>
					<p>${textarea.value}</p>
				</div>`;
			content.prependChild(lis);//留言板添加li元素子节点
			input.value='';//文本框内容元素为空
			textarea.value='';//留言框内容元素为空
		}
	}
	submit.onclick=function(){

			let content=document.querySelector('.content');
			console.log(content)
			let lis=document.createElement('li');
			lis.style.backgroundColor=`${rgb()}`;
			lis.innerHTML=`
				<img src="9 (2).png" alt="">
				<div class="item">
					<h3>${input.value}</h3>
					<p>${textarea.value}</p>
				</div>`;
			content.prependChild(lis);
			input.value='';
			textarea.value='';
	}
}
function rgb(){
			let r=Math.floor(Math.random()*255);
			let g=Math.floor(Math.random()*255);
			let b=Math.floor(Math.random()*255);
			return `rgb(${r},${g},${b})`;
	}