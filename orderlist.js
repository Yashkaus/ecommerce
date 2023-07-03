const get_user = "http://localhost:8080/api";
var userid=localStorage.getItem("user")
console.log(userid)
var token=localStorage.getItem("mytoken")

// for get all products whit category
const getOrderByUserId=async()=> {
    const response = await fetch(get_user+`/orders/customer/${userid}/order`,{
        headers:{
            'Content-Type': 'application/json',
            "Authorization":`${token}`
        }
    });
    const data = await response.json();
    console.log(data)
    console.log(data.length)
    var length=data.length
    var last_update=data.lastIndexOf(data[0].id)
    console.log(last_update)

    // some functions
    forName(((data[0].customer.firstName).concat("_",data[0].customer.lastName)))
    total_price(data)
    console.log(data[data.length-1].addDate)


 //show data on web page
 let data1="";
 data.map((values)=>{
   data1+=`
   <div class="row" style="margin-top: 20px;">
   <div class="col">
   <div class="card card-2">
   <div class="card-body">
   <div class="media">
   <div class="sq align-self-center "> <img class="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src="http://localhost:8080/api/products/student/image/${values.product.image1}" width="135" height="135" /> </div>
   <div class="media-body my-auto text-right">
   <div class="row  my-auto flex-column flex-md-row">
       <div class="col my-auto"> <h6 class="mb-0">${values.product.name}</h6>  </div>
       <div class="col-auto my-auto"> <small>Price : ${values.product.price}</small></div>
       <div class="col my-auto"> <small>Payment : ${values.payment}</small></div>
       <div class="col my-auto"> <small>Qty : ${values.quantity}</small></div>
       <div class="col my-auto"><h6 class="mb-0">&#8377;${values.product.price * values.quantity}</h6>
       </div>
   </div>
   </div>
   </div>
   <hr class="my-3 ">
   <div class="row">
       <div class="col-md-3 mb-3"> <small> Track Order <span><i class=" ml-2 fa fa-refresh"  aria-hidden="true"></i></span></small> </div>
       <div class="col mt-auto">
           <div class="progress my-auto"> <div class="progress-bar progress-bar  rounded" style="width: 62%" role="progressbar" aria-valuenow="25" aria-valuemin="0"  aria-valuemax="100"></div> </div>
           <div class="media row justify-content-between ">
               <div class="col-auto text-right"><span> <small  class="text-right mr-sm-2"></small> <i class="fa fa-circle active"></i> </span></div>
               <div class="flex-col"> <span> <small class="text-right mr-sm-2">Out for delivary</small><i class="fa fa-circle active"></i></span></div>
               <div class="col-auto flex-col-auto"><small  class="text-right mr-sm-2">Delivered</small><span> <i  class="fa fa-circle"></i></span></div>
           </div>
           <div>
                <h6>Address: -> ${values.address}</h6>
           </div>
           <button class="btn1" onclick="deletecart(${values.id})"><i class="fa fa-trash"></i> Trash</button>
           <button class="btn2"><i class="fa fa-folder"></i>Re-Order</button>
       </div>
   </div>
</div>
</div>
</div>
</div>
`
 })
          document.getElementById('orderId').innerHTML=data1;
    }
      getOrderByUserId()


      const forName=(data)=>{
        document.getElementById("cn").innerHTML=data;
      }

      const total_price=(data)=>{
        var total=0;
        for(var i=0;i<data.length;i++){
            total+=(data[i].product.price * data[i].quantity)
        }

        var discount=(total/100)*10;
        console.log(discount)
        var fgst=((total-discount)/100)*18
        var gst=((total-discount)+(((total-discount)/100)*18))
        console.log(gst)

        
         var last_update=data[data.length-1].addDate
    
         document.getElementById("total").innerHTML=total;
         document.getElementById("gst").innerHTML=gst;
         document.getElementById("discount").innerHTML=discount;
         document.getElementById("fgst").innerHTML=fgst;
         document.getElementById("customer_id").innerHTML=userid;
        document.getElementById("last_update").innerHTML=last_update;
      }


      // for get all products whit category
const DeleteCartById=async(id)=> {
    const response = await fetch(get_user+`/orders/deleteOrderDto/${id}`,{
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