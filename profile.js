/*-----------------------------------------------------------------------*/
/********************************** Logout ******************************* */

var token=localStorage.getItem("mytoken")
logout=()=>{
    window.alert("are you sure")
    var token=localStorage.removeItem("mytoken")
    localStorage.removeItem("user_object")
    localStorage.removeItem("user")
    sessionStorage.removeItem("id")
    localStorage.removeItem("categoryid")
    window.location.href="index.html"
}

 const isprofilelogin=()=>{
    window.alert("i am runing"+parameter)
    if(token !==null || token!=undefined){
        window.location.href="profile.html"
    }
    else{
        window.location.href="login.html"
    }
}



const get_user = "http://localhost:8080/api";
var userid=localStorage.getItem("user")
console.log(userid)
var token=localStorage.getItem("mytoken")

// for get all products whit category
const getUserById=async()=> {
    const response = await fetch(get_user+`/Customer/getCustomer/${userid}`,{
        headers:{
            'Content-Type': 'application/json',
            "Authorization":`${token}`
        }
    });
    var data = await response.json();
    console.log(data)
    let person={
        id:data.id,
        firstName:data.firstName,
        lastName:data.lastName,
        phone:data.phone,
        email:data.email
    }
   
    window.localStorage.setItem("user_object",JSON.stringify(person))


 //show data on web page
     let data1="";
       data1+=`
<div class="row">
<div class="col-md-12">
    <div class="card user-card">
        <div class="col-md-6"><a class="anone" href="Index.html"><i class="fa fa-long-arrow-left"></i><span>&nbsp; Back</span></a></div>
        <div class="card-header">
            <h5>Profile</h5>
        </div>
        <div class="card-block">
            <div class="user-image">
                <img src="images-default/default-user.png.png" class="img-radius" alt="User-Profile-Image">
            </div>
            <h6 class="f-w-600 m-t-25 m-b-10">${data.firstName}-${data.lastName}</h6>
            <p class="text-muted">Active | Customer</p>
            <hr>
            <p class="text-muted m-t-15">Activity Level: 87%</p>
            <ul class="list-unstyled activity-leval">
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li></li>
                <li></li>
            </ul>
            <div class="bg-c-red counter-block m-t-10 p-20">
                <div class="row">
                    <div class="col-5"><a href="EditProfile.html">
                        <i class="fa fa-user"></i>
                        <p>My Profile</p></a>
                    </div>
                    <div class="col-5"><a href="OrderList.html">
                        <div class="icons"style="color:white;">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <p>My Order</p></a></div>
                    </div>
                    <div class="col-5"><a href="">
                        <i class="fa fa-bell-o" aria-hidden="true"></i>
                        <p>Notification</p>
                    </a>
                    </div>
                    <div class="col-5"><a href="">
                        <i class="fa fa-location-arrow" aria-hidden="true"></i>
                        <p>Address</p>
                    </a>
                    </div>
                    <div class="col-5"><a href="">
                        <i class="fa fa-cog" aria-hidden="true"></i>
                        <p>Setting</p>
                    </a>
                    </div>
                    <div class="col-5"><a href="">
                        <i class="fa fa-gift" aria-hidden="true"></i>
                        <p>Gift</p>
                    </a>
                    </div>
                </div>
            </div>
           
            <div class="btn">
                <a href="#" class="btn btn-info btn-lg"onclick="logout()">
                    <span class="glyphicon glyphicon-log-out"></span> Log out
                  </a>
            </div>
        </div>
    </div>`

         document.getElementById('profile_Id').innerHTML=data1;
  };
  getUserById()
  let user=window.localStorage.getItem("user_object")
  let user1=JSON.parse(user)
  console.log(user1.firstName)
  
 

//   //put
//   async function login() {
//       const response = await fetch(`${get_user}/Customer/updateCustomer/${userid}`,{
//         method: 'PUT',
//         body: JSON.stringify(),
//         headers: {
//           'Content-Type': 'application/json',
//           "Authorization":`${token}`
//         }
//       });
//       const responseText = await response.json();
//       console.log(responseText)
//     }
   

//    const element2 = document.getElementById("update");
//    /*
//    element2.addEventListener("submit", callbackFunction1);
//    function callbackFunction1(event) {
//        event.preventDefault();
//        const myFormData = new FormData(event.target);
//        console.log(myFormData)
   
//        const object = Object.fromEntries(myFormData.entries());
//        console.log(object);*/
//        login()
       
//  //  };



