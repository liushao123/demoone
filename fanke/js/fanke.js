/*
* @Author: Administrator
* @Date:   2017-08-13 19:59:25
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-18 12:11:07
*/

'use strict';
window.onload=function(){
	let banner=document.getElementsByClassName('banner')[0];
	let banner1=document.getElementsByClassName('banner1')[0];
	let banner2=document.getElementsByClassName('banner2')[0];
	let banner3=banner2.getElementsByClassName('banner3');
	let he=document.getElementsByClassName('he')[0];
	let dian=he.getElementsByClassName('dian');
	let bandao=document.getElementsByClassName('bandao');
	let t;
	let num=0;
	t=setInterval(fn,3000);
	bandao[0].onmouseenter=function(){
		clearInterval(t);
	}
	bandao[0].onmouseleave=function(){
		t=setInterval(fn,3000);
	}
	function fn(){
		num++;
		if(num==dian.length){
			num=0;
		}
		for(let i=0;i<banner3.length;i++){
			banner3[i].style.display='none';
			dian[i].style.background='#fff';
		}
		banner3[num].style.display='block';
		dian[num].style.background='#a10000';
	}
	for(let i=0;i<dian.length;i++){
		dian[i].onmouseenter=function(){
			for(let j=0;j<dian.length;j++){
				dian[j].style.background='#fff';
				banner3[j].style.display='none';
			}
			dian[i].style.background='#a10000';
			banner3[i].style.display='block';
		}
	}
	//左右箭头
	banner1.onclick=fn;
	banner.onclick=function(){
		num--;
		if(num==-1){
			num=dian.length-1;
		}
		for(let i=0;i<banner3.length;i++){
			banner3[i].style.display='none';
			dian[i].style.background='#fff';
		}
		banner3[num].style.display='block';
		dian[num].style.background='#a10000';
	}

	//微信
	let wei=document.getElementsByClassName('wei')[0];
	let erweima=document.getElementsByClassName('erweima')[0];
	wei.onmouseenter=function(){
		erweima.style.display='block';
	}
	wei.onmouseleave=function(){
		erweima.style.display='none';
	}


	//搜索
	let text=$('.text')[0];
	let search=$('.search')[0];
	let span=$('span',search)[0];
	let sousuo=$('.sousuo')[0];
	let you=$('.sousuo')[0];
	text.onmouseenter=function(){
		text.style.border='1px solid #338FFF';
		span.style.background='#3380FF';
	}
	text.onclick=function(){
		span.style.display='none';
	}


	//购物车
	let gouwuche=document.getElementsByClassName('gouwuche')[0];
	let gou1=document.getElementsByClassName('gou1')[0];
	let gou2=document.getElementsByClassName('gou2')[0];
	gouwuche.onmouseenter=function(){
		gouwuche.style.background='#fff';
		gou1.style.display='block';
		gou2.style.display='block';
	}
	gouwuche.onmouseleave=function(){
		gouwuche.style.background='#b71b1f';
		gou1.style.display='none';
		gou2.style.display='none';
	}

	//导航
	let xiala=document.querySelectorAll('.xiala');;
	let xiala2=document.querySelectorAll('.xiala2');
	let ul=document.querySelectorAll('.shouye')[0];
	let li=document.querySelectorAll('.shouye1');
	xiala.forEach(function(element,index){
		let childNum=xiala2[index].childElementCount;
		let child=xiala2[index].children[0];
		let childHeight=child.offsetHeight;
		li[index].onmouseenter=function(){
			xiala[index].style.height=`${childNum*childHeight+25}px`;
		}
		li[index].onmouseleave=function(){
			xiala[index].style.height=0;
		}
	})





	//回顶部
	let mm3=$('.mm3')[0];
	mm3.onclick=function(){
		document.body.scrollTop=0;
	}


}