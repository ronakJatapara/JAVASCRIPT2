let a=Math.random();
let b=a*10000;
let c=Math.round(b)
 
// alert(c)
// Swal.fire(c);

Swal.fire({
  title: c,
  showClass: {
    popup: `
      animate__animated
      animate__fadeInDown
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutUp
      animate__faster
    `
  }
});

let arr2=[];


document.querySelector("#form").addEventListener("submit",(r)=>{
    r.preventDefault();

    let code=document.querySelector("#input2").value;
    let fname=document.querySelector("#input3").value;
    let lname=document.querySelector("#input4").value;
    let password=document.querySelector("#input5").value;
    let shopping=document.querySelector("#input6").value;
    let day=document.querySelector("#input7").value;
    let month=document.querySelector("#input8").value;
    let year=document.querySelector("#input9").value;

    let obj2={
        code:code,
        fname:fname,
        lname:lname,
        password:password,
        shopping:shopping,
        day:day,
        month:month,
        year:year
    }

  
    if(code.length != 0 || fname.length != 0 || lname.length != 0 || password.length != 0 || shopping.length != 0 || day.length != 0 || month.length != 0 || year.length != 0 )
        { 

        
     

          if(c==code)
          {
            window.location.href="index.html";

          }
          else{
            alert("please try again")
          }

          

   

        }
       else{

        document.querySelector("#input2").style.border="1px solid red"
        document.querySelector("#input3").style.border="1px solid red"
        document.querySelector("#input4").style.border="1px solid red"
        document.querySelector("#input5").style.border="1px solid red"
        document.querySelector("#input6").style.border="1px solid red"
        document.querySelector("#input7").style.border="1px solid red"
        document.querySelector("#input8").style.border="1px solid red"
        document.querySelector("#input9").style.border="1px solid red"
        Swal.fire({
            title: "Please Try again",
            text: "please fill all details",
            icon: "question"
          });


       }
           
      



     
        arr2.push(obj2);
     console.log(arr2);
     




})