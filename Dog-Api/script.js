function view2()
{
fetch("https://dog.ceo/api/breeds/image/random")
.then((res)=>{
    return res.json();
})
.then((res)=>{
    document.querySelector(".main").innerHTML=view(res)
    // console.log(res)
})
.catch((err)=>{
    console.log(err);
    
})

function view(arr)
{
   return ` <div class="box">
    <img src="${arr.message}" alt="">
  </div>`
        
 
        
   
}
}

