const token=localStorage.getItem("mytoken")
// const jwt1 =JSON.parse(window.atob(token.split('.')[1]))
// var exptime=jwt1.exp
// console.log(exptime)


if(token !=null || token !=undefined){
  document.getElementById("loginid").style.display="none";
  document.getElementById("sinupid").style.display="none";
}

 const Displaypage=(userid)=>{
  console.log(userid);
  sessionStorage.setItem("id",userid)
  window.location.href="Display.html"
 }


 const isprofilelogin=()=>{
  //window.alert(`i am runing ${token}`)
  if(token !=null || token !=undefined){
      window.location.href="ProfileIndex.html"
  }
  else{
       window.location.href="login.html"
  }
}

const iscart=()=>{
  //window.alert(`i am runing ${token}`)
  if(token !=null || token !=undefined){
      window.location.href="cart.html"
  }
  else{
       window.location.href="login.html"
  }
}

const seemore=(data)=>{
  localStorage.setItem("categoryid",data);
  window.location.href="SeeMore.html"
}

// const expire=()=>{
//   if(Date.now()>=exptime*1000){
//     var token=localStorage.removeItem("mytoken")
//     localStorage.removeItem("user_object")
//     localStorage.removeItem("user")
//   }else{
//     console.log("not expire")
//   }
// }
// expire()





// for url
const api_url = "http://localhost:8080/api";


// // for get all products whit category
// const getBTCPrice=async()=> {
//     const response = await fetch(api_url+`/products/allProducts`);
//     const data = await response.json();
//     console.log(data)
//     console.log((data.length-(data.length-4)))
// };
// getBTCPrice()
 /*  //show data on web page
   let data1="";
   data.slice(0, 4).map((values)=>{
     data1+=`
     <div class="card1">
     <div class="container">
     <div class="card">
       <div class="imgBx">
         <img src="http://localhost:8080/api/products/student/image/${values.image}" style="width:auto;height:200px;">
       </div>
       <div class="contentBx">
         <h2>${values.name}</h2>
         <div class="size">
         <h3>Price :</h3>
         <span><h3>${values.price}</h3></span>
       </div>
         <div class="size">
           <h3>Size :</h3>
           <span>7</span>
           <span>8</span>
           <span>9</span>
           <span>10</span>
         </div>
         <div class="color">
           <h3>Color :</h3>
           <span></span>
           <span></span>
           <span></span>
         </div><button>
         <a href="#">Buy Now</a>
         </button>
         <button>
         <a href="#">Add to Card</a>
     </button>
       </div>
     </div>
   </div>
 </div>
</div>
     </div>`
   });
    document.getElementById('cards1').innerHTML=data1;
  };
  getBTCPrice()


const trying=()=> {
  alert("i am working.............")
  window.location.href="SeeMore.html"
}
 */



// get products by id 


// for get the products by category id

// id=1

const getProductBYCategryId0=async()=> {
  const response = await fetch(api_url+`/products/category/1/product`);
  const data = await response.json();
  console.log(data)

 //show data on web page
 let data1="";
 data.slice(data.length-8, data.length).map((values)=>{
   data1+=`
   <div class="card1">
   <div class="container">
       <div class="card">
         <div class="imgBx">
           <img src="http://localhost:8080/api/products/student/image/${values.image1}">
         </div>
         <div class="contentBx">
           <h2>${values.name}</h2>
           <div class="size">
             <h3>Size :</h3>
             <span>7</span>
             <span>8</span>
             <span>9</span>
             <span>10</span>
           </div>
           <div class="color">
             <h3>Color :</h3>
             <span></span>
             <span></span>
             <span></span>
           </div>
           <a href="#" onclick="Displaypage(${values.id})">Buy Now</a>
           <a href="#" onclick="checkbeforeCart(${values.id})">Add to Card</a>
         </div>
       </div>
     </div>
   </div>`
 });
  document.getElementById('cards1').innerHTML=data1;
};
getProductBYCategryId0()


// id=2

const getProductBYCategryId1=async()=> {
  const response = await fetch(api_url+`/products/category/2/product`);
  const data = await response.json();
  console.log(data)

 //show data on web page
 let data1="";
 data.slice(data.length-8, data.length).map((values)=>{
   data1+=`
   <div class="card1">
   <div class="container">
       <div class="card">
         <div class="imgBx">
           <img src="http://localhost:8080/api/products/student/image/${values.image1}">
         </div>
         <div class="contentBx">
           <h2>${values.name}</h2>
           <div class="size">
             <h3>Size :</h3>
             <span>7</span>
             <span>8</span>
             <span>9</span>
             <span>10</span>
           </div>
           <div class="color">
             <h3>Color :</h3>
             <span></span>
             <span></span>
             <span></span>
           </div>
           <a href="#" onclick="Displaypage(${values.id})">Buy Now</a>
           <a href="#" onclick="checkbeforeCart(${values.id})">Add to Card</a>
         </div>
       </div>
     </div>
   </div>`
 });
  document.getElementById('cards2').innerHTML=data1;
};
getProductBYCategryId1()


// id=3

const getProductBYCategryId2=async()=> {
  const response = await fetch(api_url+`/products/category/3/product`);
  const data = await response.json();
  console.log(data)

 //show data on web page
 let data1="";
 data.slice(data.length-8, data.length).map((values)=>{
   data1+=`
   <div class="card1">
   <div class="container">
       <div class="card">
         <div class="imgBx">
           <img src="http://localhost:8080/api/products/student/image/${values.image1}">
         </div>
         <div class="contentBx">
           <h2>${values.name}</h2>
           <div class="size">
             <h3>Size :</h3>
             <span>7</span>
             <span>8</span>
             <span>9</span>
             <span>10</span>
           </div>
           <div class="color">
             <h3>Color :</h3>
             <span></span>
             <span></span>
             <span></span>
           </div>
           <a href="#" onclick="Displaypage(${values.id})">Buy Now</a>
           <a href="#" onclick="checkbeforeCart(${values.id})">Add to Card</a>
         </div>
       </div>
     </div>
   </div>`
 });
  document.getElementById('cards3').innerHTML=data1;
};
getProductBYCategryId2()


// id=0

const getProductBYCategryId3=async()=> {
  const response = await fetch(api_url+`/products/category/4/product`);
  const data = await response.json();
  console.log(data)

 //show data on web page
 let data1="";
 data.slice(data.length-8, data.length).map((values)=>{
   data1+=`
   <div class="card1">
   <div class="container">
       <div class="card">
         <div class="imgBx">
           <img src="http://localhost:8080/api/products/student/image/${values.image1}">
         </div>
         <div class="contentBx">
           <h2>${values.name}</h2>
           <div class="size">
             <h3>Size :</h3>
             <span>7</span>
             <span>8</span>
             <span>9</span>
             <span>10</span>
           </div>
           <div class="color">
             <h3>Color :</h3>
             <span></span>
             <span></span>
             <span></span>
           </div>
           <a href="#" onclick="Displaypage(${values.id})">Buy Now</a>
           <a href="#" onclick="checkbeforeCart(${values.id})">Add to Card</a>
         </div>
       </div>
     </div>
   </div>`
 });
  document.getElementById('cards4').innerHTML=data1;
};
getProductBYCategryId3()


// id=0

const getProductBYCategryId4=async()=> {
  const response = await fetch(api_url+`/products/category/5/product`);
  const data = await response.json();
  console.log(data)

 //show data on web page
 let data1="";
 data.slice(data.length-8, data.length).map((values)=>{
   data1+=`
    <div class="card1">
   <div class="container">
       <div class="card">
         <div class="imgBx">
           <img src="http://localhost:8080/api/products/student/image/${values.image1}">
         </div>
         <div class="contentBx">
           <h2>${values.name}</h2>
           <div class="size">
             <h3>Size :</h3>
             <span>7</span>
             <span>8</span>
             <span>9</span>
             <span>10</span>
           </div>
           <div class="color">
             <h3>Color :</h3>
             <span></span>
             <span></span>
             <span></span>
           </div>
           <a href="#" onclick="Displaypage(${values.id})">Buy Now</a>
           <a href="#" onclick="checkbeforeCart(${values.id})">Add to Card</a>
         </div>
       </div>
     </div>
   </div>`
 });
  document.getElementById('cards5').innerHTML=data1;
};
getProductBYCategryId4()






function onmouse(){
  console.log("working.............")
  window.location.href="search.html"
 }
 

 
 var userid=localStorage.getItem("user")

 const checkbeforeCart=(id)=>{
    if(userid==null || id==null){
      location.href="login.html"
    }else{
      addToCart(id)
    }
 } 

   //post
async function addToCart(id) {
  const response = await fetch(`${api_url}/Carts/addCart/customers/${userid}/products/${id}`,{
    method: 'POST',
   // body: JSON.stringify(object),
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
      window.location.href="Cart.html"
      
  }
}
 

const jwt1 =JSON.parse(window.atob(token.split('.')[1]))
var exptime=jwt1.exp
console.log(exptime)

const expire=()=>{
  if(Date.now()>=exptime*1000){
    var token=localStorage.removeItem("mytoken")
    localStorage.removeItem("user_object")
    localStorage.removeItem("user")
    sessionStorage.removeItem("id")
    localStorage.removeItem("categoryid")
    location.reload()
  }else{
    console.log("not expire")
  }
}
expire()