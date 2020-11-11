window.onload = () => {
	//吸顶效果
	let nav = document.getElementsByClassName("next_nav")[0]
	window.onscroll = function() {
		if(document.documentElement.scrollTop >= 40) {
			nav.style.top = "0px";
		} else {
			nav.style.top = "40px";
		}
	}
	/****************************点击显示菜单****************************************/
	let topNav_pass=document.getElementsByClassName("topNav_pass")[0];
	let topPass=document.getElementsByClassName("topPass")[0];
	topNav_pass.onclick=()=>{
		let topIconClick=topNav_pass.getElementsByClassName("topIconClick")[0];
		if(topPass.style.display=="block"){
			topPass.style.display = "none";
			topIconClick.style.transform = "rotateZ(0deg)";
		}else{
			topPass.style.display = "block";
			topIconClick.style.transform = "rotateZ(180deg)";
		}
	}
	/**********************第二条导航栏**************                    ****************/
	let active = document.getElementsByClassName("active");
	let menu_games=document.getElementsByClassName("menu_games");
	for (let i=0;i<active.length;i++) {
		active[i].onclick=()=>{
			let topIconClick = active[i].getElementsByClassName("topIconClick")[0];
			if(menu_games[i].style.display=="block"){
				menu_games[i].style.display = "none";
				topIconClick.style.transform = "rotateZ(0deg)";
			}else{
				menu_games[i].style.display = "block";
				topIconClick.style.transform = "rotateZ(180deg)";
			}
		}
	}
	/*******************搜索框********************/
	let text=document.getElementById("text");
	let input=document.getElementsByTagName("input")[0];
	input.onfocus=()=>{
		input.style.outline="none";
	}
	document.addEventListener("click", clickHidden);
	function clickHidden(event){
		if(event.target.tagName=="INPUT"){
			text.style.padding="8px 0";
		}else{
			text.style.padding="0";
		}
	}
	/********************轮播********************************/
	let next_btn = document.getElementById("next");
	let pre_btn = document.getElementById("pre");
	let list = document.getElementById("list");
	let dots = document.getElementById("dot").getElementsByTagName("span");
	let left = 0;
	let auto = null;
	let index = 0; //当前图片下标
	let status = false; //动画是否执行
	next_btn.onclick = () => {
		if(status) {
			return false;
		}
		left = parseInt(list.style.left);
		let new_left = left - 1349;
		index = ++index > 1 ? 0 : index;
		animate(new_left);
	}
	pre_btn.onclick = () => {
		left = parseInt(list.style.left);
		let new_left = left + 1349;
		index = --index < 0 ? 1 : index;
		animate(new_left);
	}
	//鼠标移进轮播停止
	banner.onmouseover = () => {
		clearInterval(auto);
	}
	//鼠标移出轮播开始
	banner.onmouseout = () => {
		autoPlay();
	}
	//绑定点击焦点图标
	for(let i = 0; i < dots.length; i++) {
		dots[i].onclick = () => {
			if(index == i || status) {
				return false;
			}
			let new_index = i;
			new_left = i * -1349;
			index = new_index;
			animate(new_left);
		}
	}
	//轮播动画方法
	function animate(new_left) {
		status = true;
		left = parseInt(list.style.left);
		let offset = new_left - left; //总距离
		let interval = 10; //单位时间
		let speed = offset / (1349 / interval);
		function go() {
			left = parseInt(list.style.left); //当前位置
			let next_left = left + speed; //下一帧位置
			list.style.left = next_left + "px";
			if(speed < 0 && next_left >= new_left || speed > 0 && next_left <= new_left) {
				setTimeout(() => {
					go()
				}, interval)
			} else {
				list.style.left = new_left + "px";
				if(new_left <= -4047) {
					list.style.left = -1349 + "px";
				}
				if(new_left >= 0) {
					list.style.left = -2698 + "px";
				}
				changDot();
				status = false; //动画执行结束
			}
		}
		go();
	}
	//自动播放
	function autoPlay() {
		auto = setInterval(() => {
			next_btn.onclick(); //每三秒触发下一个按钮事件
		}, 4000);
	}
	//检查并显示对应标点图片
	function changDot() {
		for(let i = 0; i < dots.length; i++) {
			dots[i].className = "";
		}
		dots[index].className = "on";
	}
	autoPlay();
}