let Username='';
const joinBtn = document.getElementById("btn");
const signInPage = document.getElementById("form");
const chatRoom = document.querySelector(".chatRoom");
const UsernameInput = document.getElementById("UNInput");
const user = document.getElementById('user');

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