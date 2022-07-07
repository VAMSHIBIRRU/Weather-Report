
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var sec=document.querySelector('.display')


apik = "0f54c4e9453015b19ad61a4be8cd1107";

function convertion(val){
    return (val - 273).toFixed(2)
}
function activate(){


    btn.addEventListener('click', function(){
        if(inputval.value==='') alert("Please enter the city name");
        else{
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())

        .then(data => {

      
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
           
           
           sec.style.opacity="1";
       
           sec.innerHTML=`
            <div class="wrapper">
                    <h2 id="cityoutput">Weather of <span>${nameval}<span></h2>
                    <p id="description">Sky Conditions: <span>${descrip}<span></p>
                    <p id="temp">Temperature: <span>${ convertion(tempature)} C</span></p>
                    <p id="wind">Wind Speed: <span>${wndspd} km/h<span></p>
                </div> 
            `
 
        })

        .catch(err => alert('You entered Wrong city name'))
    }
        activate();
     })
    }
    activate();
 