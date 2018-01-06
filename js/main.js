$(function(){
	var text = null;
	$("#btnEnviar").click(function(e) {
		e.preventDefault();
        text = $("#comment").val();
        var Message = Parse.Object.extend("Message");
		var message = new Message();
		message.set("text", text);
		message.save(null, {
		  success: function(message) {
		    alert("Message send with success!");
		    location.reload();
		  },
		  error: function(message, error) { 
		    alert('Failed to send your message, error: ' + error.message);
		  }
		});
    });
});