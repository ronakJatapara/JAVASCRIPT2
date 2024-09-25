

fetch(`https://imdb-top-100-movies.p.rapidapi.com/`,{
    method :"GET",
    headers:{
        'x-rapidapi-key': '9d13189f3cmshdf4eaa720e340c1p132639jsn3ac21fcaf828',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
})
.then((res)=>{
    return res.json();
})
.then((Res)=>{
    document.querySelector(".main").innerHTML=view(Res)
    
})
.catch((err)=>{
    console.log(err);
    
})


function view(arr)
{
    return arr.map((el,ind)=>{
        return`
        <div class="box">
            <img src="${el.image}}" alt="">
            <p class="">${el.title}</p>
            <p class="">${el.rating}</p>
        </div>
        `
    }).join(" ")
}