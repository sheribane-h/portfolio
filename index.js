
        
function Validate(){
  
   let message=document.getElementById('message').value;
   let name=document.getElementById('name').value;
   let email=document.getElementById('email').value;
   let myForm=document.getElementById('myForm').value;

    if (name == "") {
    alert("Please provide your name.");
    name.focus();
    return false;
    }
    else if(email==""){
        alert("Please provide your email.");
    email.focus();
    return false;

    }
    else if(message==""){
        alert("You can't send an empty message.");
    message.focus();
    return false;

    }
    else 
    return true;
}




