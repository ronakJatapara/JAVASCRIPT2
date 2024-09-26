
document.querySelector("button").addEventListener("click",()=>{
    let a=document.querySelector("input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=6362ba7a76484c5d3e1b5aedf5015196&units=metric `)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        document.querySelector("#ans").innerHTML= res.name;
        
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
})


