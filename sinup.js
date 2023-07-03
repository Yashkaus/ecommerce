
  function setErrormsg(input,errormsgs) {
    const formControl=input.parentElement;
    console.log(input.parentElement)
    console.log("working")
    const small=formControl.querySelector('small');
    formControl.className="form-control1 error";
    small.innerText=errormsgs; 
}

function  setSuccess(input){
    const formControl=input.parentElement;
    console.log(input.parentElement)
    console.log("working")
    formControl.className="form-control1 success";
}

   
// singhup file
const auth="http://localhost:8080/api/v1/auth"

//post
async function register(object) {
    const response = await fetch(`${auth}/register`, {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json/javascript'
      }
    });
    const responseText = await response.json();
    let statusCode=response.status,success=response.ok;
    if(!success){
        window.alert("email or phone already exist")
    }
    else{
        window.alert("you are succesfully register")
        console.log(responseText); // logs 'OK'
        window.location.href="index.html"
        
    }
}

 const element = document.getElementById("register");
 element.addEventListener("submit", callbackFunction);
 function callbackFunction(event) {
     event.preventDefault();
     const myFormData = new FormData(event.target);
     console.log(myFormData)
     const object = Object.fromEntries(myFormData.entries());
     console.log(object);


     const firstName=object.firstName.trim();
     const lastName=object.lastName.trim();
     const phone=object.phone.trim();
     const email=object.email.trim();
     const password=object.phone.trim();

     console.log(`${firstName}+${lastName}+${password}+${email}+${phone}`)

     const isEmail=(emailval)=>{
        var atSymbol=emailval.indexOf("@");
        if(atSymbol<1)return false;
        var dot=emailval.lastIndexOf('.');
        if(dot<=atSymbol+2)return false;
        if(dot===emailval.length-1)return false;
        return true;
    }
    
     const Validate=()=>{

        if(firstName===""){
          console.log(firstName)
            setErrormsg(firstName,"First-Name cannot be blank");
        }else if(firstName.length<=2){
            setErrormsg(firstName,"First-Name min 3 char");
        }else{
            setSuccess(firstName);
        }
        
        if(lastName===""){
            setErrormsg(lastName,"Last-Name cannot be blank");
        }else if(lastName.length<=2){
            setErrormsg(lastName,"Last-Name min 3 char");
        }else{
            setSuccess(lastName);
        }
        
        if(email===""){
            setErrormsg(email,"email cannot be blank");
        }else if(!isEmail(email)){
            setErrormsg(email,"not valid email");
        }else{
            setSuccess(email);
        }
        
        
        if(phone===""){
            setErrormsg(phone,"Phone Number Cannot be blank")
        }else if(phone.length!=10){
        setErrormsg(phone,"Not a Valid Phone Number")
        }else{
            setSuccess(phone)
        }
        
        if(password===""){
            setErrormsg(password,"Password Cannot be blank")
        }else if(password.length<=4 || password.length>=8){
        setErrormsg(password,"Not a Valid Password ")
        }else{
            setSuccess(password)
        }
        
        }

     Validate()
     

    //  // sending otp
    //  const generateOTP=()=>{
    //     var digits='o123456789';
    //     let OTP='';
    //     for(let i=0;i<4;i++){
    //         OTP+=digits[Math.floor(Math.random()*10)]
    //     }
    //     return OTP;
    //  }

    //  var  name=generateOTP();
    //  console.log(name    )


    //  Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "abhaydagar03@gmail.com",
    //     Password : "wgdsivqzduubupld",
    //     To : '20cs1001@mvn.edu.in',
    //     From : "abhaydagar03@gmail.com", 
    //     Subject : "This is the subject",
    //     Body : "And this is the body" 
    // }).then(
    //   message => alert(message)
    // );
    

    //   setTimeout( otp=()=>{
    //     window.alert('<h1>hellow</h1>')
    //  },3000)
     
    // register(object)
     
 };

 


 
 