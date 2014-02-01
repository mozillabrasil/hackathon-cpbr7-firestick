$(function()
{
	if($("html").width() < 480)
	{
		windowResize();
		setTimeout(function(){$("body,html").animate({ scrollLeft: 3000}, 500);},1500);
	}
	else
		setTimeout(function(){$("body, html").animate({ scrollTop: 3000}, 500);},1500);

	setTimeout(function(){$(".abertura").hide();$("#middle-button").animate({opacity: 1},2000)},2000);
	$(window).resize(windowResize);
	
	$("button, .dir").click(function(){
		pengine.send('http://www.rodrigop.com.br/firestick/server.php',{'send':this.id, 'id': 1});
		$(this).blur();
	});

	$("#middle-button").click(function()
	{
		trocaTela("joystick", "config");
	});

	$(".config .btn-layout").click(function()
	{
		trocaTela("config", "layout");
	});

	$(".config .btn-voltar").click(function()
	{
		trocaTela("config", "joystick");
	});

	$(".config .btn-sobre").click(function()
	{
		trocaTela("config", "sobre");
	});

	$(".sobre .btn-voltar").click(function()
	{
		trocaTela("sobre", "config");
	});

	$(".layout .btn-voltar").click(function()
	{
		trocaTela("layout", "config");
	});

	$(".joystick").css("background-color", "#191919");
	$("button, .dir .square").css("background-color", "#0AF");
	$(".dir .triangle").css("border-bottom-color", "#0AF");
	

});


function trocaTela(de,para)
{
	$("."+de).fadeOut(200);
	$("."+para).fadeIn(500);
}

function windowResize()
{
	if($("html").width() < 400)
		$("html").css("transform","rotate(-90deg)").height(window.innerWidth).width(window.innerHeight).css("top","15%").css("left","-20%");
	else
		$("html").css("transform","rotate(0deg)").height("100%").width("100%").css("top",0).css("left",0);	
}

function setLayout()
{
	
}