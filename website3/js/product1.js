


    fetch(`http://localhost:3000/product1`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        document.querySelector(".main").innerHTML=view(res)
       
        
        
    })
    .catch((err)=>{
        console.log(err);
        
    })

    function view(arr)
    {
      

             return arr.map((el, ind) => {
                return `
                <div class="row">
                <div class=" col-12">
                          <div class="box">
                          
                               <div class="image">
                                      <img src="${el.image}" alt="Product Image">
                                          <input type="submit" name="" id="btn6" value="View"> 
                                          <input type="submit" name="" id="btn7" value="Add" onclick="add(${el.id})"> 

                                 
    
                                    
                               </div>
                               <div class="text">
                                      <p>${el.Brand}</p>
                                      <p>${el.title}</p>
                                      <p>${el.color}</p>
                                      <p>${el.price}</p>
                               </div>
                          </div>
</div>
                         
              </div>
                
                `;
            }).join("");

    }


    function add(id)
    {
        fetch(`http://localhost:3000/product1/${id}`)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            // console.log(res);
            posting(res)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

 


function posting(obj)
{
    fetch(`http://localhost:3000/cart`,{
        method : "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body : JSON.stringify(obj)
    })
    .then((Res)=>{
        return Res.json();
    })
    .then((res)=>{
        console.log(res);
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}

















