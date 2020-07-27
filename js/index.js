$(window).on("load", GetAllProperties);
function GetAllProperties() {
    $(".dialog-user-login > #dialog").css("display","none");
    $(".dialog-for-user-signup > #dialogUserSignUp").css("display","none");
    $(".completed-request").css("display","none");
    $(".arrived").css("display","none");
    $(".signup-as-provider-or-requester > #providerOrRequester").css("display","none");
    if(sessionStorage.getItem("usersession") == null) {
      $("#logout").hide();
      $("#userLoggedIn").hide();
      $(".requestStatus").hide();
      $(".masthead").show();     
      $(".signupUser").show();
      $("#services").show();  
      $("#about_us").show(); 
    } else {
      $("#signupUserLink").hide();
      $(".signup-home-button").hide();
    	$(".loginLink").hide();
    	var obj = JSON.parse(sessionStorage.getItem("username"));
      var userIdDObj = JSON.parse(sessionStorage.getItem("userIdD"));
      console.log("what is this",userIdDObj)
      $( "#userLoggedInId").html(userIdDObj.value);
    	$( "#userLoggedIn").html(obj.value);
    	$( "#userLoggedIn").show();
      $(".requestStatus").show();
      $(".signupUser").hide();
      $(".masthead").hide();  
      $("#services").hide();  
      $("#about_us").hide();  
    }
    if(sessionGet("usersession") == null) {
        // $("#content").hide();
        // $("#content").hide();
        // this prevents navigation and you can now do your js stuff here
    }
    var stringvalue;
    var dataForServer=JSON.parse(sessionStorage.getItem("usersession"));

     if (dataForServer != null && dataForServer.value  != null) {
      stringvalue = dataForServer.value;
    }


  getAllUserCodeNanates()

}

function getAllUserCodeNanates(){
   var listOfUsers = [];
   if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
                   latitude = position.coords.latitude
                   longitude = position.coords.longitude

                   console.log("position",position)

    $.ajax({
      type: "GET",
      url: "https://cocamzans.com:8443/v1/currentaddress?latitude="+latitude+"&longitude="+longitude,
      cache: false,
      crossDomain: true,
      xhrFields: {withCredentials:true},
      success: function(data){
      currentaddress = data.destination_addresses[0].toString();
      $.ajax({
      type: "GET",
      url: "https://cocamzans.com:8443/v1/geolocation?latitude="+latitude+"&longitude="+longitude+"&destinationAddress="+currentaddress,
      cache: false,
      crossDomain: true,
      xhrFields: {withCredentials:true},
      success: function(data){
        console.log("currentaddress full response",data)
        for(var i = 0 ; i < data.origin_addresses.length; i++){
         var singleObj = {};
            // if(data.rows[i].elements[0].duration != null)
              singleObj['userId'] = data.userModels[i].userId;
              singleObj['firstName'] = data.userModels[i].firstName;
              singleObj['lastName']  = data.userModels[i].lastName;
              if(data.rows[i].elements[0].duration != null){
              singleObj['duration']  = data.rows[i].elements[0].duration.text;
            }
            if(data.rows[i].elements[0].distance != null){
              singleObj['distance']  = data.rows[i].elements[0].distance.text;
            }
              singleObj['origin_addresses']  = data.origin_addresses[i];
              singleObj['suburb']  = data.origin_addresses[i].split(",")[1];
              singleObj['usertype']  = data.userModels[i].typeModel.typeId;
              listOfUsers.push(singleObj);
        }

        console.log("singleObj",listOfUsers);

        listOfUsers.sort((a, b) => (a.distance > b.distance) ? 1 : -1)

       var listOfCities = [];

       var obj = JSON.parse(sessionStorage.getItem("usertype"));
       console.log("user Loggedin",obj)
       var userId = $("#userLoggedInId").html();
       
       var currentUserTypeLoggedIn = obj.value;

       var objUsersession = JSON.parse(sessionStorage.getItem("usersession"));
       console.log("user usersession",objUsersession)
       var userId = $( "#userLoggedInId").html();
       var currentUserTypeLoggedIn = objUsersession.value;

       var objUsername = JSON.parse(sessionStorage.getItem("username"));
       console.log("user username",objUsername)
       var userId = $( "#userLoggedInId").html();
       var currentUserTypeLoggedIn = objUsersession.value;

       var objSession = JSON.parse(sessionStorage.getItem("session"));
       console.log("user session",objSession)
       var userId = $( "#userLoggedInId").html();
       var currentUserTypeLoggedIn = objSession.value;



       console.log("new Date() :" ,new Date(new Date().getTime() + (60000 * 100)).toISOString());
       console.log("obj.expirationDate:" ,obj.expirationDate);

       console.log("data.userModels",data.userModels)  
       if(data.userModels == null){
       window.sessionStorage.removeItem("usersession")
       window.sessionStorage.removeItem("username")
       window.sessionStorage.removeItem("usertype")
       window.sessionStorage.removeItem("session")
       window.location.href="https://cocamzansi.com/";
   }
    $.ajax({
      type: "GET",
      url: "https://cocamzans.com:8443/v1/request/"+userId,
      cache: false,
      crossDomain: true,
      xhrFields: {withCredentials:true},
      success: function(data){
       var providerRequestsList = data;
       if (providerRequestsList.length>0 && providerRequestsList[0].userType==1) {
        if(obj != null){
        for(var i = 0 ; i < providerRequestsList.length;i++){
             
          // if(providerRequestsList.userModelFromId){
            if(providerRequestsList[i].status==1){
              status = "On-route"
            }else if(providerRequestsList[i].status==2){
              status = "Arrived"
            } else if(providerRequestsList[i].status==3){
              status = "Started"
            }else if(providerRequestsList[i].status==4){
              status = "Complete"
            }else if(providerRequestsList[i].status==5){
              status = "Completed"
            }else{
              status = "Confirm"
            }

            console.log("providerRequestsList[i].userModelToId.userId",providerRequestsList[i].userModelToId.userId)

          if(providerRequestsList[i].userModelToId.userId!=undefined && providerRequestsList[i].userModelToId.userId != $( "#userLoggedInId").html()){
            byUser = "disabled"
          } else{
            byUser = ""
          }

          listOfCities.push("<div class='" +"list-request  "+providerRequestsList[i].requestMessage.toString().replace(" ","").replace(":","").replace("+","").replace("-","")+"' id='"+providerRequestsList[i].requestId+"'>"+"<br/>"+" &nbsp;" +"<b>"+providerRequestsList[i].requestMessage+"</b>"+" &nbsp;"+"<b>"+providerRequestsList[i].createDateTime+"</b>"+", From:&nbsp;"+"<b>"+providerRequestsList[i].userFromFirstName+"</b>"+", &nbsp;"+"<b>"+providerRequestsList[i].distance+"</b>"+"&nbsp;Away,&nbsp;"+"<b>"+providerRequestsList[i].duration+"</b>,&nbsp;"+"price:&nbsp;<b>R&nbsp;"+providerRequestsList[i].totalServicePrice+"</b>"+"&nbsp; &nbsp;"+"<b>"+''+"</b>"+"&nbsp;"+"&nbsp;"+"</strong>"+"<a href='https://www.google.com/maps/dir/"+providerRequestsList[i].geoLocation.destination_addresses[0]+"/"+providerRequestsList[i].geoLocation.requestModels[i].fullAddress+"' target='_blank' data-toggle='tooltip' title='"+providerRequestsList[i].geoLocation.requestModels[i].fullAddress+"'data-placement='top'><i class='fas fa-map-marker-alt'></i></a>"+" &nbsp; &nbsp; <button class='btn btn-primary "+status.toLowerCase()+"-request'"+byUser+" data-toggle='modal' data-target='#"+status.toLowerCase()+"-requestModal'>"+status+"</button>"+"</div>");
          $(".search-info").html(listOfCities);
              }
            }
        } else if(providerRequestsList.length==0 && currentUserTypeLoggedIn == 1){
                    $(".search-info").html(listOfCities);
        }
       else if(obj != null){

        if(providerRequestsList.length>0){

        for(var i = 0 ; i < providerRequestsList.length;i++)
        {

           if(providerRequestsList[i].status==1){
              status = "On-the-way"
            }else if(providerRequestsList[i].status==2){
              status = "Arrived"
            } else if(providerRequestsList[i].status==3){
              status = "Started"
            }else if(providerRequestsList[i].status==4){
              status = "Complete"
            }else if(providerRequestsList[i].status==5){
              status = "Completed"
            } else{
              status = "Waiting"
            }

            console.log("providerRequestsList[i].userModelToId.userId",providerRequestsList[i].userModelToId.userId)

          if(providerRequestsList[i].userModelToId.userId!=undefined && providerRequestsList[i].userModelToId.userId != $( "#userLoggedInId").html()){
            byUser = "disabled"
          } else{
            byUser = ""
          }

        if(providerRequestsList.length>0 && providerRequestsList[0].userType==2){
          if(providerRequestsList.length>0){
            if(providerRequestsList[i].geoLocation.requestModels[i]!= undefined){
              // alert(providerRequestsList[i].geoLocation.requestModels[i])
            listOfCities.push("<div class='" +"list-request  "+providerRequestsList[i].requestMessage.toString().replace(" ","").replace(":","").replace("+","").replace("-","")+"' id='"+providerRequestsList[i].requestId+"'>"+"<br/>"+" &nbsp;" +"<b>"+providerRequestsList[i].requestMessage+"</b>"+" &nbsp;"+"<b>"+providerRequestsList[i].createDateTime+"</b>"+", From:&nbsp;"+"<b>"+providerRequestsList[i].userFromFirstName+"</b>"+", &nbsp;"+"<b>"+providerRequestsList[i].distance+"</b>"+"&nbsp;Away,&nbsp;"+"<b>"+providerRequestsList[i].duration+"</b>,&nbsp;"+"price:&nbsp;<b>R&nbsp;"+providerRequestsList[i].totalServicePrice+"</b>"+"&nbsp; &nbsp;"+"<b>"+''+"</b>"+"&nbsp;"+"&nbsp;"+"</strong>"+"<a href='https://www.google.com/maps/dir/"+providerRequestsList[i].geoLocation.destination_addresses[0]+"/"+providerRequestsList[i].geoLocation.requestModels[i].fullAddress+"' target='_blank' data-toggle='tooltip' title='"+providerRequestsList[i].geoLocation.requestModels[i].fullAddress+"'data-placement='top'><i class='fas fa-map-marker-alt'></i></a>"+"&nbsp;&nbsp; <button class=' btn btn-primary "+status.toLowerCase()+"-request'"+byUser+" data-toggle='modal' data-target='#"+status.toLowerCase()+"Modal'>"+status+"</button>"+"</div>");
           } else if(obj.value==2){
            if(providerRequestsList.length<1){
            listOfCities.push("<div><button class='request-provider' data-toggle='modal' data-target='#requestModal' >"+"Request"+"</button>"+"</div>");
             }
           }
          }
          } else if(listOfUsers[i].usertype != obj.value && listOfUsers[i].usertype == 2){
             listOfCities.push("<div class='" +"list-request  "+listOfUsers[i].firstName+listOfUsers[i].lastName.toString().replace(" ","").replace(":","").replace("+","").replace("-","")+"' id='"+listOfUsers[i].userId+"'>"+"<br/>"+" &nbsp;" +"<b>"+listOfUsers[i].firstName+"</b>"+" &nbsp;"+"<b>"+listOfUsers[i].lastName+"</b>"+" &nbsp;"+"<b>"+""+"</b>"+" &nbsp;"+"<b>"+listOfUsers[i].distance+"</b>"+"&nbsp; &nbsp;"+"<b>"+listOfUsers[i].duration+"</b>"+",&nbsp;"+"&nbsp;"+"</strong>"+"<button class='confirm-request' data-toggle='modal' data-target='#confirm-requestModal'>"+"Confirm"+"</button>"+"</div>")
             break;
          }
        }
      } else {
        if(obj.value==2){
       listOfCities.push("<div><button class='request-provider' data-toggle='modal' data-target='#requestModal'>"+"Request"+"</button>"+"</div>");
        }
      }
        $(".search-info").html(listOfCities);
      }
      $(".completed-request").parent().hide();
      // $(".arrived-request").parent().hide();

      

      for(var i = 0 ; i < providerRequestsList.length; i++){

        if(providerRequestsList[i].userModelToId.userId == $( "#userLoggedInId").html()){
            $(".confirm-request").parent().hide();
      }
      }

      $(document).ready(
  function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


      },failure: function(errMsg) {
        alert(errMsg);
      }

    });



      

      },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

      },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });
                   
        });
    }

}

function sessionGet(key) {
  let stringValue = window.sessionStorage.getItem(key)
    if (stringValue !== null) {
      let value = JSON.parse(stringValue)
        let expirationDate = new Date(value.expirationDate)
        if (expirationDate > new Date()) {
          return value.value
        } else {
          window.sessionStorage.removeItem(key)
        }
    }
    return null
}


  $(document).ready(function () {
 $("#signup").click(function(){
   window.sessionStorage.removeItem("usersession")
   window.sessionStorage.removeItem("username")
   window.sessionStorage.removeItem("usertype")
   window.sessionStorage.removeItem("session")
  });

 });


$(document).ready(function () {
 $(".swal2-confirm").click(function(){
    alert("test")
  });

 $(".swal2-cancel").click(function(){
    alert("test")
  });
 });


$(document).ready(function () {
 $(".ui-button").click(function(){
  $(this).dialog().remove()
});
});


// $(document).on('click','#chatId',function(){
//     // window.location.assign("socketTest.html")
//     $("#somediv").load('socketTest.html').dialog({modal:true,maxWidth:500, maxHeight: 1800,width: 500,height: 1800}); 
    
// })    