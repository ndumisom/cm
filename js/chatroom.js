var userToId = ''

 $(document).ready(function () {
 $(document).on('click','#chatId',function(){    
$(".dialog-user-chatroom").html(
'<div id="dialogUserChatRoom" title="Send request">'+
    '<div id="username-page">'+
     '   <div class="username-page-container">'+
      '      <h1 class="title">Type your username</h1>'+
       '     <form id="usernameForm" name="usernameForm">'+
        '        <div class="form-group">'+
         '           <input type="text" id="name" placeholder="Username" autocomplete="off" class="form-control" />'+
          '      </div>'+
           '     <div class="form-group">'+
            '        <button type="submit" class="accent username-submit">Start Chatting</button>'+
             '   </div>'+
           ' </form>'+
        '</div>'+
    '</div>'+

    '<div id="chat-page" class="hidden">'+
     '   <div class="chat-container">'+
      '      <div class="chat-header">'+
       '         <h2>Spring WebSocket Chat Demo</h2>'+
        '    </div>'+
         '   <div class="connecting">'+
          '      Connecting...'+
           ' </div>'+
            '<ul id="messageArea">'+

            '</ul>'+
            '<form id="messageForm" name="messageForm" nameForm="messageForm">'+
             '   <div class="form-group">'+
              '      <div class="input-group clearfix">'+
               '         <input type="text" id="message" placeholder="Type a message..." autocomplete="off" class="form-control"/>'+
                '        <button type="submit" class="primary">Send</button>'+
                 '   </div>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>'+
'</div>')

    $(".dialog-user-chatroom > #dialogUserChatRoom").load("socketTest.html").dialog({

        title: 'Chat room',
        close: function(event, ui)
        {
          window.location.href="https://cocamzansi.com";
            $(this).dialog('destroy').remove();
        },
        maxWidth:350, maxHeight: 400,width: 350,height: 400
    });

    



 });


 $( "#dialogUserChatRoom" ).hover(
  function() {
    $("#name").val($("#userLoggedIn").html())
  }
);
});