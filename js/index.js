// JavaScript Document

documentReady(function(){
	//项目效果
	function project(){
		var oPro=document.getElementById('project');
		var oUl=oPro.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		
		var oPrve=oPro.getElementsByClassName('prve')[0];
		var oNext=oPro.getElementsByClassName('next')[0];
		
		var moveLen=aLi[0].offsetWidth+20;//移动的距离等于li的宽度+左右margin值
		var ulW=moveLen*aLi.length;//ul的宽度，等于移动距离*li的个数
		
		oUl.style.width=ulW+'px';
		var i=0;
		//下一页
		oNext.onclick=function(){
			i++
			if(i==aLi.length-12)i=0;
			oUl.style.left='-'+moveLen*i+'px';
			console.log(i)
			console.log(oUl.style.left)
		}
		//上一页
		oPrve.onclick=function(){
			if(i==0){
				i=0;
				oUl.style.left='-'+moveLen*i+'px';
				console.log(i)
				console.log(oUl.style.left)
			}else{
				i--
				oUl.style.left='-'+moveLen*i+'px';
				console.log(i)
				console.log(oUl.style.left)
			};
		}
	};
	project();
	
	//金牌项目效果
	function joker(){
		var oJok=document.getElementById('joker');
		var aLi=oJok.getElementsByTagName('li');
		
		for(var i=0;i<aLi.length;i++){
			(function(i){
				aLi[i].onclick=function(){
					for(var j=0;j<aLi.length;j++){
						aLi[j].className='';
					}
					aLi[i].className='ac';
				}
			})(i);
		};
	};
	joker();

	//首页新闻动态效果
	function news(){
		var oNews=document.getElementById('news');
		var aBtn=oNews.getElementsByClassName('tabList')[0].getElementsByTagName('li');
		var aItem=oNews.getElementsByClassName('tabItem');
		
		aItem[0].style.display='block';
		for(var i=0;i<aBtn.length;i++){
			(function(i){
				aBtn[i].onclick=function(){
					for(var j=0;j<aBtn.length;j++){
						aBtn[j].className='';
						aItem[j].style.display='none';
					}
					aBtn[i].className='ac';
					aItem[i].style.display='block';
				}
			})(i);
		}
	};
	news();
	
	//首页在线预约 banner效果
	function order(){
		
		var oOrder=document.getElementById('orderBanner');
		var oBox=oOrder.getElementsByClassName('box')[0];
		var oUl=oBox.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		var aBtn=oOrder.getElementsByTagName('ol')[0].getElementsByTagName('li');
		var ulW=oBox.offsetWidth*aLi.length;
		
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
	
	//首页成功案例效果
	function cases(){
		var oCase=document.getElementById('case');
		var aHover=oCase.getElementsByClassName('hover');
		
		for(var i=0;i<aHover.length;i++){
			(function(i){
				aHover[i].onmouseover=function(){
					for(var j=0;j<aHover.length;j++){
						aHover[j].style.opacity='0';
					}
					this.style.opacity='1';
				}
				aHover[i].onmouseout=function(){
					for(var j=0;j<aHover.length;j++){
						aHover[j].style.opacity='0';
					}
				};
			})(i);	
			
		};
		
	};
	cases();
	
	//金沙项目中心效果
	function centre(){
		var oCentre=document.getElementById('centre');
		var aBtn=oCentre.getElementsByTagName('ul')[0].getElementsByTagName('li');
		
		var aItem=oCentre.getElementsByClassName('tabItem');
		
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
		
	};
	centre();
	
	//首页subject栏目效果
	function subject(){
		var oSub=document.getElementById('subject');
		var oUl=oSub.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		
		var oPrve=oSub.getElementsByClassName('prve')[0];
		var oNext=oSub.getElementsByClassName('next')[0];
		
		var moveLen=aLi[0].offsetWidth+20;//移动的距离等于li的宽度+左右margin值
		var ulW=moveLen*aLi.length;//ul的宽度，等于移动距离*li的个数
		
		oUl.style.width=ulW+'px';
		
		var i=0;
		//下一页
		oNext.onclick=function(){
			i++
			if(i==aLi.length-3)i=0;
			oUl.style.left='-'+moveLen*i+'px';
			console.log(i)
			console.log(oUl.style.left)
		}
		//上一页
		oPrve.onclick=function(){
			if(i==0){
				i=0;
				oUl.style.left='-'+moveLen*i+'px';
				console.log(i)
				console.log(oUl.style.left)
			}else{
				i--
				oUl.style.left='-'+moveLen*i+'px';
				console.log(i)
				console.log(oUl.style.left)
			};
			
			
		}
		
	};
	subject();
	
	//首页友情链接部分
	function friendlink(){
		var oLink=document.getElementById('friendlink');
		var aBtn=oLink.getElementsByTagName('ul')[0].getElementsByTagName('li');
		
		var aItem=oLink.getElementsByClassName('tabItem');
		
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
	};
	friendlink();
	
})