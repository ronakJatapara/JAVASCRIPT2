


document.querySelector("button").addEventListener("click",()=>{
    let city=document.querySelector("#input1").value;

   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6362ba7a76484c5d3e1b5aedf5015196&units=metric`)
    .then((res)=>res.json())
    .then((Res)=>{
        // document.querySelector("#ans").innerHTML=; 
    
        let now=new Date();
        let date=now.toLocaleDateString()
        let time=now.toLocaleTimeString()
       document.querySelector("#ans").innerHTML=`<img src="http://openweathermap.org/img/wn/${Res.weather[0].icon}@2x.png" alt="Weather Icon" id="img1">
        <p id="p1">${Res.name}</p>

        <p id="p2">${Res.main.temp}</p>
        <p id="p3">Wind : ${Res.wind.speed} km/h</p>

        <p id="p4">Humidity: ${Res.main.humidity} %</p>
        <p id="p5"> ${date} </p>
        <p id="p6"> ${time} </p>




       
       `
     

        console.log(Res);
        
        
    })
    .catch((err)=>{
        console.log(err);
        
    }).join(" ")

    

})

