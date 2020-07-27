var myFunction = function() {
  alert('Click function');
};
var myImg = "https://unsplash.it/600/600?image=777";
$(document).on("click",".confirm-request",function(event) {
  event.preventDefault();

  var options = {
    title: $("#title").val(),
    options: {
      body: $("#message").val(),
      icon: myImg,
      lang: 'en-US',
      onClick: myFunction
    }
  };
  console.log(options);
  $(".request-provider").easyNotify(options);
});

$( "#foo" ).on( "click", function() {
  alert( $( this ).text() );
});
$( "#foo" ).trigger( "click" );






  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
