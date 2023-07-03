// var one=document.getElementById("1").value
// const two=document.getElementById("2").value
// const three=document.getElementById("3").value
// const four=document.getElementById("4").value

// console.log(document.getElementById("1").value)
  
const mouse=()=>{
 var result= two+"+"+three+"+"+four
 console.log("i am working")
 console.log(result)
}


const clickevent=(first,last)=>{
    if(document.getElementById(first).value.length){
        document.getElementById(last).focus();
    }

}




const auth="http://localhost:8080/api/v1/forgot"

//post
async function sendEmail(email) {
    const response = await fetch(`${auth}/send-otp?email=${email}`, {
        method:"Post",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseText = await response.json();
    let statusCode=response.status, success=response.ok;
    if(!success){
        window.alert("email is sent.........")
        document.getElementById("otp").style.display="block";
    }
    else{
        window.alert("somthing is worng")  
    }
}


async function verifyOtp(otp) {
    const response = await fetch(`http://localhost:8080/api/v1/forgot/verify-otp?otp=${otp}`, {
        method:"Post",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseText = await response.json();
    let statusCode=response.status, success=response.ok;
    if(!success){
        window.alert("otp is match.........")
        document.getElementById("new_password").style.display="block";
    }
    else{
        window.alert("somthing is worng")  
    }
}


const otpblock=()=>{
    var email=document.querySelector("#email").value.trim();
    console.log(email)
    sendEmail(email);
}


const new_password=()=>{
    var one=document.querySelector("#one").value.trim();
    var two=document.querySelector("#two").value.trim();
    var three=document.querySelector("#three").value.trim();
    var four=document.querySelector("#four").value.trim();
    var result=one.concat(two,three,four)
    var otp=parseInt(result);
    console.log(otp)
    console.log(typeof(otp))
    console.log("i am working")
    verifyOtp(otp)
}

