/**
 * Created by 小宋 on 2017/2/12.
 */
documentReady(function(){

	//首页banner效果
	function banner(){
		var oBan=document.getElementById('banner');
		var aImg=oBan.getElementsByTagName('ul')[0].getElementsByTagName('li');
		
		var aBtn=oBan.getElementsByTagName('ol')[0].getElementsByTagName('li');
		
		var oPrve=oBan.getElementsByClassName('prve')[0];
		var oNext=oBan.getElementsByClassName('next')[0];

		var i=0;
		
		function run(){
			for(var j=0;j<aBtn.length;j++){
				aBtn[j].className='';
				aImg[j].style.display='none';
			};
			aBtn[i].className='ac';
			aImg[i].style.display='block';	
		}
		
		
		aImg[0].style.display='block';
		//下一页
		oNext.onclick=function(){
			i++
			if(i==aBtn.length)i=0;
			console.log(i)
			run();
		};
		
		//上一页
		oPrve.onclick=function(){
			if(i==0)i=aBtn.length;
			i--
			console.log(i)
			run();
		};
		
		//点击按钮
		for(var l=0;l<aBtn.length;l++){
			(function(l){
				aBtn[l].onclick=function(){
					for(var j=0;j<aBtn.length;j++){
						aBtn[j].className='';
						aImg[j].style.display='none';
					};
					this.className='ac';
					aImg[l].style.display='block';	
				}
			})(l)
		}
	};
	banner();
	

})