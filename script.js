const sendBtn = document.querySelector('#sendBtn') ;
const messageIn = document.querySelector('#messageIn') ;
const messageOut = document.querySelector('#messageOut') ;
sendBtn.addEventListener('click' , sendMsg)

function sendMsg () {
    let content = messageIn.value ;
    if (messageIn=== '') {
        alert ('Please enter a valid value. Current value is empty')
    }
    else {
        messageOut.innerHTML = content ;
        messageIn.value = '';
    }
}
