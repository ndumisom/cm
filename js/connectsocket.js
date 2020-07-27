/* Create the required full WebSocket URL from a path component
*/
function wsURL(path) {
    var l = "localhost";
    l.port = 8080;
    if(path == undefined) path = l.pathname;
    return  "wss://cocamzans.com/ws/websocket"
};


/* AJAX service factory function (the AJAX client library).  
   createAjax Args:
     service: the URI (relative path) to the AJAX WebSocket server resource
     onopen: A callback that is called when the AJAX library is ready
     onclose: A callback that is called should the WebSocket connection go down.
  Note: A new AJAX client library must be created should the socket
  connection go down.

   This function connects to the server using WebSocket and returns
   the AJAX function:
     ajax(callback, REST-URI, ...args)
       callback: the callback function that is called when an AJAX
                 response is received. The callback receives two
                 arguments, the response data and an error code. The
                 response data is null on error and the error code is
                 set.
      REST-URI: the server side service to call, example: 'math/add'
      ...args: the arguments sent to the server side service, if any.
*/
function createAjax(service,onopen,onclose) {
   var sock = new WebSocket(wsURL("/ws"));
   sock.onopen=onopen;
   sock.onclose=onclose;
   var callbacks={} // saved ajax callbacks: key=id, val=function
   /* WebSocket data received from server. Convert the JSON response to
      an object, find the AJAX callback, and call the callback.
   */
   sock.onmessage = function(e) {
       var resp=JSON.parse(e.data); // Convert the JSON response to an object
      var callback=callbacks[resp.rpcID]; // Find the callback
      delete callbacks[resp.rpcID]; // Release
      callback(resp.rsp, resp.err); // Call the callback function
   };
   // Return function used for sending AJAX requests.
   return function(callback, service, ...args) {
      if(typeof callback != "function") throw("Missing callback");
      var rpcID; // Find a unique ID
      do {
         rpcID=Math.floor(Math.random() * 100000);
      } while(callbacks[rpcID]); // while collisions
      callbacks[rpcID]=callback; // Save callback, where rpcID is the key.
      // Convert to JSON and send data to server.
      sock.send(JSON.stringify({rpcID:rpcID,service:service,args:args}));
   };
}; // End 'create