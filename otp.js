var one=document.getElementById("1").value
const two=document.getElementById("2").value
const three=document.getElementById("3").value
const four=document.getElementById("4").value

console.log(document.getElementById("1").value)
  
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
