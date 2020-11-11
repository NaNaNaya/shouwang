window.onload = () => {
	//吸顶效果
	let nav = document.getElementsByClassName("middle_nav")[0]
	window.onscroll = function() {
		if(document.documentElement.scrollTop >= 80) {
			nav.style.top = "0px";
		} else {
			nav.style.top = "80px";
		}
	}
	/**************下拉菜单************************************/
	let topNav_games = document.getElementsByClassName("topNav_games")[0];
	let topNav_esports = document.getElementsByClassName("topNav_esports")[0];
	let topNav_pass = document.getElementsByClassName("topNav_pass")[0];
	let topGames = document.getElementsByClassName("topGames")[0];
	let topEsports = document.getElementsByClassName("topEsports")[0];
	let topPass = document.getElementsByClassName("topPass")[0];
	topNav_games.onclick = () => {
		let topIconClick = topNav_games.getElementsByClassName("topIconClick")[0];
		if(topGames.style.display == "block") {
			topGames.style.display = "none";
			topIconClick.style.transform = "rotateZ(0deg)";
		} else {
			topGames.style.display = "block";
			topIconClick.style.transform = "rotateZ(180deg)";
		}
	}
	topNav_esports.onclick = () => {
		let topIconClick = topNav_esports.getElementsByClassName("topIconClick")[0];
		if(topEsports.style.display == "block") {
			topEsports.style.display = "none";
			topIconClick.style.transform = "rotateZ(0deg)";
		} else {
			topEsports.style.display = "block";
			topIconClick.style.transform = "rotateZ(180deg)";
		}
	}
	topNav_pass.onclick = () => {
		let topIconClick = topNav_pass.getElementsByClassName("topIconClick")[0];
		if(topPass.style.display == "block") {
			topPass.style.display = "none";
			topIconClick.style.transform = "rotateZ(0deg)";
		} else {
			topPass.style.display = "block";
			topIconClick.style.transform = "rotateZ(180deg)";
		}
	}
	/**********************第二条导航栏**************                    ****************/
	let active = document.getElementsByClassName("active");
	let menu_games = document.getElementsByClassName("menu_games");
	for(let i = 0; i < active.length; i++) {
		active[i].onclick = () => {
			let topIconClick = active[i].getElementsByClassName("topIconClick")[0];
			if(menu_games[i].style.display == "block") {
				menu_games[i].style.display = "none";
				topIconClick.style.transform = "rotateZ(0deg)";
			} else {
				menu_games[i].style.display = "block";
				topIconClick.style.transform = "rotateZ(180deg)";
			}
			active[i].classList.toggle("is_click")
		}
	}

	//控制视频播放暂停
	let video = document.getElementById("video");
	let stop = document.getElementsByClassName("video_controls")[0];
	let icon = document.getElementsByClassName("icon_img")[0];
	let text = document.getElementsByClassName("icon_text")[0];
	stop.onclick = () => {
		video.controls = true;
		if(video.paused) {
			video.play();
			icon.style.backgroundPosition = "0 0px";
			text.innerText = "暂停";
		} else {
			video.pause();
			icon.style.backgroundPosition = "0 -32px";
			text.innerText = "播放";
		}
	}
	//弹出窗口
	let btn=document.getElementsByClassName('content_introduce')[0];
	let closeBtn=document.getElementsByClassName('closeBtn')[0];
	btn.onclick=()=>{
		document.getElementById('fileOperation').style.display='block';
		document.getElementById('fade').style.display='block'
	}
	closeBtn.onclick=()=>{
		document.getElementById('fileOperation').style.display='none';
		document.getElementById('fade').style.display='none'
	}
	//英雄展示
	let heroes_img = document.getElementsByClassName("heroes_img")[0];
	let heroes_name = document.getElementsByClassName("heroes_name")[0];
	let heroes_description = document.getElementsByClassName("heroes_intro")[0];
	let aList = document.getElementsByClassName("heroes_portrait");
	for(let i = 0; i < aList.length; i++) {
		aList[i].onmouseover = () => {
			let name = aList[i].dataset.name;
			let img = aList[i].dataset.img;
			let description = aList[i].dataset.description;
			heroes_name.innerText = name;
			heroes_description.innerText = description;
			heroes_img.style.backgroundImage = "url(" + img + ")";
			
		}
	}
	/**列表动态添加类***/
	let list = document.getElementById('uls').getElementsByTagName('li');
	for(let i = 0; i < list.length; i++) {
		list[i].onmouseover= () => {
			list[i].classList.add('show')
			let par = list[i].parentNode.children   //获取同级元素
			for(let j = 0; j < par.length; j++) {
				if(par[j] != list[i]) {
					par[j].classList.remove('show')
				}
			}
		}
	}
}