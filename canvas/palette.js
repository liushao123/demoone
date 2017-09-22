/*
* @Author: Administrator
* @Date:   2017-08-29 08:59:16
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-31 23:01:14
*/
function palette(canvas,mask){
	this.canvas=canvas;
	this.mask=mask;
	this.ctx=this.canvas.getContext("2d");
	this.history=[];
	this.cw=this.canvas.width;
	this.ch=this.canvas.height;
	this.lineWidth=1;
	this.lineCap='butt';
	this.fillStyle='#000';
	this.strokeStyle='#000';
	this.style='stroke';
}
palette.prototype={
	init:function(){
		this.ctx.lineWidth=this.lineWidth;
		this.ctx.lineCap=this.lineCap;
		this.ctx.fillStyle=this.fillStyle;
		this.ctx.strokeStyle=this.strokeStyle;
		this.ctx.style=this.style;
		// this.ctx.setLineDash([0,0]);
},
//直线
line:function(){
	let that=this;
	this.mask.onmousedown=function(e){
		let ox=e.offsetX;
		let oy=e.offsetY;
		that.mask.onmousemove=function(e){
			let cx=e.offsetX;
			let cy=e.offsetY;	
			that.ctx.lineWidth=that.lineWidth;
			that.ctx.clearRect(0, 0, that.cw, that.ch);
		if (that.history.length>0) {
			that.ctx.putImageData(that.history[that.history.length-1],0,0);
		}
			that.init()
			that.ctx.beginPath();
			that.ctx.moveTo(ox,oy);
			that.ctx.lineTo(cx, cy);
			that.ctx.closePath();
			that.ctx[that.style]();
		}
		that.mask.onmouseup=function(){
			that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
			that.mask.onmousemove=null;
			that.mask.onmouseup=null;
		}
	}
},
//虚线
xline:function(){
	let that=this;
	this.mask.onmousedown=function(e){
		let ox=e.offsetX;
		let oy=e.offsetY;
		that.mask.onmousemove=function(e){
			let cx=e.offsetX;
			let cy=e.offsetY;
				
			that.ctx.lineWidth=that.lineWidth;
			that.ctx.clearRect(0, 0, that.cw, that.ch);
			if (that.history.length>0) {
			that.ctx.putImageData(that.history[that.history.length-1],0,0);
			}
			that.ctx.beginPath();
			that.ctx.moveTo(ox,oy);
			that.ctx.setLineDash([10,10]);
			that.ctx.lineTo(cx, cy);
			that.ctx.closePath();
			that.ctx.stroke();
		}
		that.mask.onmouseup=function(){
			that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
			that.mask.onmousemove=null;
			that.mask.onmouseup=null;
		}
	}
},
//椭圆
circle:function(){
	let that=this;
	this.mask.onmousedown=function(e){
		let ox=e.offsetX;
		let oy=e.offsetY;
		that.mask.onmousemove=function(e){
			let cx=e.offsetX;
			let cy=e.offsetY;
			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
			that.ctx.clearRect(0, 0, that.cw, that.ch);
			if (that.history.length>0) {
			that.ctx.putImageData(that.history[that.history.length-1],0,0);
		}
			that.init();
			that.ctx.beginPath();
			that.ctx.arc(ox, oy, r, 0, Math.PI*2, false);
			that.ctx.closePath();
			that.ctx[that.style]();
			}
		that.mask.onmouseup=function(){
			that.history.push(that.ctx.getImageData(0, 0, that.cw, that.ch));
			that.mask.onmousemove=null;
			that.mask.onmouseup=null;
		}
	}
},
//铅笔
pencil:function(){
	this.mask.onmousedown=function(e){
		let ox=e.offsetX;
		let oy=e.offsetY;
		this.ctx.beginPath();
		this.ctx.moveTo(ox,oy);
		
		this.mask.onmousemove=function(e){
			let cx=e.offsetX;
			let cy=e.offsetY;	
			if (this.history.length>0) {
		this.ctx.putImageData(this.history[this.history.length-1],0,0);
	}
			this.init();
			this.ctx.lineTo(cx, cy);
			this.ctx[this.style]();
		}.bind(this);

		this.mask.onmouseup=function(){
		this.history.push(this.ctx.getImageData(0, 0, this.cw, this.ch));
			this.mask.onmousemove=null;
			this.mask.onmouseup=null;
		}.bind(this);

	}.bind(this);
},
//矩形
rectangle:function(){
	let that=this;
	this.mask.onmousedown=function(e){
		let ox=e.offsetX;
		let oy=e.offsetY;
	that.mask.onmousemove=function(e){
		let cx=e.offsetX;
		let cy=e.offsetY;
		that.ctx.clearRect(0, 0, that.cw, that.ch);
		if(that.history.length){
				that.ctx.putImageData(that.history[that.history.length-1],0,0);
	}
		that.init();
		that.ctx.beginPath();
		that.ctx.moveTo(ox,oy);
		that.ctx.lineTo(cx,oy);
		that.ctx.lineTo(cx,cy);
		that.ctx.lineTo(ox,cy);
		that.ctx.closePath();
		that.ctx[that.style]();
	}
	that.mask.onmouseup=function(){
			that.history.push(that.ctx.getImageData(0, 0, that.cw, that.ch));
			that.mask.onmousemove=null;
			that.mask.onmouseup=null;
		}
	}
},
//多边形
poly:function(num){
	let that=this;
	this.mask.onmousedown=function(e){
		let ox=e.offsetX;
		let oy=e.offsetY;
		that.mask.onmousemove=function(e){
			let cx=e.offsetX;
			let cy=e.offsetY;
			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
			that.ctx.clearRect(0, 0, that.cw, that.ch);
			if(that.history.length){
				that.ctx.putImageData(that.history[that.history.length-1],0,0);
			}
			that.init();
			that.ctx.beginPath();
			that.ctx.setLineDash([]);
			let ang=360/num*Math.PI/180;
			that.ctx.moveTo(ox+r, oy);
			for(let i=1;i<num;i++){
				that.ctx.lineTo(ox+r*Math.cos(ang*i), oy+r*Math.sin(ang*i));
			}
			that.ctx.closePath();
			that.ctx[that.style]();
		}
		that.mask.onmouseup=function(){
			that.history.push(that.ctx.getImageData(0, 0, that.cw, that.ch));
			that.mask.onmousemove=null;
			that.mask.onmouseup=null;
		}
	}
},
//多角形
polyJ:function(jiao){
	let that=this;
	this.mask.onmousedown=function(e){
		let ox=e.offsetX;
		let oy=e.offsetY;
		that.mask.onmousemove=function(e){
			let cx=e.offsetX;
			let cy=e.offsetY;
			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
			let r1=r/2;
		that.ctx.clearRect(0, 0, that.cw, that.ch);
		if(that.history.length){
			that.ctx.putImageData(that.history[that.history.length-1],0,0);
		}
		that.init();
		that.ctx.beginPath();
		// that.ctx.setLineDash([]);
		let ang=360/(jiao*2)*Math.PI/180;
		that.ctx.moveTo(ox+r,oy);
		for (let i = 1; i < jiao*2; i++) {
			if (i%2) {
				that.ctx.lineTo(ox+r1*Math.cos(i*ang),oy+r1*Math.sin(i*ang))
			}else{
				that.ctx.lineTo(ox+r*Math.cos(i*ang),oy+r*Math.sin(i*ang))
			}
		}
		that.ctx.closePath();
		that.ctx[that.style]();
	}
	that.mask.onmouseup=function(){
		that.history.push(that.ctx.getImageData(0, 0, that.cw, that.ch));
		that.mask.onmousemove=null;
		that.mask.onmouseup=null;
		}
	}
},
//五角形
fivexing:function(){
	let that=this;
	this.mask.onmousedown=function(e){
		let ox=e.offsetX;
		let oy=e.offsetY;
		that.mask.onmousemove=function(e){
			let cx=e.offsetX;
			let cy=e.offsetY;
			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
			if (that.history.length>0) {
				that.ctx.putImageData(that.history[that.history.length-1],0,0);
			}
			floy(ox,oy,5,r);
		}
		that.mask.onmouseup=function(){
			that.history.push(that.ctx.getImageData(0, 0, that.cw, that.ch));
			that.mask.onmousemove=null;
			that.mask.onmouseup=null;
		}
	}
	function floy(x,y,num,r){
		let ang=360/num*2/180*Math.PI;
		that.ctx.beginPath();
		that.ctx.moveTo(x+r,y);
		for (let  i = 1; i < num; i++) {
			that.ctx.lineTo(x+r*Math.cos(ang*i), y+r*Math.sin(ang*i));

		}
		that.ctx.closePath();
		that.ctx[that.style]();
		// that.ctx.fill();
		// that.ctx.stroke();
	}
},
//点击撤销
cancle:function(){
	this.history.pop();
	if(this.history.length){
		this.ctx.putImageData(this.history[this.history.length-1],0,0);
	}else{
		this.ctx.clearRect(0,0,this.cw,this.ch);
	}
},
//按键撤销
keydown:function(e){
	if(e.ctrlKey&&e.keyCode==90){
		this.history.pop();
		if(this.history.length){
			this.ctx.putImageData(this.history[this.history.length-1],0,0);
		}else{
			this.ctx.clearRect(0,0,this.cw,this.ch);
		}
		
	}
},
//文字
font:function(){
	this.mask.onmousedown=function(e){
		let that=this;
		let ox=e.offsetX;
		let oy=e.offsetY;
		let divs=document.createElement('div');
		divs.style.cssText=`
			width:100px;
			height:50px;
			border:1px solid #faf;
			position:absolute;
			left:${ox}px;
			top:${oy}px;
		`;
		this.mask.onmousedown=null;
		divs.contentEditable=true;
		this.mask.appendChild(divs);
		let lefts;
		let tops;
		this.ctx.clearRect(0, 0, this.cw, this.ch);
		if (this.history.length) {
			this.ctx.putImageData(this.history[this.history.length-1],0,0);
		}
		divs.onmousedown=function(e){
			let ox=e.clientX;
			let oy=e.clientY;
			let ol=divs.offsetLeft,ot=divs.offsetTop;
			that.mask.onmousemove=function(e){
				let cx=e.clientX,cy=e.clientY;
				lefts=cx-ox+ol;
				tops=cy-oy+ot;
				if (lefts<0) {
					lefts=0;
				}
				if (lefts>that.cw-divs.offsetWidth) {
					lefts=that.cw-divs.offsetWidth;
				}
				if (tops<0) {
					tops=0;
				}
				if (tops>that.ch-divs.offsetHeight) {
					tops=that.ch-divs.offsetHeight;
				}
				divs.style.left=`${lefts}px`;
				divs.style.top=`${tops}px`;
			}
			divs.onmouseup=function(){
				that.mask.onmousemove=null;
				this.onmouseup=null;
			}
		}
		divs.onblur=function(){
			let value=this.innerText;
			that.mask.removeChild(divs);
			divs=null;
			that.ctx.font=`
				blod ${that.ctx.fontSize} sans-serif
			`;
			that.ctx.textAlign='center';
			that.ctx.textBaseLine='middle';
			that.ctx.fillText(value, lefts,tops,);
			that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
		}
	}.bind(this);
},
//裁切
clip:function(clipObj){
	let that=this;
	this.mask.onmousedown=function(e){
		let ox=e.offsetX,oy=e.offsetY;
		let minX,minY,w,h;
		that.mask.onmousemove=function(e){
			let cx=e.offsetX,cy=e.offsetY;
			w=Math.abs(cx-ox),h=Math.abs(cy-oy);
			//获取left top 起始点
			minX=cx>=ox?ox:cx;
			minY=cy>=oy?oy:cy;
			clipObj.style.display='block';
			clipObj.style.left=`${minX}px`;
			clipObj.style.top=`${minY}px`;
			clipObj.style.width=`${w}px`;
			clipObj.style.height=`${h}px`;
		}
		that.mask.onmouseup=function(){
			//获取裁切内容
			that.temp=that.ctx.getImageData(minX,minY,w,h);
			//清除裁切部位
			that.ctx.clearRect(minX,minY, w, h);
			//保存历史记录
			that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
			//将内容放回原位
			that.ctx.putImageData(that.temp,minX,minY);
			that.mask.onmousemove=null;
			that.mask.onmouseup=null;
			that.drag(minX,minY,w,h,clipObj);
		}
	}
},
drag:function(minX,minY,w,h,clipObj){
	let that=this;
	//鼠标移入clip范围内变移动
	this.mask.onmousemove=function(e){
		let ox=e.offsetX,oy=e.offsetY;
		if (ox>=minX&&ox<=minX+w&&oy>=minY&&oy<=minY+h) {
			that.mask.style.cursor='move';
		}else{
			that.mask.style.cursor='default';
		}
	}
//点击
this.mask.onmousedown=function(e){
	let ox=e.offsetX,oy=e.offsetY;
	//移动clip
	that.mask.onmousemove=function(e){
		let cx=e.offsetX,cy=e.offsetY;
		let lefts=minX+(cx-ox);
		let tops=minY+(cy-oy);
		if (lefts<0) {
			lefts=0;
		}
		if (lefts>that.cw-w) {
			lefts=that.cw-w;
		}
		if (tops<0) {
			tops=0;
		}
		if (tops>that.ch-h) {
			tops=that.ch-h;
		}
		//设置移动位置
		clipObj.style.left=`${lefts}px`;
		clipObj.style.top=`${tops}px`;
		//清除画布
		that.ctx.clearRect(0, 0, that.cw, that.ch);
		//将改变后画布保存
		if (that.history.length>0) {
			that.ctx.putImageData(that.history[that.history.length-1],0,0);
		}
		//判断temp 为空时return
		if (!that.temp) {
			return;
		}
		//将temp中的内容放在（lefts，tops）
		that.ctx.putImageData(that.temp,lefts,tops);
	}
	that.mask.onmouseup=function(){
		that.temp=null;
		clipObj.style.display='none';
		that.mask.style.cursor='default';
		that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
		that.mask.onmousemove=null;
		that.mask.onmouseup=null;
		}
	}
},
//橡皮擦
eraser:function(Obj,w,h){
	let that=this;
	this.mask.onmousedown=function(){
		Obj.style.display='block';
		that.mask.onmousemove=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			let lefts=ox-w/2;
			let tops=oy-h/2;
			if (lefts>that.cw-w) {
				lefts=that.cw-w;
			}
			if (lefts<0) {
				lefts=0;
			}
			if (tops>that.ch-h) {
				tops=that.ch-h;
			}
			if (tops<0) {
				tops=0;
			}
			Obj.style.left=`${lefts}px`;
			Obj.style.top=`${tops}px`;
			that.ctx.clearRect(lefts, tops, w, h);
		}
		that.mask.onmouseup=function(){
			Obj.style.display='none';
			that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
			that.mask.onmousemove=null;
			that.mask.onmouseup=null;
		}
	}
},
}