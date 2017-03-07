// JavaScript Document
function documentReady(fn){
	if(document.addEventListener)document.addEventListener('DOMContentLoaded', fn, false);  //dom内容加载完毕
	else{
		document.attachEvent('onreadystatechange', function (){//IE兼容
			if(document.readyState=='complete'){
				fn && fn();
			}
		});
	}
};