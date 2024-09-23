



document.querySelector("#form").addEventListener("submit",(r)=>{

   r.preventDefault();



   let fname=document.querySelector("#input2").value;
   let lname=document.querySelector("#input3").value;
   let email=document.querySelector("#input4").value;
   let password=document.querySelector("#input5").value;
  
  
   let obj={
      firstname:fname,
      lastname:lname,
      email:email,
      password:password
   }
  
   fetch(`http://localhost:3000/users`,{
      method:"POST",
      "headers":{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
   }) 
   .then((res)=>{
      return res.json();
   })
   .then((res)=>{
     
      if(fname.length == 0  && lname==0 && email==0 && password==0)
      {
        alert("please fill details")
        // document.querySelector("#input2").style.border="red"
  
  
      }
      else{
        window.location.href="product.html"
  
      }
  
      
   })
   .catch((err)=>{
      console.log(err);
      
   })

})