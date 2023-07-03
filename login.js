/*----------------------------------------------------------------------------------------------------*/
 /***********************  login api******************************/
 
 const auth="http://localhost:8080/api/v1/auth"

//post
async function login(object) {
    const response = await fetch(`${auth}/login`,{
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseText = await response.json();
    let statusCode=response.status,success=response.ok;
    if(!success){
        window.alert(`something went worng plzz try again  ${responseText.message}`)
    }
    else{
        var fulltoken=`Bearer ${responseText.token}`
        var user=responseText.user.id
        localStorage.setItem("mytoken",fulltoken)
        localStorage.setItem('user',user)
        console.log(user)
         console.log(responseText); // logs 'OK'
        window.location.href="ProfileIndex.html"
    
    }
}

 const element2 = document.getElementById("login");
 element2.addEventListener("submit", callbackFunction1);
 function callbackFunction1(event) {
     event.preventDefault();
     const myFormData = new FormData(event.target);
     console.log(myFormData)
 
     const object = Object.fromEntries(myFormData.entries());
     console.log(object);
     login(object)
     
 };