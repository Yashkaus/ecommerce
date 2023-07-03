// get the products for api

var id=sessionStorage.getItem("id")
var userid=localStorage.getItem("user")
var token=localStorage.getItem("mytoken")
console.log(userid)
console.log(id)

const get_product = "http://localhost:8080/api";
const getBTCPrice=async()=> {
    const response = await fetch(get_product+`/products/getProductById/${id}`,{
        headers:{
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
     showdata(data);
};
getBTCPrice()



   const showdata=(data)=>{
   let data1="";
    data1+=`
    <form id="id1">
    <div class="container">
    <div class="card">
        <div class="container-fliud">
            <div class="wrapper row">
                <div class="preview col-md-6">
                    
                    <div class="preview-pic tab-content">
                      <div class="tab-pane active" id="pic-1"><img src="http://localhost:8080/api/products/student/image/${data.image1}"  id="myimage" style="    width: 100%;
                        height: 400px;"/></div>
                    </div>
                    <ul class="preview-thumbnail nav nav-tabs">
                      <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://localhost:8080/api/products/student/image/${data.image1}" onmousedown="changeimage('${data.image1}')" style=" height: 80px; width: 150px; border: 2px solid black;"/></a></li>
                      <li><a data-target="#pic-2" data-toggle="tab"><img src="http://localhost:8080/api/products/student/image/${data.image2}"  onmousedown="changeimage('${data.image2}')" style=" height: 80px; width: 150px; border: 2px solid black;"/></a></li>
                      <li><a data-target="#pic-3" data-toggle="tab"><img src="http://localhost:8080/api/products/student/image/${data.image3}" onmousedown="changeimage('${data.image3}')" style=" height: 80px; width: 150px; border: 2px solid black;"/></a></li>
                      <li><a data-target="#pic-4" data-toggle="tab"><img src="http://localhost:8080/api/products/student/image/${data.image4}" onmousedown="changeimage('${data.image4}')" style=" height: 80px; width: 150px; border: 2px solid black;"/></a></li>

                    </ul>
                    
                </div>
                <div class="details col-md-6">
                    <h3 class="product-title">${data.name}</h3>
                    <div class="rating">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <span class="review-no">41 reviews</span>
                    </div>
                    <p class="product-description">${data.detail}</p>
                    <h4 class="price">current price: <span>${data.price}</span></h4>
                    <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                    <h5 class="sizes">sizes:
                        <span class="size" data-toggle="tooltip" title="small">s</span>
                        <span class="size" data-toggle="tooltip" title="medium">m</span>
                        <span class="size" data-toggle="tooltip" title="large">l</span>
                        <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                    </h5>
                   <!-- <h5 class="colors">colors:
                        <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                        <span class="color green"></span>
                        <span class="color blue"></span>
                    </h5>-->
                    <div class="action">
                        <button class="add-to-cart btn btn-default" type="button" onclick="orderpage()">Buy Know</button>
                        <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                        <button class="add-to-cart btn btn-default" type="button" onclick="checkbeforeCart()">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</form>
`

    document.getElementById('display').innerHTML=data1;
  };

  const changeimage=(data)=>{
    document.getElementById("myimage").src=`http://localhost:8080/api/products/student/image/${data}`;
  }


  function orderpage(){
       if(userid==null || id==null){
         location.href="login.html"
       }else{
        location.href="BuyNow.html"
       }
  }

  const checkbeforeCart=()=>{
    if(userid==null || id==null){
      location.href="login.html"
    }else{
      addToCart()
    }
 } 


  //post
async function addToCart() {
    const response = await fetch(`${get_product}/Carts/addCart/customers/${userid}/products/${id}`,{
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
        window.alert("working")
        window.location.href="Cart.html"
        
    }
}
const element2 = document.getElementById("login");
const cart=(event)=>{
    const myFormData = new FormData();
    console.log(myFormData)

    const object = Object.fromEntries(myFormData.entries());
    console.log(object);
    
}





  ///////////////////////////////
  
 

  