$(document).ready(function(){

	//html滚动条定义
	$("html").niceScroll({cursorwidth:"6",cursorcolor:"#d1d1d1" });

	//审计点固化
	$(".menu .shaixuan ul li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})

	$(".guhua_box .guhua_list .title,.guhua_box .guhua_list .title a").click(function(e){
		e.stopPropagation();
	})
	$(".guhua_box .guhua_list .title").click(function(){
		$(this).siblings(".guhua_box .guhua_list .info").slideToggle();
	})

	//表格展开 
	function tdShow(){
		var num = 5;
		var tdLength = $("#map .list_table tbody tr").length;

		for(var i=0;i<num;i++){
			$("#map .list_table tr th").eq(i).show();
			for(var k=0;k<tdLength;k++){
				$("#map .list_table tbody tr").eq(k).children('td').eq(i).show();
			}
		}
	}
	tdShow();
	$("#map .list_title").on('click','b',function(){
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$("#map .list_title b i").removeClass('icon-hand-left').addClass('icon-hand-right');
			$("#map .list_title").parent().parent().addClass('col-xs-12 col-md-12 col-lg-12 pos').removeClass('col-xs-6 col-md-5 col-lg-5')
			$("#map .list_table tr th,#map .list_table tr td").show();
			$("#map .list_table thead").eq(1).show().css({'visibility':'hidden'});
			$("#table_scroll").css({'margin-top':'-23px'});
			tdShow();
		}else{
			$("#map .list_title b i").removeClass('icon-hand-right').addClass('icon-hand-left');
			$("#map .list_title").parent().parent().removeClass('col-xs-12 col-md-12 col-lg-12 pos').addClass('col-xs-6 col-md-5 col-lg-5');
			var thLength = $("#map .list_table tbody tr th").length;
			$("#map .list_table tr th,#map .list_table tr td").hide();
			$("#map .list_table thead").eq(1).show().css({'visibility':'none'});
			$("#table_scroll").css({'margin-top':'0'});
			tdShow();
		}
	})

	//2a-审计点固化
	$("#scroll_box").niceScroll("#scroll_box .scroll",{cursorwidth:"4",cursorcolor:"#4788af"});
	$("#scroll_box1").niceScroll("#scroll_box1 .scroll",{cursorwidth:"4",cursorcolor:"#4788af"});

	// 风险分析_专项
	$(".fx-map .sub-nav ul li").hover(function(){
		$(".fx-map .sub-nav ul li").show();
	},function(){
		$(".fx-map .sub-nav ul li").hide();
		$(".fx-map .sub-nav ul li.active").show();
	})
	$(".fx-map .sub-nav ul li").click(function(){
		$(this).show().addClass('active').siblings().hide().removeClass('active');
	})

	$(".fx-map .sj_list .list p a").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})

	$(".modal_box .modal_list .modal_info h2 b").click(function(){
		$(".modal_box").fadeOut();
		$(this).parent().parent().fadeOut();
	})

	//风险分析_业务域
	/*$('.fx-tab').on('click','li',function(){
		$(this).addClass("on").siblings().removeClass("on");
	})*/
	$(".data-top .data-mouth").on("click","a",function(){
		$(this).addClass("on").siblings().removeClass("on")
	})

	//4b现场支撑－审计管理
	var ms_ul = $(".ms").find('ul');
	ms_ul.niceScroll({
		cursorwidth:"4",
		cursorcolor:"#ddd"
	});
	$('.select_box').hover(function(){
        $(this).find('ul').show();  
    },function(){
    	$(this).find('ul').hide();  
    })

    $('ul.lm-son-ul li').click(function(){
        $(this).parents('li').find('span').html($(this).html());
        $(this).parent().hide();
    });

    // 添加移除
    $(".ms").find('i').hide();

    $(".selectable").on('click','i',function(){
    	$(this).parent("li").remove();
    	$(".selection ul").append("<li>"+ $(this).parent("li").text() +"<i></i></li>");
    	$(".ms").find('i').hide();

    })
    $(".selection").on('click','i',function(){
    	$(this).parent("li").remove();
    	$(".selectable ul").append("<li>"+ $(this).parent("li").text() +"<i></i></li>");
    	$(".ms").find("i").hide();
    })

    $(".ms").on('mouseenter','li',function(){
    	 $(this).find('i').show();
    })
    $(".ms").on('mouseleave','li',function(){
    	 $(this).find('i').hide();
    })
    // 弹窗
    $(".button .saveas").click(function(){
		$('.keepdialog').show();
		$('.shadow').show();
	})
	$(".dialogcenter .proshow").on("click",function(){
		$(".province").show();
	})
	$(".dialogcenter .province").on("click","li",function(){
		$(".proshow").html($(this).text());
		$(".province").hide();
	})
	$(".keepdialog .closedialog").click(function(){
		$(".keepdialog").hide();
		$(".shadow").hide();
	})

    //4c现场支撑－现场审计跟踪
    /*$('.menu ul.ul_select li span').click(function(){
        $(this).siblings().slideToggle(); 
    })

    $('.menu ul.lm-son-ul li').click(function(){
        $(this).parents('li').find('span').html($(this).html());
        $(this).parent().hide();
    });*/
	$(".guhua_box .guhua_list .info .detail h2 a").on('click',function(){
		$(".gz_modal").fadeIn();
	})
	$(".gz_modal_box .gz_modal_info h2 b").click(function(){
		$(".gz_modal").fadeOut();
	})

});

//文件上传
function getFile(obj,inputName){
	var file_name = $(obj).val();
	file_name = $(obj).val().split('\\').pop();
	$("input[name='"+inputName+"']").val(file_name);
}

