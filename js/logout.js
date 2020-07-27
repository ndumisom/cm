  $(document).ready(function () {
 $("#logout").click(function(){
    $.ajax({
			type: "GET",
			url: "https://cocamzans.com:8443/v1/logout",
			success: function(data){
				// console.log(data)
				// alert(data);
			},
			failure: function(errMsg) {
				alert(errMsg);
			}
		});

   window.sessionStorage.removeItem("usersession")
   window.sessionStorage.removeItem("username")
   window.sessionStorage.removeItem("usertype")
   window.sessionStorage.removeItem("session")
	});

 });