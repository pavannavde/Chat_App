var socket = io();
let Username='';
const joinBtn = document.getElementById("btn");
const signInPage = document.getElementById("form");
const chatRoom = document.querySelector(".chatRoom");
const UsernameInput = document.getElementById("UNInput");
const user = document.getElementById('user');
const sendbtn= document.getElementById('sendbtn');
const inputmsg=document.querySelector('#inputmsg')
const msgbox=document.querySelector(".msgBox");

joinBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    Username=UsernameInput.value;
    if(Username){
        signInPage.style.display="none";
        chatRoom.style.display="flex";
        user.innerHTML=`  ${Username}.`;
    }
    else{
        alert("Please Enter Your Username");
    }
   
})

sendbtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let data = {
        id : socket.id,
        username : Username,
        message : inputmsg.value,
    }
    socket.emit("sent message",data);
    renderMessage(data,'sent');
});

 socket.on("sent message",(data) => {

    if (data.id !== socket.id){
      renderMessage(data,'recieved');
    }
  });
  

function renderMessage(data,type)
{
    var msgconatiner = document.createElement('div');
    msgconatiner.innerHTML=`${data.message}`
    if(type ==='sent'){
        msgconatiner.setAttribute("class","msg sentmsg");
    } else {
        msgconatiner.setAttribute("class","msg");
    }
   msgbox.appendChild(msgconatiner);
   inputmsg.value='';
}