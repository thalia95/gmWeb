// JavaScript Document
$(function(){	

	function turnBanner(){	
	
		var bgcolors = ['#0d3cb2','#ffe641','#38158b','#69e5f1','#2776f5','#9a01f9','#cdeafa','#e8cd98','#f20c4d','#f33912']
		
		var num =0;
		var timer = null;
			
		function sport(){	
			
			clearInterval(timer);
			timer = setInterval(function(){	
				$('.banner .right').click();
				$('#content01').each(function(index,element) {	
					$(element).css('background',bgcolors[index])
				});
			},3000)
		}
		sport();
		
		$('.banner').hover(function(e) {
			clearInterval(timer);
		},function(){	
			sport();
		});
	
		$('.banner .right').click(function(e) {
			num++;
			if(num>9){ num = 0 };
			same()
		});
		
		$('.banner .left').click(function(e) {
			num--;
			if(num<0){ num = 9 };
			same()
		});
		
		$('.banner ol li').click(function(e) {
			var index = $(this).index();
			num = index;
			same()
		});
	
		function same(){	
			$('.banner ul li').eq(num).stop().fadeIn().siblings().fadeOut();
			$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current')
		}
	}
	turnBanner();


	function turnOff(){
		$('.head_adv span').click(function(e) {
            $('.head_adv').fadeOut();
        });
	}
	turnOff();


	function turnFloor(){	
	
		//var f01T = $('#floor01').offset().top;
		var f02T = $('#floor02').offset().top;
		var f03T = $('#floor03').offset().top;
		var f04T = $('#floor04').offset().top;
		var f05T = $('#floor05').offset().top;
		var f06T = $('#floor06').offset().top;
		var f07T = $('#floor07').offset().top;
		var f08T = $('#floor08').offset().top;
		var f09T = $('#floor09').offset().top;
		var showT = $('.finance').offset().top;
		
		$('.elevator ol li:not(:last)').click(function(e) {
			var index = $(this).index();
			var top = $('.floormain>div').eq(index).offset().top;
			$(this).addClass('current').siblings().removeClass('current');
			//console.log(top)
			$('html,body').animate({ scrollTop:top},300);
		});
		
		$('.elevator ol .last').click(function(e) { 
			$('html,body').animate({scrollTop:0},300);
		});
		
		var timer = null;
			$(window).scroll(function(e) {	
				var winT = $(window).scrollTop();
				if( winT>=showT ){	
					$('.elevator ol').fadeIn();
				}else{
					$('.elevator ol').fadeOut();
				}
				clearTimeout(timer);
				timer = setTimeout(boss,300);	
			});
			
		function boss (){	
			var winT = $(window).scrollTop();
			if(winT>=0 && winT< f02T ){
				$('.elevator ol li').eq(0).addClass('current').siblings().removeClass('current');	
			}else if(winT>=f02T && winT< f03T){	
				$('.elevator ol li').eq(1).addClass('current').siblings().removeClass('current');	
			}else if(winT>=f03T && winT< f04T){	
				$('.elevator ol li').eq(2).addClass('current').siblings().removeClass('current');	
			}else if(winT>=f04T && winT< f05T){	
				$('.elevator ol li').eq(3).addClass('current').siblings().removeClass('current');	
			}else if(winT>=f05T && winT< f06T){	
				$('.elevator ol li').eq(4).addClass('current').siblings().removeClass('current');	
			}else if(winT>=f06T && winT< f07T){	
				$('.elevator ol li').eq(5).addClass('current').siblings().removeClass('current');	
			}else if(winT>=f07T && winT< f08T){	
				$('.elevator ol li').eq(6).addClass('current').siblings().removeClass('current');	
			}else if(winT>=f08T && winT< f09T){	
				$('.elevator ol li').eq(7).addClass('current').siblings().removeClass('current');	
			}else{	
				$('.elevator ol li').eq(8).addClass('current').siblings().removeClass('current');	
			}
		}
	}
	turnFloor();	
	


	function turnPic(){	
	
		$('.top_up .icons').each(function(index, element) {
			$(element).css('background','url(images/top_up/top_up0'+ (index+1) +'.png) no-repeat center center')
		});
		$('.downstairs .brand a').each(function(index, element) {
			$(element).css('background','url(images/brand01_0'+ (index+1) +'.png) no-repeat center center')
		});
		$('.downstairs .brand02 a').each(function(index, element) {	
			var newtag = $('<img src="images/brand02_0'+ (index+1) +'.jpg" width="100" height="30" alt="">')
			$(element).prepend(newtag)
		});
		$('.downstairs .brand03 a').each(function(index, element) {
			$(element).css('background','url(images/brand03_0'+ (index+1) +'.jpg) no-repeat center center')
		});
		$('.downstairs .brand04 a').each(function(index, element) {
			$(element).css('background','url(images/brand04_0'+ (index+1) +'.jpg) no-repeat center center')
		});
		$('.downstairs .brand05 a').each(function(index, element) {
			$(element).css('background','url(images/brand05_0'+ (index+1) +'.jpg) no-repeat center center')
		});
		$('.downstairs .brand06 a').each(function(index, element) {
			$(element).css('background','url(images/brand06_0'+ (index+1) +'.jpg) no-repeat center center')
		});
		$('.downstairs .brand07 a').each(function(index, element) {
			$(element).css('background','url(images/brand07_0'+ (index+1) +'.jpg) no-repeat center center')
		});
		$('.downstairs .brand08 a').each(function(index, element) {
			$(element).css('background','url(images/brand08_0'+ (index+1) +'.jpg) no-repeat center center')
		});
		$('.serve_icon li i').each(function(index, element) {
			$(element).css('background','url(images/ui.png) no-repeat '+ (-index*37) +'px 0')
		});
		$('.f_down a i').each(function(index, element) {
			$(element).css('background','url(images/f_down.png) no-repeat '+ (-index*34) +'px center')
		});
	
	}
	turnPic();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
