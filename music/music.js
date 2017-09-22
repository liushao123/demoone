/*
* @Author: Administrator
* @Date:   2017-08-30 22:22:52
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-31 12:05:08
*/
window.onload=function(){
	let song=document.querySelector('.song');
	let singer=document.querySelector('.singer');
	let list=document.querySelector('.list');
	let audio=document.querySelector('audio');
	let pause=document.querySelector('.icon-bofang');
	let up=document.querySelector('.icon-shangyishou');
	let down=document.querySelector('.icon-xiayishou');
	let img=document.querySelector('img');
	let line=document.querySelector('.line');
	let line1=document.querySelector('.line1');
	let songs=document.querySelector('.songs');
	let current=document.querySelector('.current');
	let allTime=document.querySelector('.now');
	let widths=line.offsetWidth;
	let Index=0;
	pause.onclick=function(){
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
		pause.classList.toggle('icon-zanting');
	}
	up.onclick=function(){
		Index--;
		if(Index<0){
			Index=5;
		}
		render(database[Index]);
	}
	down.onclick=function(){
		Index++;
		if(Index>5){
			Index=0;
		}
		render(database[Index]);
	}
	render(database[Index]);
	function render(data){
		song.innerText=data.songs;
		singer.innerText=data.name;
		audio.src=data.src;
		img.src=data.photo;
		allTime.innerText=data.alltime;
		songs.innerText=`${data.songs} ${data.name}`;

		list.innerHTML='';
		for(let i=0;i<data.lyrics.length;i++){
			list.innerHTML+=`
			<li class="list${i}">${data.lyrics[i].lyric}</li>
			`;
		}

	}
	audio.ontimeupdate=function(){
		let now=time(audio.currentTime);
		let bili=audio.currentTime/audio.duration;
		line1.style.width=`${bili*100}%`;
		current.innerText=now;
		database[Index].lyrics.forEach((element,index)=>{
			if(element.time==now){
				let a=index;
				if(index<6){
					index=0;
				}else{
					index-=6;
				}
				list.innerHTML='';
				for(let j=index;j<database[Index].lyrics.length;j++){
					list.innerHTML+=`
					<li class="list${j}">${database[Index].lyrics[j].lyric}</li>
					`;
				}
				let obj=document.querySelector(`.list${a}`);
				obj.style.cssText=`
					font-size: 22px;
					color: #08BBEE;
					line-height: 36px;
				`;
			}
		})

	}
	audio.onended=function(){
		Index++;
		if(Index>5){
			Inedx=0;
		}
		render(database[Index]);
	}
	function time(data){
		let m=Math.floor(data/60)>=10?Math.floor(data/60):`0${Math.floor(data/60)}`;
		let s=Math.floor(data%60)>=10?Math.floor(data%60):`0${Math.floor(data%60)}`;
		return `${m}:${s}`;
	}
}