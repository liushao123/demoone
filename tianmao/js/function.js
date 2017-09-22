/*
* @Author: Administrator
* @Date:   2017-08-14 09:27:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-15 18:04:29
*/

'use strict';
/*

获取元素后返回
添加window.onload
$(select)
参数
select[,ranger]	字符串-->选择器  #son  div  .box
              					id    tag   class
      		    函数-->window.onload

1、首字符
	#--->document.getElementsById
	.--->document.getElementsByClassName
	--->document.getElementsByTagName
2、return


正则 以^开头,以$结束
/^[a-zA-Z][a-zA-Z1-6]{0,8}$/
方法/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)//验证selector是否满足前面的规则

判断是否为某个特定对象instanceof

判断数据类型typeof
*/
function $(select,range=document){
	if (typeof select=='function') {
		window.onload=function(){
			select();
		}
	}else if(typeof select=='string'){
		let selector=select.trim();
		let firstChar=selector.charAt(0);
		if (firstChar=='#') {
			return document.getElementById(selector.substr(1));	
		}else if(firstChar=='.'){
			return range.getElementsByClassName(selector.substr(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
			return range.getElementsByTagName(selector);
		}
	}

	
}
//html
//获取或设置元素的内容
function html(element,content){
	if(arguments.length==2){
		element.innerHTML=content;
	}else if(arguments.length==1){
		return element.innerHTML;
	}
}

//text
//获取或设置元素的内容
function text(element,content){
	if(arguments.length==2){
		element.innerText=content;
	}else if(arguments.length==1){
		return element.innerText;
	}
}

//设置样式
//css(element, attrObj)
function css(element,attrObj){
	for(let i in attrObj){
		console.log(i,attrObj[i]);
		element.style[i]=attrObj[i];//for in中i为字符串
	}
}


//on添加事件
//on(collection,type,fn)
function on(collection,type,fn){
	for(let i=0;i<collection.length;i++){
		collection[i][type]=fn;
	}
}

//off删除事件
//off(collection,type)
function off(collection,type){
	for(let i=0;i<collection.length;i++){
		collection[i][type]=null;
	}
}


//动画
function animate1(element,attr,end,speed){
	let t=setInterval(function(){
		let start=parseInt(getComputedStyle(element,null)[attr]);
		if (start>=end) {
			clearInterval(t);
		}
		element.style[attr]=`${start+speed}px`;
	}
	, 60)
}


function animate(element,attrObj,speed,fn){
	let t=setInterval(function(){
		for(let i in attrObj){
			let start=parseInt(getComputedStyle(element,null)[i]);
			if (start>=attrObj[i]) {
				clearInterval(t);
				if (fn) {
					fn.call(element);//冒充法，this由window指向element
					// fn.apply(element);
				}
			}
			element.style[i]=`${start+speed}px`;
		}
	}, 60);
}



/*
insertAfter()
指定元素后面插入
等价于
指定元素的下一个元素节点的后面插入
nextElementSilbing 

后面有元素 insertBefore()
后面没有元素  appendChild


 */

function insertAfter(insert,position){
	let next=position.nextElementSilbing;
	let parent=position.parentNode;
	if (next) {
		parent.insertBefore(insert,next);
	}else{
		parent.appendChild(insert);
	}
}

//html原型对象中添加方法，即可直接调用
//指定元素后面插入
HTMLElement.prototype.insertAfter=function(insert){
	let next=this.nextElementSilbing;//this为当前位置
	let parent=this.parentNode;
	if (next) {
		parent.insertBefore(insert,next);
	}else{
		parent.appendChild(insert);
	}
}
//最前面插入元素
HTMLElement.prototype.prependChild=function(insert){
	let first=this.firstElementChild;
	if (first) {
		this.insertBefore(insert,first);
	}else{
		this.appendChild(insert);
	}
}


//
HTMLElement.prototype.prependTo=function(parent){
	parent.prependChild(this);
}


HTMLElement.prototype.appendTo=function(parent){
	parent.appendChild(this);
}