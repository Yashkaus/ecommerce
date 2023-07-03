

var quentity=document.getElementById("quentity")
var adr=document.getElementById("adr")
var city=document.getElementById("city")
var state=document.getElementById("state")
var pincode=document.getElementById("pincode")
var fname=document.getElementById("fname")
var email=document.getElementById("email")

var userid=localStorage.getItem("user")
const token=localStorage.getItem("mytoken")
var id=sessionStorage.getItem("id")
console.log(id)


const api_url = "http://localhost:8080/api";

   //post
   async function addToOrder(object) {
    alert("i am chlgo")
    const response = await fetch(`${api_url}/orders/addOrder/customer/${userid}/product/${id}`,{
      method: 'POST',
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
    }
    else{
        window.location.href="OrderList.html"
        
    }
  }

  const getBTCPrice=async()=> {
    const response = await fetch(api_url+`/products/getProductById/${id}`,{
        headers:{
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    sessionStorage.setItem("product_price",data.price)
    vart(data)
};
getBTCPrice()


const vart=(data)=>{
  var  data2="";
    data2+=`
    <p><a href="#">Product_Name</a> <span class="price">${data.name}</span></p>
      <p><a href="#">category</a> <span class="price">${data.category.categoryTitle}</span></p>
    <!--  <p><a href="#">Product 3</a> <span class="price">$8</span></p>
      <p><a href="#">Product 4</a> <span class="price">$2</span></p> -->
      <hr>
      <p>Price <span class="price" style="color:black"><b>${data.price}</b></span></p>
    `
    document.getElementById("vart").innerHTML=data2
}



const showvalues=()=>{
var quantity_value=quentity.value.trim()
var adr_value=adr.value.trim()
var city_value=city.value.trim()
var state_value=state.value.trim()
var pincode_value=pincode.value.trim()
var fname_value=fname.value.trim()
var email_value=email.value.trim()


var result=adr_value.concat("  City :",city_value,"  Pin Code :",pincode_value,"  State :",state_value)
var payment=document.querySelector('input[name="fav_language"]:checked').value.trim()

if(quantity_value ==="" || adr_value==="" || city_value==="" || state_value==="" || pincode_value==="" || payment===""
    || fname_value==="" || email_value==="" ){
    alert("fil all the fields")
}else{
    if(payment==="Card-pyament"){
        ccnum_value=document.querySelectorAll("input")[10].value
        ccnum1_value=document.querySelectorAll("input")[9].value
        ccnum2_value=document.querySelectorAll("input")[11].value
        if(ccnum_value==="" || ccnum1_value==="" || ccnum2_value===""){
            alert("payment not complete")
        }else{
            alert("payment complete")
            make_object(payment,result,quantity_value)
        }
    }else{
        make_object(payment,result,quantity_value)
    }
}

}

const make_object=(payment,result,quantity)=>{
    const myFormData = new FormData();
    myFormData.append("quantity",`${quantity}`)
    myFormData.append('address',`${result}`)
    myFormData.append('payment',`${payment}`)
    const object = Object.fromEntries(myFormData.entries());
    console.log(object)
    addToOrder(object)
}
  




 var product_price=sessionStorage.getItem("product_price")

const cash_on_delaviery=()=>{
    console.log("working.......")
     console.log(document.querySelector("#quentity").value)
    data="";
     data=`
     <h1>CASH ON DELIVERY</h1>
     <h3>Hover over the image below:</h3>
     
     <div class="flip-card">
       <div class="flip-card-inner">
         <div class="flip-card-front">
           <img src="86402-cash-on-delivery.webp" alt="Avatar" style="width:300px;height:300px;">
         </div>
         <div class="flip-card-back">
           <h1>THANKYOU.....</h1> 
           <p>HAVE A GOOD DAY</p> 
           <p>PAYMENT IS CHOOOSED</p>
         </div>
       </div>
     </div>
     <div>
     <h3>You Have To Pay : ${(document.querySelector("#quentity").value)*product_price}</h3>
     <h4>Product_price :${product_price}</h4>
      </div>
    `
    
    document.getElementById('payment').innerHTML=data;
}
  cash_on_delaviery()

const card_on_delaviery=()=>{
    console.log("working.......")
    data="";
     data=`
       <h3>Payment</h3>
      <label for="fname">Accepted Cards</label>
     <div class="icon-container">
       <i class="fa fa-cc-visa" style="color:navy;"></i>
       <i class="fa fa-cc-amex" style="color:blue;"></i>
       <i class="fa fa-cc-mastercard" style="color:red;"></i>
       <i class="fa fa-cc-discover" style="color:orange;"></i>
     </div>
     <label for="cname">Name on Card</label>
     <input type="text" id="cname" name="cardname" placeholder="John More Doe" required autocomplete="off">
     <label for="ccnum">Credit card number</label>
     <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required autocomplete="off">
     <label for="expmonth">Exp Month</label>
     <input type="text" id="expmonth" name="expmonth" placeholder="September" required autocomplete="off">
     <div class="row">
       <div class="col-50">
         <label for="expyear">Exp Year</label>
         <input type="text" id="expyear" name="expyear" placeholder="2018" required autocomplete="off">
       </div>
       <div class="col-50">
         <label for="cvv">CVV</label>
         <input type="text" id="cvv" name="cvv" placeholder="352" required autocomplete="off">
       </div>
     </div> 
     <div>
     <h3>You Have To Pay : ${(document.querySelector("#quentity").value)*product_price}</h3>
     <h4>Product_price :${product_price}</h4>
      </div>
    ` 
    document.getElementById('payment').innerHTML=data;
}

const online_on_delaviery=()=>{
    console.log("working.......")
    data="";
     data=`
     <h3>Payment</h3>
     <div class="flip-card">
       <div class="flip-card-inner">
         <div class="flip-card-front">
           <img src="different-icons-about-e-payment_23-2147676987.avif" alt="Avatar" style="width:300px;height:300px;">
         </div>
         <div class="flip-card-back">
           <h1>THANKYOU.....</h1> 
           <p>HAVE A GOOD DAY</p> 
           <p>PAYMENT IS CHOOOSED</p>
         </div>
       </div>
     </div>
     <div>
     <h3>Banck_Account :-> XXXXXXXXXXXXX5467SS</h3>
     <h4>Phone N0-> 4562419064</h4>
     <img src="qr_code_198897.jpg" alt=""  style="    height: 150px;
     margin-left: 220px;
     border: 2px solid blue"/>
     <div><span>
     <div>
     <h3>You Have To Pay : ${(document.querySelector("#quentity").value)*product_price}</h3>
     <h4>Product_price :${product_price}</h4>
      </div>
      </span>
    `
    
    document.getElementById('payment').innerHTML=data;
}

