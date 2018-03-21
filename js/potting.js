
//封装id
function $(id){
	return document.getElementById(id);
}

//封装指定id的自定义className
function getClass(classname,id){
	//判断是否支持classname方法
	if (document.getElementsByClassName) {
		//是否有id
		if (id) {
			var eleId = document.getElementById(id);
			return eleId.getElementsByClassName(classname);
		}
		else{
			return document.getElementsByClassName(classname);
		}
	}
	//不支持的情况
	if (id) {
		var eleId = document.getElementById(id);
		var dom = eleId.getElementsByTagName("*");
	}
	else{
		var dom = document.getElementsByTagName("*");
	}
	var arr = [];
	for (var i = 0; i < dom.length; i++) {
		var txtarr = dom[i].className.split(" ");
		for (var j = 0; j < txtarr.length; j++) {
			if (txtarr[j] == classname) {
				arr.push(dom[i]);
			}
		}
	}
	return arr;
}
