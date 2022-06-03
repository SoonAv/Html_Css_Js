var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')

var value = document.querySelector('.value')
var shortDecs = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility')
var wind = document.querySelector('.wind')
var sun = document.querySelector('.sun')

async function chaneWeatherUI(){
    search.value.trim()
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=ha%20noi&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
   let data = await fetch(apiUrl).then(res => res.json())
   console.log(data)

}
chaneWeatherUI()