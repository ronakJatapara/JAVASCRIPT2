fetch(`http://localhost:3000/cart`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    Total(res)
   let selectBox=document.querySelector(".selectBox").innerHTML=view(res)
    
})
.catch((err)=>{
    console.log(err);
    
})

function Total(res){
    let sum = 0;
    res.forEach(el => {
        sum+=el.price
    });
    // return sum;
    document.getElementById("total").innerText = sum;
}





function view(arr)
{
    return arr.map((el,ind)=>{
        return`
            <div class="box10">
        <div class="img1">
            <img src="${el.img}" alt="">
        </div>


            <div class="text1">
                 <p id="p5">"${el.name}"</p>

                 <p id="p6">"${el.price}"</p>

<div class="row">
    <div class="col-12">
        
        <button id="btn12">Buy</button>
        <button id="btn13">Delete</button>
    </div>
</div>
                 
            </div>

    </div>
    
        `
  
    })
   

   
}




