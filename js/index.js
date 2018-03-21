
// function $(id){
// 	return document.getElementById(id);
// }
window.onload = function(){
	//小圆点切换效果
	// var lis = document.getElementsByTagName("li");
	var yd_lis = document.getElementById("jd_circle").getElementsByTagName("li");
	var kb_lis = document.getElementById("jd_kb").getElementsByTagName("li");
	var life_i = document.getElementById("jd_life").getElementsByTagName("i");
	var first_minus = document.getElementById("jd_first_minus").getElementsByTagName("div");
	var sedmenu = document.getElementById("jd_menu").getElementsByTagName("div");
	var banner_li = document.getElementById("jd_banner").getElementsByTagName("li");;
	var yd_li = document.getElementById("jd_circle");


	//生活服务模块图标遍历
	for (var i = 0; i < life_i.length; i++) {
		life_i[i].style.backgroundPosition = "-25"+"px "+(-i*25)+"px";
		// console.log("-25"+"px "+(-i*25)+"px");
	}
	//banner轮播图
	var banners = document.getElementById("jd_banner");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	//封装banner左右点击事件
	function animate(offset){
		var newleft = parseInt(banners.style.left) + offset;
		banners.style.left = newleft + 'px';
		// console.log(newleft);
		if (newleft>1) {
			banners.style.left = -3650 + 'px';
		}
		if (newleft < -2920) {
			banners.style.left = 0 + 'px';
		}
	}
	for (var i = 0; i < yd_lis.length; i++) {
		jd_circle[i].index = i;
		prev.onclick = function(){
		animate(730);
		}
	}
	prev.onclick = function(){
		animate(730);
	}
	next.onclick = function(){
		animate(-730);
	}

	//banner 小圆点根据banner数量递增
	for (var i = 0; i < banner_li.length; i++) {
		var new_li = document.createElement("li");
		if (i==0) {
			new_li.className = "current";
		}
		new_li.innerHTML = i + 1;
		if (yd_lis.length != banner_li.length) {
			yd_li.appendChild(new_li);
		}

	}

	for (var i = 0; i < yd_lis.length; i++) {
		yd_lis[i].onmouseover = function(){
			for (var j = 0; j < yd_lis.length; j++) {
				yd_lis[j].removeAttribute('class');
			}
			// this 只指向事件的调用者，不是所有场合都适合使用
			this.className = "current";

			// console.log(event);
		}
	}

	//生活快报
	for (var i = 0; i < kb_lis.length; i++) {
		kb_lis[i].onmouseover = function(){
			this.className = "news_li";
		},
		kb_lis[i].onmouseout = function(){
			this.className = "";
		}
	}

	for (var i = 0; i < first_minus.length; i++) {
		first_minus[i].index = i;
		first_minus[i].onmouseover = function(){
			for (var j = 0; j < first_minus.length; j++) {
				first_minus[j].className = "";
				// sedmenu[j].className = "";
			}
			//为当前按钮添加类名;
			this.className = "f_menu";
			//先隐藏下面所有的 div盒子
			// for (var k = 0; k < sedmenu.length; k++) {
			// 	sedmenu[k].style.display = "none";
			// }
			//留下中意的那个，跟点击的序号有关系的
			sedmenu[this.index].className = "show";
		}
		first_minus[i].onmouseout = function(){
			this.className = "";
			sedmenu[this.index].className = "";
		}
	}


	// 事件源：登录
	// 事件： 显示弹出灰色的大盒子跟白色的小盒子
	// 动作：点击
	$("jd_login").onclick = function(){
		$("jd_mask").style.display = "block";
		$("jd_box").style.display = "block";
		if ($("jd_box").style.display = "block") {
			$("jd_username").focus();
		}
	},
	// 事件源：关闭
	// 事件： 隐藏灰色的大盒子跟白色的小盒子
	// 动作：点击
	$("close_login").onclick = function(){
		$("jd_mask").style.display = "none";
		$("jd_box").style.display = "none";
	},
	//账号输入框自动活动焦点
	//这个是点击登录按钮判断输入框是否按需求输入
	$("jd_go").onclick = function(){
		var username = $("jd_username").value;
		var password = $("jd_password").value;
		if (username =="" && password == "") {
			$("jd_username").style.border = "1px solid red";
			$("jd_password").style.border = "1px solid red";
			// $("result").style.display = "block";
			$("result").className = "wrong";
			$("result").innerHTML = "*请输入账号密码";
		}
		else if(username =="" && password != ""){
			$("jd_username").style.border = "1px solid red";
			$("jd_password").removeAttribute("style");
			$("result").className = "wrong";
			$("result").innerHTML = "*账号不能为空";
		}
		else if (password == "" && username != "") {
			$("jd_password").style.border = "1px solid red";
			$("jd_username").removeAttribute("style");
			$("result").className = "wrong";
			$("result").innerHTML = "*密码不能为空";
		}
		else{
			alert("good!");
		}
	},
	//鼠标经过，自动全选
	$("jd_username").onmouseover =function(){
		this.select();
	},
	$("jd_password").onmouseover =function(){
		this.select();
	},
	//这个是是否显示二维码的
	$("jd_about").onmouseover = function(){
		$("jd_code").style.display = 'block';
	},
	$("jd_about").onmouseout = function(){
		$("jd_code").style.display = 'none';
	},
	// 事件源： a
	// 事件：点击
	// 事件处理程序 topbanner 隐藏这个样式
	$("close_banner").onclick = function(){
		$("jd_topbanner").style.display = "none";
	},
	// $("jd_txt").onfocus = function(){
	// 	if (this.value == "图书开抢") {
	// 		this.value ="";
	// 	}
	// },
	// $("jd_txt").onblur = function(){
	// 	if (this.value == "") {
	// 		this.value ="图书开抢";
	// 		this.style.color = "#666";
	// 	}
	// },
	$("jd_txt").onkeyup = function(){
		if (this.value != "") {
			this.style.color = "black";
		}
	},

	//onpropertychange支持IE6/7/8 检查用户表单输入内容
	//oninput支持大部分浏览器
	$("jd_txt").oninput = $("jd_txt").onpropertychange = function(){
		if (this.value=="") {
			$("jd_lab").style.display = "block";
		}
		else{
			$("jd_lab").style.display = "none";
		}
	},
	$("jd_btn").onclick = function(){
		if ($("jd_txt").value == "" || $("jd_lab").style.display == "block") {
			alert("请输入关键字！");
		}
		else{
			alert("已输入搜索关键字");
		}
	}
	// var demo = document.getElementById("jd_circle");
	// var firli = document.createElement("li");
	// demo.appendChild(firli);
}