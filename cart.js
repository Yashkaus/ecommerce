const get_user = "http://localhost:8080/api";
var userid=localStorage.getItem("user")
console.log(userid)
var token=localStorage.getItem("mytoken")

// for get all products whit category
const getCartByUserId=async()=> {
    const response = await fetch(get_user+`/Carts/customer/${userid}/Cart`,{
        headers:{
            'Content-Type': 'application/json',
            "Authorization":`${token}`
        }
    });
    var data = await response.json();
    console.log(data)
    console.log(data[0].id)
    //some functions
     numberofItem(data)
     totalcost(data)
 
 //show data on web page
     let data1="";
     data.map((values)=>{
       data1+=`
       <div class="row main align-items-center">
       <div class="col-2"><img class="img-fluid" src="http://localhost:8080/api/products/student/image/${values.product.image1}"></div>
       <div class="col">
           <div class="row text-muted">${values.product.category.categoryTitle}</div>
           <div class="row">${values.product.name}</div>
       </div>
       <div class="col">
           <div class="col" style="font-size: 19px;">&#8377;${values.product.price}</div>
       </div>
       <div class="col">
       <span class="close" style=" font-size: 25px; color: green; margin: 10px;" onclick="orderpage()"><i class="fa-solid fa-cart-shopping"></i></span>
       <span class="close" style="font-size: 25px; color: red; margin: 15px;" onclick="deletecart(${values.id})"><i class="fa-solid fa-trash"></i></span></div>
       <div>
       </div>
`
     })

         document.getElementById('cartId').innerHTML=data1;
  };
  getCartByUserId()

  
  const numberofItem=(data)=>{
    a="",b="";
    a+=`${data.length} itema`
    b+=`${data.length}`
    document.getElementById("num").innerHTML=a
    document.getElementById("num1").innerHTML=b
}

const totalcost=(data)=>{
    let cost=0;
    for (var i=0;i<data.length;i++) {
      cost+=data[i].product.price;
    }
    let totalcost=cost+50;
    document.getElementById("cost").innerHTML=cost
    document.getElementById("total_price").innerHTML=totalcost
}

// for get all products whit category
const DeleteCartById=async(id)=> {
    const response = await fetch(get_user+`/Carts/deleteCartDto/${id}`,{
        method: 'DELETE',
      //  body: JSON.stringify(object),
        headers:{
            'Content-Type': 'application/json',
            "Authorization":`${token}`
        }
    });
    const responseText = await response.json();
    console.log(responseText.message)
}

const deletecart=(id)=>{
    console.log(id)
    DeleteCartById(id)
    location.reload()
}

const orderpage=()=>{
window.location.href="BuyNow.html"
}


  