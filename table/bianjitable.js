/*
* @Author: Administrator
* @Date:   2017-08-22 15:03:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-24 18:50:42
*/
/*
	增
	添加一行 tr

 */
window.onload=function(){
	let add=document.querySelector('.add');//获取添加按钮
	let tbody=document.querySelector('tbody');//获取tbody文档
	let student=[
	{'name':'张三','sex':'女','phone':'123456','jiguan':'山西省吕梁市','play':'篮球','email':'147258@qq.com','del':'删除'},
	{'name':'李四','sex':'男','phone':'123654','jiguan':'山西省孝义市','play':'篮球','email':'147258@qq.com','del':'删除'},
	{'name':'王五','sex':'女','phone':'123546','jiguan':'山西省太原市','play':'篮球','email':'147258@qq.com','del':'删除'}
	]
	localStorage.student=JSON.stringify(student);
	let data=JSON.parse(localStorage.student);
	data.forEach(value=>{
		tbody.innerHTML+=`
		<tr>
			<td>${value.name}</td>
			<td>${value.sex}</td>
			<td>${value.phone}</td>
			<td>${value.jiguan}</td>
			<td>${value.play}</td>
			<td>${value.email}</td>
			<td class="Del"><button class="btnDel">${value.del}</button></td>
		</tr>`;
});

	add.onclick=function(){//鼠标点击添加按钮事件
		let tr=document.createElement('tr');//获取行元素,行内样式
		tr.innerHTML=`
			<td>李文</td>
			<td>女</td>
			<td>123456</td>
			<td>山西省吕梁市</td>
			<td>篮球</td>
			<td>147258@qq.com</td>
			<td class="Del"><button class="btnDel">删除</button></td>
		`;
		tbody.appendChild(tr);

	}
	/*
	修改
		可编辑状态：当前单元格里面插入一个input
			1、input
			2、content->input
			3、当前单元格内容清空
			4、input->td
		更新：表单失去焦点 blur
			1、input内容保存
			2、input removeChild
			3、newvalue ->单元格
 */
 	tbody.ondblclick=function(e){
 		let ele=e.target;
 		if (ele.nodeName=='TD' && ele.className!='Del') {
 			let inputs=document.createElement('input');
 			let oldv=ele.innerText;
 			inputs.value=oldv
 			ele.innerText='';
 			ele.appendChild(inputs);
 			inputs.onblur=function(){
 				let newv=inputs.value;
 				ele.removeChild(inputs);
 				inputs=null;
 				ele.innerText=newv.trim();
 			}
 		}
 	}
 	tbody.onclick=function(e){
 		let ele=e.target;
 		if (ele.nodeName='BUTTON') {
 			let tr=ele.parentNode.parentNode;
 			tbody.removeChild(tr);
 			tr=null;
 		}
 	}
}
