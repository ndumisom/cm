$(document).on("click","#submitResponseConfirmRequestModal",function(){
        $.ajax({
      type: "PUT",
      url: "https://cocamzans.com:8443/v1/updateRequest",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
  "createDateTime": "2020-04-05T18:28:30.878Z",
  "requestId": $("#requestId").val(),
  "requestMessage": "string",
  "status": $('input[name="status"]:checked').val(),
  "userModelFromId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": 0
  },
  "userModelToId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": $("#userFromId").val()
  }
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
        $(".message").html('<div class=success>'+data.message+'</div>');
        // $( "#foo" ).trigger( "click" );
        setInterval(function () {   }, 3000);
        $(".ui-dialog-titlebar-close").trigger("click")
        $("#firstName").val('');
        $("#lastName").val('');
        $("#streetNumber").val('');
        $("#streetName").val('');
        $("#suburb").val('');
        $("#city").val('');
        $("#postalCode").val('');
        $("#telephoneNumber").val('');
        $("#emailAddress").val('');
        $("#passwordSignUp").val('');
        $("#usernameSignUp").val('');
      } else {
          $(".message").html('<div class=info>'+data.message+'</div>');
      }
      window.location.href="https://cocamzansi.com";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });

$(document).on("click","#submitResponseWaitingModal",function(){
        $.ajax({
      type: "PUT",
      url: "https://cocamzans.com:8443/v1/updateRequest",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
  "createDateTime": "2020-04-05T18:28:30.878Z",
  "requestId": $("#requestId").val(),
  "requestMessage": "string",
  "status": $('input[name="status"]:checked').val(),
  "userModelFromId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": 0
  },
  "userModelToId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": $("#userFromId").val()
  }
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
        $(".message").html('<div class=success>'+data.message+'</div>');
        // $( "#foo" ).trigger( "click" );
        setInterval(function () {   }, 3000);
        $(".ui-dialog-titlebar-close").trigger("click")
        $("#firstName").val('');
        $("#lastName").val('');
        $("#streetNumber").val('');
        $("#streetName").val('');
        $("#suburb").val('');
        $("#city").val('');
        $("#postalCode").val('');
        $("#telephoneNumber").val('');
        $("#emailAddress").val('');
        $("#passwordSignUp").val('');
        $("#usernameSignUp").val('');
      } else {
          $(".message").html('<div class=info>'+data.message+'</div>');
      }
      window.location.href="https://cocamzansi.com";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });

$(document).on("click","#submitResponseConfirmRequestModal",function(){
        $.ajax({
      type: "PUT",
      url: "https://cocamzans.com:8443/v1/updateRequest",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
  "createDateTime": "2020-04-05T18:28:30.878Z",
  "requestId": $("#requestId").val(),
  "requestMessage": "string",
  "status": $('input[name="status"]:checked').val(),
  "userModelFromId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": 0
  },
  "userModelToId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": $("#userFromId").val()
  }
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
        $(".message").html('<div class=success>'+data.message+'</div>');
        // $( "#foo" ).trigger( "click" );
        setInterval(function () {   }, 3000);
        $(".ui-dialog-titlebar-close").trigger("click")
        $("#firstName").val('');
        $("#lastName").val('');
        $("#streetNumber").val('');
        $("#streetName").val('');
        $("#suburb").val('');
        $("#city").val('');
        $("#postalCode").val('');
        $("#telephoneNumber").val('');
        $("#emailAddress").val('');
        $("#passwordSignUp").val('');
        $("#usernameSignUp").val('');
      } else {
          $(".message").html('<div class=info>'+data.message+'</div>');
      }
      window.location.href="https://cocamzansi.com";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });

$(document).on("click","#submitResponseOnRouteRequestModal",function(){
        $.ajax({
      type: "PUT",
      url: "https://cocamzans.com:8443/v1/updateRequest",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
  "createDateTime": "2020-04-05T18:28:30.878Z",
  "requestId": $("#requestIdOnRoute").val(),
  "requestMessage": "string",
  "status": $('input[name="status"]:checked').val(),
  "userModelFromId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": 0
  },
  "userModelToId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": $("#userFromId").val()
  }
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
        $(".message").html('<div class=success>'+data.message+'</div>');
        // $( "#foo" ).trigger( "click" );
        setInterval(function () {   }, 3000);
        $(".ui-dialog-titlebar-close").trigger("click")
        $("#firstName").val('');
        $("#lastName").val('');
        $("#streetNumber").val('');
        $("#streetName").val('');
        $("#suburb").val('');
        $("#city").val('');
        $("#postalCode").val('');
        $("#telephoneNumber").val('');
        $("#emailAddress").val('');
        $("#passwordSignUp").val('');
        $("#usernameSignUp").val('');
      } else {
          $(".message").html('<div class=info>'+data.message+'</div>');
      }
      window.location.href="https://cocamzansi.com";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });

$(document).on("click","#submitResponseArrivedRequestModal",function(){
        $.ajax({
      type: "PUT",
      url: "https://cocamzans.com:8443/v1/updateRequest",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
  "createDateTime": "2020-04-05T18:28:30.878Z",
  "requestId": $("#requestIdArrived").val(),
  "requestMessage": "string",
  "status": $('input[name="status"]:checked').val(),
  "userModelFromId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": 0
  },
  "userModelToId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": $("#userFromId").val()
  }
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
        $(".message").html('<div class=success>'+data.message+'</div>');
        // $( "#foo" ).trigger( "click" );
        setInterval(function () {   }, 3000);
        $(".ui-dialog-titlebar-close").trigger("click")
        $("#firstName").val('');
        $("#lastName").val('');
        $("#streetNumber").val('');
        $("#streetName").val('');
        $("#suburb").val('');
        $("#city").val('');
        $("#postalCode").val('');
        $("#telephoneNumber").val('');
        $("#emailAddress").val('');
        $("#passwordSignUp").val('');
        $("#usernameSignUp").val('');
      } else {
          $(".message").html('<div class=info>'+data.message+'</div>');
      }
      window.location.href="https://cocamzansi.com";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });


$(document).on("click","#submitResponseStartedRequestModal",function(){
        $.ajax({
      type: "PUT",
      url: "https://cocamzans.com:8443/v1/updateRequest",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
  "createDateTime": "2020-04-05T18:28:30.878Z",
  "requestId": $("#requestIdStarted").val(),
  "requestMessage": "string",
  "status": $('input[name="status"]:checked').val(),
  "userModelFromId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": 0
  },
  "userModelToId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": $("#userFromId").val()
  }
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
        $(".message").html('<div class=success>'+data.message+'</div>');
        // $( "#foo" ).trigger( "click" );
        setInterval(function () {   }, 3000);
        $(".ui-dialog-titlebar-close").trigger("click")
        $("#firstName").val('');
        $("#lastName").val('');
        $("#streetNumber").val('');
        $("#streetName").val('');
        $("#suburb").val('');
        $("#city").val('');
        $("#postalCode").val('');
        $("#telephoneNumber").val('');
        $("#emailAddress").val('');
        $("#passwordSignUp").val('');
        $("#usernameSignUp").val('');
      } else {
          $(".message").html('<div class=info>'+data.message+'</div>');
      }
      window.location.href="https://cocamzansi.com";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });

$(document).on("click","#submitResponseCompleteRequestModal",function(){
        $.ajax({
      type: "PUT",
      url: "https://cocamzans.com:8443/v1/updateRequest",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
  "createDateTime": "2020-04-05T18:28:30.878Z",
  "requestId": $("#requestIdCompleted").val(),
  "requestMessage": "string",
  "status": $('input[name="status"]:checked').val(),
  "userModelFromId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": 0
  },
  "userModelToId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": $("#userFromId").val()
  }
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
        $(".message").html('<div class=success>'+data.message+'</div>');
        // $( "#foo" ).trigger( "click" );
        setInterval(function () {   }, 3000);
        $(".ui-dialog-titlebar-close").trigger("click")
        $("#firstName").val('');
        $("#lastName").val('');
        $("#streetNumber").val('');
        $("#streetName").val('');
        $("#suburb").val('');
        $("#city").val('');
        $("#postalCode").val('');
        $("#telephoneNumber").val('');
        $("#emailAddress").val('');
        $("#passwordSignUp").val('');
        $("#usernameSignUp").val('');
      } else {
          $(".message").html('<div class=info>'+data.message+'</div>');
      }
      window.location.href="https://cocamzansi.com";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });

 $(document).ready(function () {
 $(document).on('click','.confirm-request',function(){
    var requestId  = $(this).parent().attr('id');
    console.log($(this).parent().attr('id'));
    console.log("Masande");
    $("#userFromId").val($("#userLoggedInId").html());
    $("#requestId").val(requestId);
    $("#requestIdConfirm").val(requestId);
    $("#userToId").val($(this).parent().attr('id'));

    // $(".dialog-user-request").html('<div id="dialogUserRequest" title="Send request">'+
    //               '<div id="form">'+
    //                '<div id="textMessage">'+
    //                ''+
    //                '</div>'+

    //               '<p>Please select your response:</p>'+
    //               '<input type="radio" id="accept" name="status" value="1">'+
    //               '<label for="male">Accept</label><br>'+
    //               // '<input type="radio" id="wait" name="status" value="2">'+
    //               // '<label for="female">Done</label><br>'+
    //               // '<input type="radio" id="reject" name="status" value="0">'+
    //               // '<label for="other">Reject</label>'+
    //                '<div class="form-field"></input>'+
    //                ' <input type="text" name="requestId" hidden id="requestId" placeholder="requestId" class="sign-up-agent"'+
    //                'value='+
    //                 '"'+requestId+'"'+
    //                 '>'+
    //                '</div>'+
    //                ' <input type="text" name="firstname" hidden id="userFromId" placeholder="First Name" class="sign-up-agent"'+
    //                'value='+
    //                 '"'+$("#userLoggedInId").html()+'"'+
    //                 '>'+
    //                '</div>'+

    //                '<div class="form-field">'+
    //                 '<input type="text" name="lastname" hidden id="userToId" placeholder="Last Name" '+
    //                 'class="sign-up-agent"'+
    //                 'value='+
    //                 '"'+$(this).parent().attr('id')+'"'+
    //                 '>'+
    //                '</div>'+
    //                ' <div class="form-field">'+
    //                ' <input type="button" name="add-submit" value="Send request" '+
    //                ' class="add-submit" id="submitResponse">'+
    //              ' </div>'+

    //            '</div>'+
    //           '</div>')
    // $(".dialog-user-request > #dialogUserRequest").dialog({
    //     title: 'Request a provider?',
    //     close: function(event, ui)
    //     {
    //         $(this).dialog('destroy').remove();
    //     }
    // });
});
});


 $(document).ready(function() {
    //set initial state.    
    $('#carwash').change(function() {
        if($(this).is(":checked")) {
            var returnVal = confirm("Are you sure?");
            $(this).attr("checked", returnVal);
        }
    });
});


var listOfCleaningServices = [];

$(document).on("change","#carwash",function(){
if($(this).is(":checked")) {
  listOfCleaningServices.push($("#carWashId").html())
  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}
$("#textMessage").html(concStr);
} else{
const index = listOfCleaningServices.indexOf($("#carWashId").html());
if (index > -1) {
  listOfCleaningServices.splice(index, 1);
}
  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}
$("#textMessage").html(concStr); 
}
});


$(document).on("change","#housecleaning",function(){
   if($(this).is(":checked")) {
    listOfCleaningServices.push($("#housecleaningId").html())
  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}
$("#textMessage").html(concStr);
} else{
  const index = listOfCleaningServices.indexOf($("#housecleaningId").html());
if (index > -1) {
  listOfCleaningServices.splice(index, 1);
}

  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}
$("#textMessage").html(concStr);
}
});

$(document).on("change","#gardening",function(){
  if($(this).is(":checked")) {
    listOfCleaningServices.push($("#gardeningId").html())
  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}
$("#textMessage").html(concStr);
} else {
const index = listOfCleaningServices.indexOf($("#gardeningId").html());
if (index > -1) {
  listOfCleaningServices.splice(index, 1);
}

  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}

$("#textMessage").html(concStr);
}

});

function removeDuplicates(listOfCleaningServices) {
  return listOfCleaningServices.filter((a, b) => listOfCleaningServices.indexOf(a) === b)
};