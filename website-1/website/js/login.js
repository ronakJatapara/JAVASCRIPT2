


document.querySelector("#form").addEventListener("submit",(r)=>{
   r.preventDefault();

   let email=document.querySelector("#email").value;
   let password=document.querySelector("#password").value;

   fetch(`http://localhost:3000/users?email=${email}`)
   .then((res)=>{
    return res.json();
   })
   .then((res)=>{
    if(res.length==0)
    {
        alert("E-mail Invalid")
    }
    else{
        if(res[0].password==password)
        {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
            window.location.href="product.html"
            
        }
        else{
            alert("password invalid")
        }
    }
   })
})