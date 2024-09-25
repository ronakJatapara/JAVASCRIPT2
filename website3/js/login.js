let arr=[];
document.querySelector("#form").addEventListener("submit",(r)=>{
    r.preventDefault();
    let email=document.querySelector("#input1").value;



    let obj={
        Email:email
    }

   

    if(email.length == 0)
    {
        // alert("please fill the details")
        document.querySelector("#input1").style.border="1px solid red"
        // document.querySelector("#input1").style.color=" red"
        // document.querySelector("placeholder").style.color=" red"

        Swal.fire({
            title: "Please try again",
            text: "Enter Your E-mail",
            icon: "question"
          });

         


          
        


    }
    else{
        

  
    

        window.location.href="login2.html";


        // function get()
        // {
        //   let email=document.querySelector("#input1").value;
      
    
            
           
        // }


    }

  arr.push(obj);
  console.log(arr);

  
 

})



