/*
属性：
	哪些字符、个数、速度、得分、关卡、生命、减分
方法
	开始、消除字符、产生字符(个数、哪些字符)、下一关、重新开始
 */

function Game(){
	this.charSheet=[
	['Q','img/Q.png'],
	['W','img/W.png'],
	['E','img/E.png'],
	['R','img/R.png'],
	['T','img/T.png'],
	['Y','img/Y.png'],
	['U','img/U.png'],
	['I','img/I.png'],
	['O','img/O.png'],
	['P','img/P.png'],
	['A','img/A.png'],
	['S','img/S.png'],
	['D','img/D.png'],
	['F','img/F.png'],
	['G','img/G.png'],
	['H','img/H.png'],
	['J','img/J.png'],
	['K','img/K.png'],
	['L','img/L.png'],
	['Z','img/Z.png'],
	['X','img/X.png'],
	['C','img/C.png'],
	['V','img/V.png'],
	['N','img/B.png'],
	['B','img/N.png'],
	['M','img/M.png']];
	// this.charSheet=['you are 笨蛋','you are 逗比','you are 二货','you are 蠢货','you are and傻逼']
	this.length=5;
	this.speed=20;    
	this.elements=[];
	this.position=[];
	this.life=document.querySelector('.box1>span');
	this.score=document.querySelector('.box>span');
	this.gq=document.querySelector('div.pass>span');
	this.scoreObj=0;
	this.lifeObj=10;
	this.pass=10;
	this.t=null;
}
Game.prototype={
	start:function(){
		this.getChars(this.length);
		this.drop();
		this.key();
	},
	getChars:function(length){
		for(let i=0;i<length;i++){
			this.getchar();
		}
	},
	
	getchar:function(){
		// let num=Math.floor(Math.random()*this.charSheet.length);
		let num;
		let lefts;
		let tops=Math.random()*100;
		let divs=document.createElement('div');

		do{
			num=Math.floor(Math.random()*this.charSheet.length);
		}while(this.checkRepeat[num])

		do{
			lefts=Math.random()*(innerWidth-200)+100;
		}while(this.checkPosition(lefts));

		divs.classList.add('char');
		divs.style.cssText=`
			left:${lefts}px;
			top:${tops}px;
			background:url(${this.charSheet[num][1]}) no-repeat;
		`;
		divs.innerText=this.charSheet[num][0];
		document.body.appendChild(divs);
		this.elements.push(divs);
		this.position.push(lefts);
	},
	checkRepeat:function(num){
		return this.elements.some(value=>value.innerText==this.charSheet[num][0])
	},
	checkPosition:function(lefts){
		return this.position.some(function(value){
			return Math.abs(value-lefts)<50;
		})
	},
	drop:function(){
		let that=this;
		this.t=setInterval(function(){
			for(let i=0;i<that.elements.length;i++){
				let tops=that.elements[i].offsetTop;
				that.elements[i].style.top=`${tops+that.speed}px`
				if (tops>=500) {
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);
					that.position.splice(i,1);
					that.life.innerText--;
					that.getchar();
					if (that.life.innerText==0) {
						let flag=confirm('很遗憾，你输了！');
						if (flag) {
							that.rStart();
						}else{
							close();
						}
			}
				}
				}
				if (that.elements.length<that.length) {
					that.getchar();
			}
		},100)
	},
	key:function(){
		let that=this;
		document.onkeydown=function(e){
			let char=String.fromCharCode(e.keyCode);
			for(let i=0;i<that.elements.length;i++){
				if (char==that.elements[i].innerText) {
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);
					that.position.splice(i,1);
					that.scoreObj+=2;
					that.life.innerText++;
					that.score.innerText=that.scoreObj;
					that.life.innerText=that.lifeObj;
				}
			}
			if (that.score.innerText==that.pass) {
						that.next();
			}
			
		}
	},
	next:function(){
		this.gq.innerText++;
		clearInterval(this.t);
		for(let i=0;i<this.elements.length;i++){
			document.body.removeChild(this.elements[i]);
		}
		this.elements=[];
		this.length++;
		this.speed++;
		if(this.gq.innerText==7){
			this.speed++;
			this.length=8;
		}
		if(this.gq.innerText==2){
			alert('厉害了，word哥！');
			return;
		}
		this.start();
	},
	rStart:function(){
		clearInterval(this.t);
		for(let i=0;i<this.elements.length;i++){
			document.body.removeChild(this.elements[i]);
		}
		this.elements=[];
		this.speed=20;
		this.position=[];
		this.scoreObj=0;
		this.life.innerText=10;
		// this.start();
	},
	stops:function(){

		clearInterval(this.t);
	},
	continues:function(){
		let that=this;
		this.t=setInterval(function(){
			//this指向window
            for(let i=0;i<that.elements.length;i++){
            	let top=that.elements[i].offsetTop;
            	that.elements[i].style.top=`${top+that.speed}px`;
            	if(top>=500){
            		document.body.removeChild(that.elements[i]);
            		that.elements.splice(i,1);
            		that.position.splice(i,1);
            		that.hp.innerText--;
            		if(that.life.innerText==0){
            			let flag=confirm('再来一次？');
            			if(flag){
            				that.rStart();
            			}else{
            				close();
            			}
            		}
            	}            	
            }
            if(that.elements.length<that.length){
            	that.getChar();
            }
		}, 300)
	},
	restart:function(){
		console.log(restart);
		clearInterval(this.t);
		this.start();
	}
}