

fetch("http://localhost:3000/product")
.then((res)=>{
   return res.json();
})
.then((res)=>{
document.querySelector(".productBox").innerHTML=view(res);

})
.catch((err)=>{
   console.log(err);
})

function view(arr)
{
 return arr.map((el,ind)=>{
      return`

    <div class="box">
    <div class="img">
        <img src="${el.img}" alt="">
    </div>
    <div class="text">
        <p id="p3">"${el.name}"</p>
        <p id="p4">"${el.price}"</p>
  <button onclick="add(${el.id})" id="btn10">Add To Cart</button>
   

    </div>
</div>
      `

     let count=1
     let a;

    


   }).join("")
}

function add(id)
{
   fetch(`http://localhost:3000/product/${id}`)
   .then((res)=>{
      return res.json();
   })
   .then((res)=>{
      console.log(res);
      posting(res)
      
   })
   .catch((err)=>{
      console.log(err);
      
   })
}


function posting(obj)
{
   fetch(`http://localhost:3000/cart`,{
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
   })
   .then((res)=>{
      return res.json();
   })
   .then((res)=>{
      console.log(res);
      
   })
   .catch((err)=>{
      console.log(err);
      
   })
}



