$(document).ready(function(){

	$("div.div1").on("click",".test-class",function(){
		$(this).css("background-color","red");
		$(".from").val($(this).html())
		$(".from").attr('id', $(this).attr('id'));
	});

	$("div.div2").on("click",".test-class",function(){
		$(this).css("background-color","green");
		$(".to").val($(this).html())
		$(".to").attr('id', $(this).attr('id'));
	});

	$("div#body").on("click",".test-class",function(){
		$("div.test-class").remove();
	});

$("div#content").on('mouseenter', '.test-class', function() {
    $(this).addClass("blue");
});
$("div#content").on('mouseleave', '.test-class', function() {
    $(this).removeClass("blue");
});

	$("div.div1").mouseleave(function(){
		$("div.test-class").remove();
	});

	$("div.div2").mouseleave(function(){
		$("div.test-class").remove();
	});

	$("div#body").click(function(){
		$("div.test-class").remove();
	});

	$( ".test-class" ).hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);

});

$(document).ready(function(){

  $(".menu_home").click(function(){
  	if($("#home").hasClass("home")){
    $("#home").removeClass("home")
    $("#news").addClass("news")
    }
  });

    $(".menu_news").click(function(){
  	if($("#news").hasClass("news")){
    $("#news").removeClass("news")
    $("#home").addClass("home")
    }
  });


});