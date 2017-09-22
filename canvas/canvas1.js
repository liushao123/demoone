/*
属性：
	线宽、端点、边数、角、橡皮尺寸、width、height、history、ctx画图环境 
方法：
	画线、画虚线、铅笔、多边形、圆、矩形、多角形
	橡皮、裁切、文字
	新建、保存
 */
window.onload=function(){
	let body=document.querySelector('body');
	let mask=document.querySelector('.mask')
	let li=document.querySelectorAll('.left-gongju>li');
	let lis=document.querySelectorAll('.top-anniu>li');
	let canvas=document.querySelector('canvas');
	let eraser=document.querySelector('.eraser');
	let btn=document.querySelector('.btn');
	let line=document.querySelector('.line');
	let fillColor=document.querySelector('#fillcolor');
	let strokeColor=document.querySelector('#strokecolor');
	let clip=document.querySelector('.clip');
	let save=document.querySelector('.icon-tubiaozhizuomoban');
	let hb=new palette(canvas,mask);
	li[0].onclick=function(){
		hb.line();
	}
	li[1].onclick=function(){
		hb.xline();
	}
	li[2].onclick=function(){
		hb.pencil();
	}
	li[3].onclick=function(){
		hb.rectangle();
	}
	li[4].onclick=function(){
		hb.clip(clip);
	}
	li[5].onclick=function(){
		hb.fivexing();
	}
	li[6].onclick=function(){
		hb.font();
	}
	li[7].onclick=function(){
		hb.eraser(eraser,30,30);
	}
	li[8].onclick=function(){
		let num=prompt('请输入边数',4);
		hb.poly(num);
	}
	li[11].onclick=function(){
		hb.circle();
	}
	li[12].onclick=function(){
		let jiao=prompt('请输入角数',5);
		hb.polyJ(jiao);
	}
	lis[2].onclick=function(){
		hb.cancle();
	}
	document.onkeydown=function(e){
		hb.keydown(e);
	}
	let flag=true;
	line.onclick=function(){
		if (flag) {
			flag=false;
			hb.ctx.setLineDash([10,10]);
			this.innerText='虚';
		}else{
			hb.ctx.setLineDash([0,0]);
			this.innerText='实';
			flag=true;
		}	
	}
	btn.onclick=function(){
		if (flag) {
			flag=false;
			hb.style='fill';
			this.innerText='填充';
		}else{
			hb.style='stroke';
			this.innerText='描边';
			flag=true;
		}
	}
	fillColor.onchange=function(){
		hb.fillStyle=this.value;
	}
	strokeColor.onchange=function(){
		hb.strokeStyle=this.value;
	}
	save.onclick=function(){
		save.href=canvas.toDataURL('image/png');
		save.download='a.png';
	}

}