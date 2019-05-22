$("#chanpin li").click(function(){
			var ind = $(this).index();
			$(".one1").css({"display":"block"})
			$(".two1").css({"display":"none"})
			$(".three1").css({"display":"none"})
			$(".four1").css({"display":"none"})
			$(".five1").css({"display":"none"})
			$(this).css({"color":" #00bbff"})
			$(".nei_bottomxia").eq(ind).css({"display":"block"}).siblings().css({"display":"none"})
		})
$("#two li").click(function(){
			var ind = $(this).index();
			$(".one1").css({"display":"none"})
			$(".two1").css({"display":"block"})
			$(".three1").css({"display":"none"})
			$(".four1").css({"display":"none"})
			$(".five1").css({"display":"none"})
			$(this).css({"color":" #00bbff"})
			$(".er").eq(ind).css({"display":"block"}).siblings().css({"display":"none"})
		})
$("#three li").click(function(){
			var ind = $(this).index();
			$(".one1").css({"display":"none"})
			$(".two1").css({"display":"none"})
			$(".three1").css({"display":"block"})
			$(".four1").css({"display":"none"})
			$(".five1").css({"display":"none"})
			$(".san").eq(ind).css({"display":"block"}).siblings().css({"display":"none"})
		})
$("#four li").click(function(){
			var ind = $(this).index();
			$(".one1").css({"display":"none"})
			$(".two1").css({"display":"none"})
			$(".three1").css({"display":"none"})
			$(".four1").css({"display":"block"})
			$(".five1").css({"display":"none"})
			$(".si").eq(ind).css({"display":"block"}).siblings().css({"display":"none"})
		})
$("#five li").click(function(){
			var ind = $(this).index();
			$(".one1").css({"display":"none"})
			$(".two1").css({"display":"none"})
			$(".three1").css({"display":"none"})
			$(".four1").css({"display":"none"})
			$(".five1").css({"display":"block"})
			$(".wu").eq(ind).css({"display":"block"}).siblings().css({"display":"none"})
		})

// 解决方案

	$(".tablist li").mouseenter(function(){
			var ind = $(this).index();
			$(".right>div").eq(ind).css({"display":"block"}).siblings().css({"display":"none"})
			var lu = "url(images/"+"bg"+ind+".jpg)";
			$(".fangan_bg").css({"background-image": lu});

		})
// 成功案例
	$(".chenggong >li").click(function(){
			var ind = $(this).index();
			$("#xia ul").eq(ind).css({"display":"block"}).siblings().css({"display":"none"})
			

		})

