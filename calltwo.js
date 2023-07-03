const api_url = "http://localhost:8080/api";

const getBTCPrice=async()=> {
    const response = await fetch(api_url+`/Carts/customer/${2}/Cart`);
    const data = await response.json();
    console.log(data)
    console.log(data[0].product.id)

     console.log("second api start")

     const response2=await fetch(api_url+`/products/getProductById/${data[0].product.id}`);
     const data2=await response2.json();
     console.log(data2)
};
getBTCPrice()
