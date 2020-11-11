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
	//点击显示菜单
	let topNav_pass = document.getElementsByClassName("topNav_pass")[0];
	let topPass = document.getElementsByClassName("topPass")[0];
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
			//	active[i].classList.toggle("is_click")
		}
	}
	/*******************搜索框********************/
	let text = document.getElementById("text");
	let input = document.getElementsByTagName("input")[0];
	input.onfocus = () => {
		input.style.outline = "none";
	}
	document.addEventListener("click", clickHidden);

	function clickHidden(event) {
		if(event.target.tagName == "INPUT") {
			text.style.padding = "8px 0";
		} else {
			text.style.padding = "0";
		}
	}
	/*********选择购买项************/
	let list = document.getElementsByClassName('option');
	for(let i = 0; i < list.length; i++) {
		list[i].onclick = () => {
			list[i].classList.add('selected')
			let par = list[i].parentNode.children
			for(let j = 0; j < par.length; j++) {
				if(par[j] != list[i]) {
					par[j].classList.remove('selected')
				}
			}
		}
	}
}