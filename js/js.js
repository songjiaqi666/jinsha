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
	
	//首页在线预约 banner效果
	function order(){
		
		var oOrder=document.getElementById('orderBanner');
		var oBox=oOrder.getElementsByClassName('box')[0];
		var oUl=oBox.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		var aBtn=oOrder.getElementsByTagName('ol')[0].getElementsByTagName('li');
		var ulW=oBox.offsetWidth*aLi.length;
		oBox.style.width=229+'px';
		oBox.style.height=284+'px';
		oUl.style.width=ulW+'px';
		console.log(ulW)
		
		var timer=null;
		var index=0;
		timer=setInterval(function(){
			for(var j=0;j<aBtn.length;j++){
				aBtn[j].className='';
			}
			
			index++
			if(index==aBtn.length)index=0;
			aBtn[index].className='ac';
			oUl.style.left='-'+index*oBox.offsetWidth+'px';

		},2000);
		
		for(var i=0;i<aBtn.length;i++){
			(function(i){
				aBtn[i].onclick=function(){
					for(var j=0;j<aBtn.length;j++){
						aBtn[j].className='';
					}
					this.className='ac';
					oUl.style.left='-'+i*oBox.offsetWidth+'px';
				}
			})(i)
		}
	};
	order();
	
	//右侧活动
	function huodong(){
		var oHd=document.getElementById('huodong');
		var aBtn=oHd.getElementsByTagName('ul')[0].getElementsByTagName('li');
		
		var aItem=oHd.getElementsByClassName('tabItem');
		
		aItem[0].style.display='block';
		for(var i=0;i<aBtn.length;i++){
			(function(i){
				aBtn[i].onclick=function(){
					for(var j=0;j<aBtn.length;j++){
						aBtn[j].className='';
						aItem[j].style.display='none';
					}
					this.className='ac';
					aItem[i].style.display='block';
				}
			})(i)	
		}
		
		
	}
	huodong();
	
	//右侧专题效果
	function subject(){

		var oSub=document.getElementById('subject');
		var oUl=oSub.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		
		var oPrve=oSub.getElementsByClassName('prve')[0];
		var oNext=oSub.getElementsByClassName('next')[0];
		
		var moveLen=aLi[0].offsetHeight+10;//移动的距离等于li的宽度+上下margin值
		var ulH=moveLen*aLi.length;//ul的宽度，等于移动距离*li的个数
		
		oUl.style.height=ulH+'px';
		console.log(aLi[0].offsetHeight)
		var i=0;
		//下一页
		oNext.onclick=function(){
			i++
			if(i==aLi.length-1)i=0;
			oUl.style.top='-'+moveLen*i+'px';
			console.log(i)
			console.log(oUl.style.top)
		}
		//上一页
		oPrve.onclick=function(){
			if(i==0){
				i=0;
				oUl.style.top='-'+moveLen*i+'px';
				console.log(i)
				console.log(oUl.style.top)
			}else{
				i--
				oUl.style.top='-'+moveLen*i+'px';
				console.log(i)
				console.log(oUl.style.top)
			};
			
			
		}
		
	};
	subject();
	
	

})