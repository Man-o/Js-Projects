// let url="https://api.openweathermap.org/data/2.5/weather?q=pattukkottai&appid=237cf59b7f53048368f2fd6271f57981&units=metric"

// fetch(url).then((res)=>
// res.json()).then((data)=>
// console.log(data)
// ).catch((err)=>console.log(err))

let input=document.getElementById("city");
let searchBtn=document.getElementById("search")

searchBtn.addEventListener('click',()=>{
        // console.log(input.value)
        let city=input.value
        if(!city.trim()){
             alert("Write a city before searching")   
        }
        else{
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=237cf59b7f53048368f2fd6271f57981&units=metric`).then((res)=>{
                if (res.status==200){
                             return res.json()   
                } 
                else{
                   alert("Enter Valid City Name")
                }
                }).then((data)=>{
                        if(data){
                                console.log(data)
                                displayWeather(data)
                               
                        }
                }).catch((err)=>{
                        console.log(err)
                })
        }
})

function displayWeather(data){
        document.getElementById("city-name").innerHTML=data.name
        document.getElementById("temp").innerHTML=`${data.main.temp} ℃`
        document.getElementById("ws").innerHTML=`${data.wind.speed} km/hr`
        document.getElementById("hum").innerHTML=`${data.main.humidity}`
        
}