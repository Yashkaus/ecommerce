const token=localStorage.getItem("mytoken")


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
  if(token !=null || token !=undefined){
      window.location.href="ProfileIndex.html"
  }
  else{
       window.location.href="login.html"
  }
}

const iscart=()=>{
  if(token !=null || token !=undefined){
      window.location.href="cart.html"
  }
  else{
       window.location.href="login.html"
  }
}



// for url
const api_url = "http://localhost:8080/api";

 categoryId=localStorage.getItem("categoryid")

// for get all products whit category
const getProductById=async()=> {
    const response = await fetch(api_url+`/products/category/${categoryId}/product`,{
        headers:{
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data)
  
  //show data on web page
    let data1="";
    data.map((values)=>{
      data1+=`
      <div style=" margin: 10px; border: 2px solid red;">
      <div class="gift row">
      <div class="gift__img col-sm-3 col-12"><img src="http://localhost:8080/api/products/student/image/${values.image1}" style="height: 250px;
      width: 250px;">
          <div class="gift__rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star fa-star-half-o"></i><i class="fa fa-star fa-star-o"></i><span class="gift__rating-number">921</span></div>
      </div>
      <div class="gift__info col-sm-9 col-12">
          <h4 class="gift__name">${values.name}</h4>
          <div class="gift__details">
              <p>${values.detail}</p>
          </div>
          <div class="gift__bottom row">
              <div class="gift__price-wrap col-12 col-sm-6">
                  <div class="gift__normal-price"><span>category :&nbsp;</span><span class="gift__data">${values.category.categoryTitle}</span></div>
                  <div class="gift__today-price"><span>Today's Price:&nbsp;</span><span class="gift__data">&#8377; ${values.price}</span></div>
                  <div class="gift__rating" style="margin-right: 300px;"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star fa-star-half-o"></i><i class="fa fa-star fa-star-o"></i><span class="gift__rating-number">921</span></div>
              </div>
              <div class="gift__cta-wrap col-12 col-sm-6" style="margin-top: 140px;"><a class="flux_cta gift__cta" target="_blank"  style="transform: translate(29px);background: #ff8000;" onclick="Displaypage(${values.id})" >View Product</a></div>
          </div>
      </div>
  </div>
  </div>
  `
    });
    document.getElementById('seemore').innerHTML=data1;
  };
  getProductById()