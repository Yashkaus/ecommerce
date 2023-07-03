const form=document.getElementById('form');
const firstName=document.getElementById('firstName');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const lastName=document.getElementById('lastName');
const password=document.getElementById('password');

const vc=()=>{
var one=document.getElementById("1").value
var two=document.getElementById("2").value
var three=document.getElementById("3").value
var four=document.getElementById("4").value

if(one==="" || two==="" || three==="" || four==="" ){
    console.log("empty")
}else{
 console.log(typeof(two))
 var result=one.concat(two,"",three)
 var intml=parseInt(result)
 console.log(typeof(intml))
 console.log(result)
}
}


function setErrormsg(input,errormsgs) {
    const formControl=input.parentElement;
    console.log(input.parentElement)
    console.log("working")
    const small=formControl.querySelector('small');
    formControl.className="form-control1  error";
    small.innerText=errormsgs; 
}

function  setSuccess(input){
    const formControl=input.parentElement;
    console.log(input.parentElement)
    console.log("working")
    formControl.className="form-control1 success";
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    Validate();
    successMsg()
})


// singhup file
const auth="http://localhost:8080/api/v1/auth"

//post
async function register(object) {
    const response = await fetch(`${auth}/register`, {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseText = await response.json();
    let statusCode=response.status, success=response.ok;
    if(!success){
        window.alert("email or phone already exist")
    }
    else{
        window.alert("you are succesfully register")
        console.log(responseText); // logs 'OK'
        window.location.href="index.html"
        
    }
}

const sendData=(sRate,count)=>{
    if(sRate===count){
        const myFormData = new FormData();
        myFormData.append('firstName',`${firstName.value.trim()}`)
        myFormData.append('lastName',`${lastName.value.trim()}`)
        myFormData.append('phone',`${phone.value.trim()}`)
        myFormData.append('email',`${email.value.trim()}`)
        myFormData.append('password',`${password.value.trim() }`)
        const object = Object.fromEntries(myFormData.entries());
        console.log(object)
        register(object)
    }
}


const successMsg=()=>{
    let formCon=document.getElementsByClassName('form-control1');
    var count=formCon.length-1;
    for (var i = 0; i < formCon.length; i++) {
        if(formCon[i].className==="form-control1 success"){
        var sRate=0+i;
        console.log(sRate);
        sendData(sRate,count);
        }else{
            return false;
        }
        
    }
}


const isEmail=(emailval)=>{
    var atSymbol=emailval.indexOf("@");
    if(atSymbol<1)return false;
    var dot=emailval.lastIndexOf('.');
    if(dot<=atSymbol+2)return false;
    if(dot===emailval.length-1)return false;
    return true;
}

const Validate=()=>{
const firstNameval=firstName.value.trim()
const emailval=email.value.trim()
const phoneval=phone.value.trim()
const passwordval=password.value.trim()
const lastNameval=lastName.value.trim()

if(firstNameval===""){
    setErrormsg(firstName,"username cannot be blank");
}else if(firstNameval.length<=2){
    setErrormsg(firstName,"username min 3 char");
}else{
    setSuccess(firstName);
}

if(lastNameval===""){
    setErrormsg(lastName,"username cannot be blank");
}else if(lastNameval.length<=2){
    setErrormsg(lastName,"username min 3 char");
}else{
    setSuccess(lastName);
}

if(emailval===""){
    setErrormsg(email,"email cannot be blank");
}else if(!isEmail(emailval)){
    setErrormsg(emailval,"not valid email");
}else{
    setSuccess(email);
}


if(phoneval===""){
    setErrormsg(phone,"Phone Number Cannot be blank")
}else if(phoneval.length!=10){
setErrormsg(phone,"Not a Valid Phone Number")
}
else{
    setSuccess(phone)
}

if(passwordval===""){
    setErrormsg(password,"Password Cannot be blank")
}else if(passwordval.length<=4 || passwordval.length==8){
setErrormsg(password,"Not a Valid Phone Number")
}else{
    setSuccess(password)
}
//successMsg()
}


const clickevent=(first,last)=>{
    if(document.getElementById(first).value.length){
        document.getElementById(last).focus();
    }
}

