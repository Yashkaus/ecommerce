
  var token=localStorage.getItem("mytoken")
  let user=localStorage.getItem("user_object")
  let user1=JSON.parse(user)
  console.log(user1.firstName)

let data="";
data+=`
<form id="edit-profile">
<div class="row">
         <label style="    text-align: left; color: chocolate;">First-Name :</label>
        <input  type="text" name="firstName" value="${user1.firstName}"   minlength="2"
        autocomplete="off" required="true"/><span class="validity"></span>

        <label style="    text-align: left; color: chocolate;" >Last-Name :</label>
        <input type="text" name="lastName" value="${user1.lastName}" autocomplete="off" required="true" minlength="2"></span>

        <label style="    text-align: left; color: chocolate;">Email :</label>
        <input type="email" name="email" value="${user1.email}" autocomplete="off" required="true"></span>

        <label style="    text-align: left; color: chocolate;">Phone :</label>
        <input type="number" name="phone"value="${user1.phone}" autocomplete="off" required="true" minlength="10" maxlength="10"></span>
        </div>

        
<div class="row">
    <div class="col-md-12">
        <button type="submit" id="submit" class="btn btn-success" style="margin-top: 10px;"><i class="fas fa-pencil-alt"></i>&nbsp;Edit</button>
    </div>
</div>
</form>
`
document.getElementById('edit-pp').innerHTML=data;



  
  //put
  const get_user = "http://localhost:8080/api";
  async function update(object) {
      const response = await fetch(`${get_user}/Customer/updateCustomer/${user1.id}`,{
        method: 'PUT',
        body: JSON.stringify(object),
        headers: {
          'Content-Type': 'application/json',
          "Authorization":`${token}`
        }
      });
      const responseText = await response.json();
      let statusCode=response.status,success=response.ok;
      if(!success){
        window.alert(`something went worng plzz try again  ${responseText.message}`)
      }else{
        window.alert("profile update succesfully")
        window.location.href="ProfileIndex.html"
      }

      console.log(responseText)
    }



const element = document.getElementById("edit-profile");
    
element.addEventListener("submit", callbackFunction1);
function callbackFunction1(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    console.log(myFormData)

    const object = Object.fromEntries(myFormData.entries());
   console.log(object);
   update(object)
}