/*
* @Author: Administrator
* @Date:   2017-08-13 17:13:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-20 20:29:36
*/

'use strict';
window.onload=function(){
	let img=document.getElementsByClassName('imgage')[0];
	let li=img.getElementsByClassName('img');
	// console.log(li);
	let he=document.getElementsByClassName('he')[0];
	let dian=he.getElementsByClassName('dian');
	// console.log(dian);
	let t;
	let num=0;
	t=setInterval(fn, 3000);
	for(let j=0;j<li.length;j++){
		li[j].onmouseenter=function(){
			clearInterval(t);
		}
		li[j].onmouseleave=function(){
			t=setInterval(fn, 3000);
		}
	}
	function fn(){
		num++;
		if(num==dian.length){
			num=0;
		}
		for(let i=0;i<li.length;i++){
			li[i].style.display='none';
			dian[i].style.background='#a2a2a2';
		}
		li[num].style.display='block';
		dian[num].style.background='#f1f1f1';
	}
	for(let i=0;i<dian.length;i++){
		dian[i].onmouseenter=function(){
			for(let j=0;j<li.length;j++){
				dian[j].style.background='#a2a2a2';
				li[j].style.display='none';
			}
			li[i].style.display='block';
			dian[i].style.background='#f1f1f1';
		}

	}
	// 侧导航
	let liebiao=document.getElementsByClassName('liebiao')[0];
	let lis=liebiao.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			item[i].style.display='block';
		}
		lis[i].onmouseleave=function(){
			item[i].style.display='none';
		}
	}
	//头部
	let taobao=$('.taobao')[0];
	let shoucan=$('.shoucan')[0];
	let shangjia=$('.shangjia')[0];
	let wangye=$('.wangye')[0];
	let xiala=$('.xiala')[0];
	let xiala1=$('.xiala1')[0];
	let xiala11=$('xiala11')[0];
	let xiala12=$('xiala12')[0];
	let headright1=$('.head-right1')[0];
	let headright4=$('.head-right4')[0];
	let headright5=$('.head-right5')[0];
	let xiala2=$('.xiala2')[0];
	let xiala3=$('.xiala3')[0];
	let xiala6=$('.xiala6')[0];
	let xiala7=$('.xiala7')[0];
	let xiala72=$('.xiala72')[0];
	let xiala721=$('li',xiala72);
	let xiala73=$('.xiala73')[0];
	let xiala731=$('li',xiala73);
	let xiala8=$('.xiala8')[0];
	let xiala9=$('.xiala9')[0];
	let headright3=$('.head-right3')[0];
	taobao.onmouseenter=function(){
		xiala.style.display='block';
		xiala1.style.display='block';
		headright1.style.color='#FF0136';
		headright1.style.borderBottom='1px solid #FF0136';
	}
	taobao.onmouseleave=function(){
		xiala.style.display='none';
		xiala1.style.display='none';
		headright1.style.color='#999999';
		headright1.style.borderBottom='none';
	}
	xiala.onmouseenter=function(){
		headright1.style.borderBottom='none';
	}
	xiala.onmouseleave=function(){
		headright1.style.borderBottom='1px solid #FF0136';
	}
	shoucan.onmouseenter=function(){
		xiala2.style.display='block';
		xiala3.style.display='block';
		headright4.style.color='#FF0136';
		headright4.style.borderBottom='1px solid #FF0136';
	}
	shoucan.onmouseleave=function(){
		xiala2.style.display='none';
		xiala3.style.display='none';
		headright4.style.color='#999999';
		headright4.style.borderBottom='none';
	}
	xiala3.onmouseenter=function(){
		headright4.style.borderBottom='none';
	}
	xiala3.onmouseleave=function(){
		headright4.style.borderBottom='1px solid #FF0136';
	}
	shangjia.onmouseenter=function(){
		xiala6.style.display='block';
		xiala7.style.display='block';
		headright5.style.color='#FF0136';
		headright5.style.borderBottom='1px solid #FF0136';
	}
	shangjia.onmouseleave=function(){
		xiala6.style.display='none';
		xiala7.style.display='none';
		headright5.style.color='#999999';
		headright5.style.borderBottom='none';
	}
	xiala7.onmouseenter=function(){
		headright5.style.borderBottom='none';
	}
	xiala7.onmouseleave=function(){
		headright5.style.borderBottom='1px solid #FF0136';
	}
	wangye.onmouseenter=function(){
		xiala8.style.display='block';
		xiala9.style.display='block';
		headright3.style.color='#FF0136';
	}
	wangye.onmouseleave=function(){
		xiala8.style.display='none';
		xiala9.style.display='none';
		headright3.style.color='#999999';
		headright3.style.borderBottom='none';
	}


}
//鼠标滚动事件
window.onscroll=function(){
	
	//浮出搜索
	let search=document.querySelector('.search');
	// console.log(search)
	let tops=document.body.scrollTop;
	// console.log(tops)
	let sFlag=true;
	if(tops >= 500){
		if(sFlag){
			sFlag=false;
			// animate(search,{top:0});
			search.style.top=0;
			// console.log(search.style.top);
		}
	}else{
		if(!sFlag){	
			// animate(search,{top:-50});
			sFlag=true;
			alert(1)

		}
		search.style.top= -50+'px';
	}


	//按需加载
	

}