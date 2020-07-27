 $(document).ready(function () {

 $(document).on('click','.on-route-request',function(){

    var requestId  = $(this).parent().attr('id');
    console.log($(this).parent().attr('id'));
    console.log("Masande");
    $("#userFromId").val($("#userLoggedInId").html());
    $("#requestId").val(requestId);
    $("#requestIdOnRoute").val(requestId);
    $("#userToId").val($(this).parent().attr('id'));

  console.log("on-route-request");
    var requestId  = $(this).parent().attr('id');

    $(".userFromId").val($("#userLoggedInId").html());
    $(".requestId").val(requestId);
    $(".userToId").val($(this).parent().attr('id'));

    console.log($("#userLoggedInId").html());
    console.log(requestId);
    console.log("on-route-request");


    // $(".dialog-user-request").html('<div id="dialogUserRequest" title="Send request">'+
    //               '<div id="form">'+
    //                '<div id="textMessage">'+
    //                ''+
    //                '</div>'+
    //               '<input type="radio" id="wait" name="status" value="2">'+
    //               '<label for="female">Arrived</label><br>'+
    //               '<input type="radio" id="reject" name="status" value="0">'+
    //               '<label for="other">Cancel</label>'+
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


  $(document).on('click','.arrived-request',function(){
     
    var requestId  = $(this).parent().attr('id');
    $(".userFromId").val($("#userLoggedInId").html());
    $(".requestId").val(requestId);
    $(".userToId").val($(this).parent().attr('id'));
     $("#requestIdArrived").val($(this).parent().attr('id'));

    console.log($("#userLoggedInId").html());
    console.log(requestId);
    console.log("arrived-request");

    // var requestId  = $(this).parent().attr('id');
    // $(".dialog-user-request").html('<div id="dialogUserRequest" title="Send request">'+
    //               '<div id="form">'+
    //                '<div id="textMessage">'+
    //                ''+
    //                '</div>'+
    //               '<input type="radio" id="wait" name="status" value="3">'+
    //               '<label for="female">Start</label><br>'+
    //               '<input type="radio" id="reject" name="status" value="0">'+
    //               '<label for="other">Cancel</label>'+
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


  $(document).on('click','.started-request',function(){
  
    var requestId  = $(this).parent().attr('id');
    $(".userFromId").val($("#userLoggedInId").html());
    $(".requestId").val(requestId);
    $(".userToId").val($(this).parent().attr('id'));

    $("#requestIdStarted").val(requestId);


    console.log($("#userLoggedInId").html());
    console.log(requestId);
    console.log("started-request");
    // $(".dialog-user-request").html('<div id="dialogUserRequest" title="Send request">'+
    //               '<div id="form">'+
    //                '<div id="textMessage">'+
    //                ''+
    //                '</div>'+
    //               '<input type="radio" id="wait" name="status" value="4">'+
    //               '<label for="female">Complete</label><br>'+
    //               '<input type="radio" id="reject" name="status" value="0">'+
    //               '<label for="other">Cancel</label>'+
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


  $(document).on('click','.complete-request',function(){
  
    var requestId  = $(this).parent().attr('id');
    $(".userFromId").val($("#userLoggedInId").html());
    $(".requestId").val(requestId);
    $(".userToId").val($(this).parent().attr('id'));
    

    $("#requestIdCompleted").val(requestId);


    
    console.log($("#userLoggedInId").html());
    console.log(requestId);
    console.log("complete-request");
    
    // $(".dialog-user-request").html('<div id="dialogUserRequest" title="Send request">'+
    //               '<div id="form">'+
    //                '<div id="textMessage">'+
    //                ''+
    //                '</div>'+
    //               '<input type="radio" id="wait" name="status" value="5">'+
    //               '<label for="female">Completed</label><br>'+
    //               '<input type="radio" id="reject" name="status" value="0">'+
    //               '<label for="other">Cancel</label>'+
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