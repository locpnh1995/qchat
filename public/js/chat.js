window.onload = function() {

    var socket = io();
    var textInput = document.getElementById("text-input");
    var formChat = document.getElementById("chat-form");
    var chatContent = document.getElementById("chat-content");

    socket.on('message', function (data) {
        if(data.message) {
            var html = '';
            html = data.message+ "<br/>";
            chatContent.innerHTML+= html;            
        } else {
            console.log("There is a problem:", data);
        }
    });

    formChat.onsubmit = function() {
        var text = textInput.value;
        socket.emit('send', { message: text});
        textInput.value="";
        return false;
    };

}