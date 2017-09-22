/*
* @Author: Administrator
* @Date:   2017-08-10 22:27:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-12 15:32:04
*/
$(function(){
//轮播侧导航
	$(".liebiao>li").mouseenter(function(){
		$(".item").css("display","none");
		$(this).find(".item").css("display","block");
	})
	$(".liebiao").mouseleave(function() {
		$(".item").css("display","none");
	});

//导航下拉
	$(".daohang1").mouseenter(function(){
		$(".xiala").css("display","none");
		$(this).find(".xiala").css("display","block");
	})
	$(".daohang1").mouseleave(function() {
		$(".xiala").css("display","none");
	});
//自动轮播
	let num=0;
	t=setInterval(fn,3000);
	$("main").mouseenter(function(){
		clearInterval(t);
	})
	$("main").mouseleave(function() {
		t=setInterval(fn,3000);
	});
	function fn(){
		num++;
		if (num==$(".photo>li").length) {
		num=0;
		}	
		$(".photo>li").css({"display":"none"});
		$(".photo>li").eq(num).css({"display":"block"});		
	}
//按钮轮播
$(".waibu1").click(fn1);
$(".waibu2").click(fn);
function fn1(){
		num--;
		if (num<0) {
			num=$(".photo>li").length-1
		}	
		$(".photo>li").css({"display":"none"});
		$(".photo>li").eq(num).css({"display":"block"});
}
//轮播点轮播
	$(".he>li").click(function(){
		let i=$(this).index();
		if(i==num){
			return;
		}
		$(".photo>li").hide();
		$(".photo>li").eq(i).show();
		$(".he>li").css({"background":"#000"});
		$(".he>li").eq(i).css({"background":"#fff"});
		num=i;	
	})	
})
// window.onload=function(){
// 	//搜索
// 	let naviright1=document.getElementsByClassName('navi-right1');
// 	let click=document.getElementsByClassName('click');
// 	let naviright2=document.getElementsByClassName('navi-right2');
// 	let navi1=document.getElementsByClassName('navi1');
// 	let navi2=document.getElementsByClassName('navi2');
// 	naviright1[0].onclick=function(){
// 		click[0].style.display='block';
// 		naviright1[0].style.borderTop='1px solid #ff6700';
// 		naviright1[0].style.borderBottom='1px solid #ff6700';
// 		naviright1[0].style.borderLeft='1px solid #ff6700';
// 		naviright2[0].style.border='1px solid #ff6700';
// 		navi1[0].style.display='none';
// 		navi2[0].style.display='none';
// 	}
// 	naviright2[0].onclick=function(){
// 		click[0].style.display='none';
// 		navi1[0].style.display='block';
// 		navi2[0].style.display='block';
// 		naviright1[0].style.borderTop='1px solid #e0e0e0';
// 		naviright1[0].style.borderBottom='1px solid #e0e0e0';
// 		naviright1[0].style.borderLeft='1px solid #e0e0e0';
// 		naviright2[0].style.border='1px solid #e0e0e0';
// 	}

// 	//购物车
// 	let headright2=document.getElementsByClassName('head-right2');
// 	let gouwuche=document.getElementsByClassName('gouwuche');
// 	headright2[0].onmouseenter=function(){
// 		gouwuche[0].style.display='block';
// 	}
// 	headright2[0].onmouseleave=function(){
// 		gouwuche[0].style.display='none';
// 	}
// 	//单品
// 	let star=$('.star')[0];
// 	let main1=$('main',star)[0];
// 	let xiaokuan2=$('.xiaokuan2')[0];
// 	let xiaokuan3=$('.xiaokuan3')[0];
// 	let star4=$('.star4')[0];
// 	let number=0;
// 	let childNum=star4.childElementCount;
// 	let child=star4.children[0];
// 	let childWidth=child.offsetWidth+parseInt(getComputedStyle(child,null).marginRight);
// 	star4.style.width=`${childNum*childWidth}px`;
// 	let t1;
// 	t1=setInterval(move,6000);
// 	function move(){
// 		number++;
// 		if(number==2){
// 			number=0;
// 		}
// 		if (number==1) {
// 			xiaokuan3.style.color='#e0e0e0';
// 			xiaokuan2.style.color='#BEB3B0';
// 			star4.style.marginLeft=`${-1240*number}px`;
// 		}
// 		if (number==0) {
// 			xiaokuan3.style.color='#BEB3B0';
// 			xiaokuan2.style.color='#e0e0e0';
// 			star4.style.marginLeft=`${-1240*number}px`;
// 		}
// 	}
// 	main1.onmouseenter=function(){
// 		clearInterval(t1);
// 	}
// 	main1.onmouseleave=function(){
// 		t1=setInterval(move,6000);
// 	}
// 	xiaokuan2.onclick=function(){
// 		xiaokuan2.style.color='#e0e0e0';
// 		if(number==0){
// 			return;
// 		}
// 		xiaokuan3.style.color='#BEB3B0';
// 		number--;
// 		star4.style.marginLeft=`${-1240*number}px`;
// 	}
// 	xiaokuan3.onclick=function(){
// 		xiaokuan3.style.color='#e0e0e0';
// 		if(number==1){
// 			return;
// 		}
// 		xiaokuan2.style.color='#BEB3B0';
// 		number++;
// 		star4.style.marginLeft=`${-1240*number}px`;
// 	}
// 	xiaokuan2.onmouseenter=function(){
// 		if(number==0){
// 			return;
// 		}
// 		xiaokuan2.style.color='#ff6700';
// 	}
// 	xiaokuan2.onmouseleave=function(){
// 		if(number==0){
// 			xiaokuan2.style.color='#e0e0e0';
// 		}
// 		if (number==1) {
// 			xiaokuan2.style.color='#BEB3B0';
// 		}

// 	}
// 	xiaokuan3.onmouseenter=function(){
// 		if(number==1){
// 			return;
// 		}
// 		xiaokuan3.style.color='#ff6700';
// 	}
// 	xiaokuan3.onmouseleave=function(){
// 		if(number==1){
// 			xiaokuan3.style.color='#e0e0e0';
// 		}
// 		if (number==0) {
// 			xiaokuan3.style.color='#BEB3B0';
// 		}

// 	}


// 	//推荐
// 	let xiaokuan4=$('.xiaokuan2')[1];
// 	let xiaokuan5=$('.xiaokuan3')[1];
// 	let star5=$('.star4')[1];
// 	let number1=0;
// 	let childNum1=star5.childElementCount;
// 	let child1=star5.children[0];
// 	let childWidth1=child1.offsetWidth+parseInt(getComputedStyle(child1,null).marginRight);
// 	star5.style.width=`${childNum1*childWidth1}px`;
// 	xiaokuan4.onclick=function(){
// 		if(number1==0){
// 			return;
// 		}
// 		xiaokuan5.style.color='#BEB3B0';
// 		if (number1==1) {
// 			xiaokuan4.style.color='#e0e0e0';
// 		}
// 		number1--;
// 		star5.style.marginLeft=`${-1240*number1}px`;
// 	}
// 	xiaokuan5.onclick=function(){
// 		if(number1==3){
// 			return;
// 		}
// 		xiaokuan4.style.color='#BEB3B0';
// 		if (number1==2) {
// 			xiaokuan5.style.color='#e0e0e0';
// 		}
// 		number1++;
// 		star5.style.marginLeft=`${-1240*number1}px`;
// 	}
// 	xiaokuan4.onmouseenter=function(){
// 		if(number1==0){
// 			return;
// 		}
// 		xiaokuan4.style.color='#ff6700';
// 	}
// 	xiaokuan4.onmouseleave=function(){
// 		if(number1==0){
// 			xiaokuan4.style.color='#e0e0e0';
// 		}
// 		if (number1<3&&number1>0) {
// 			xiaokuan4.style.color='#BEB3B0';
// 		}

// 	}
// 	xiaokuan5.onmouseenter=function(){
// 		if(number1==3){
// 			return;
// 		}
// 		xiaokuan5.style.color='#ff6700';
// 	}
// 	xiaokuan5.onmouseleave=function(){
// 		if(number1==3){
// 			xiaokuan5.style.color='#e0e0e0';
// 		}
// 		if (number1<3) {
// 			xiaokuan5.style.color='#BEB3B0';
// 		}

// 	}


// 	// 搭配
// 	let remen=document.querySelectorAll('.remen');
// 	let bottom=document.querySelectorAll('.bottom');
// 	let bottom1=[];
// 	let block=$('.block');
// 	let none=$('.none');
// 	for(let i=1;i<bottom.length;i++){
// 		bottom1.push(bottom[i]);
// 	}	
// 	remen.forEach((element,index)=>{
// 		let lili=$('li',element);
// 		var bigbox1=$('.big-box1',bottom1[index]);
// 		let a=$('a',element);
// 		for(let i=0;i<lili.length;i++){
// 			lili[i].onmouseenter=function(){
// 				for(let j=0;j<lili.length;j++){
// 					bigbox1[j].classList.remove('block');
// 					bigbox1[j].classList.add('none');
// 					a[j].style.color='#424242';
// 					a[j].style.borderBottom='none';
// 				}
// 				bigbox1[i].classList.remove('none');
// 				bigbox1[i].classList.add('block');
// 				a[i].style.color='#ff6700';
// 				a[i].style.borderBottom='2px solid #ff6700';
				
// 			}
// 		}
// 	})
	
// 	//内容
// 	//轮播点
// 	let neirong2=document.querySelectorAll('.neirong2');
// 	let lunbodian=document.querySelectorAll('.lunbodian');
// 	let neirong5=$('.neirong5');
// 	let neirong6=$('.neirong6');
// 	lunbodian.forEach((element,index)=>{
// 		let lunbodian1=lunbodian[index].getElementsByTagName('li')
// 		let moveto=neirong2[index].querySelectorAll('.move');
// 		for(let i=0;i<lunbodian1.length;i++){
// 			lunbodian1[i].onclick=function(){
// 				for(let j=0;j<lunbodian1.length;j++){
// 					moveto[j].style.display='none';
// 					lunbodian1[j].style.background='#b0b0b0';
// 					lunbodian1[j].style.border='2px solid rgba(0,0,0,0)';
// 				}
// 			moveto[i].style.display='block';
// 			lunbodian1[i].style.background='white';
// 			lunbodian1[i].style.border='2px solid #ff6700';
// 			}
// 		}
// 		//左右箭头
		
// 		let num1=0;
// 		neirong5[index].onclick=function(){
// 			num1--;
// 			if (num1<0) {
// 				num1++;
// 				return;
// 			}
// 			for(let i=0;i<lunbodian1.length;i++){
// 				moveto[i].style.display='none';
// 				lunbodian1[i].style.background='#b0b0b0';
// 				lunbodian1[i].style.border='2px solid rgba(0,0,0,0)';
// 			}
// 			moveto[num1].style.display='block';
// 			lunbodian1[num1].style.background='white';
// 			lunbodian1[num1].style.border='2px solid #ff6700';
// 		};
// 		neirong6[index].onclick=function(){
// 			num1++;
// 			if (num1>lunbodian1.length-1) {
// 				num1--;
// 				return;
// 			}
// 			for(let i=0;i<lunbodian1.length;i++){
// 				moveto[i].style.display='none';
// 				lunbodian1[i].style.background='#b0b0b0';
// 				lunbodian1[i].style.border='2px solid rgba(0,0,0,0)';
// 			}
// 			moveto[num1].style.display='block';
// 			lunbodian1[num1].style.background='white';
// 			lunbodian1[num1].style.border='2px solid #ff6700';
// 		};
		
			
// 	})
// }
