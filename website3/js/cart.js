



fetch(`http://localhost:3000/cart`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    Total(res)
   document.querySelector(".main").innerHTML=view(res)
 
    
})
.catch((err)=>{
    console.log(err);
    
})

function Total(res){
    let sum = 0;
    res.forEach(element => {
        sum+= parseInt(element.price)
    });
    // return sum;
    document.querySelector(".total").innerText = sum;
}

function view(arr) {
    return arr.map((el, ind) => {
        return `
        <div class="row" id="back2">
            <div class="col-5" id="back1">
                <img src="${el.image}" alt="" id="img10">
            </div>
            <div class="col-7" id="back1">
                <p>${el.Brand}</p>
                <p>${el.title}</p>
                <p>${el.color}</p>
                <p>${el.price}</p>
            </div>
        </div>
        `
    }).join(" ");
}

// function view(arr)
// {
//     return arr.map((el,ind)=>{
        
//     })
// }