  $(document).ready(function () {
 $(document).on("click","#login",function(){
  			$.ajax({
			type: "POST",
			url: "https://cocamzans.com:8443/v1/login",
			contentType: "application/json",
			data: JSON.stringify({
          "username":$("#username").val(),
          "password":$("#password").val()
      }),
      cache: false,
      crossDomain: true,
      xhrFields: {withCredentials:true},
			success: function(data){  
				if(data.success){
         
                 // sessionStorage.setItem('status','loggedIn') 
                 console.log("What are we getting here",data.userIdD)
                 sessionSet("session", data, 100)
                
                 sessionSet("usersession", data.userId, 100)
                 sessionSet("username", data.username, 100)
                 sessionSet("usertype", data.usertype, 100)
                 sessionSet("userIdD", data.userIdD, 100)
                 // setcookie('JSESSIONID', data.userId, time()-3600, PATH);

                 document.cookie = "JSESSIONID="+data.userId+"; path=/;"+"expires"+"="+ new Date(new Date().getTime() + (60000 * 10))+";"+"SameSite=None; Secure"

                 //window.location.href="https://cocamzansi.com";
                 window.location.href="https://cocamzansi.com/";

               } else{
               
                  window.location.href="https://cocamzansi.com/Login.html";
               }
		},
			failure: function(errMsg) {
				alert("errMsg");
			}
		});
	});




    // get from session (if the value expired it is destroyed)


// add into session


 function sessionSet(key, value, expirationInMin = 10) {
  let expirationDate = new Date(new Date().getTime() + (60000 * expirationInMin))
    let newValue = {
    value: value,
    expirationDate: expirationDate.toISOString(),
  }
  window.sessionStorage.setItem(key, JSON.stringify(newValue))
}

 })


  $(document).ready(function () {
//  $(".login").click(function(){
//   $(".dialog-user-login").html('<div id="dialog" title="User Login">'+
//                   '<div id="add">'+
//                   '<div id="form">'+
//                    '<div class="form-field">'+
//                     '<input type="text" name="username" id="username" placeholder="username" class="sign-up-agent">'+
//                    '</div>'+

//                    '<div class="form-field">'+
//                    '<input type="password" name="password" id="password" placeholder="password" class="sign-up-agent"></div>'+


//                   '<div class="form-field">'+
//                   '<input type="button" name="add-submit" value="login" class="add-submit" id="login"></div>'+

//                   '<div class="div1">'+
//                   '</div>'+
//                   '<div class="div2">'+
//                   '</div>'+
//                '</div>'+
//                '</div>'+
//              '</div>');
//     $(".dialog-user-login > #dialog").dialog();
// });

});