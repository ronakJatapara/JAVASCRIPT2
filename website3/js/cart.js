



fetch(`http://localhost:3000/cart`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
   document.querySelector(".main").innerHTML=view(res)
    
})
.catch((err)=>{
    console.log(err);
    
})



function view(arr)
{
    return arr.map((el,ind)=>{
        return`
           <div class="box10">
                 <img src="${el.image}" alt="">
           </div>`
  
    })
   

   
}
// function view(arr)
// {
//     return arr.map((el,ind)=>{
        
//     })
// }