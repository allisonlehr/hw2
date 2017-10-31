
let getWeather = function() {
  let latitude = '41.8781';
  let longitude = '-87.6298';
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}
//this listens for the click
let button = document.getElementById("#get_forecast") {
 button.addEventListener("click", getWeather);
 }

let convertToJSON = function(response) {
 return response.json();
}
let updateWeather = function(dataFromService) {
 city = dataFromService.name;
 temp = dataFromService.main.temp;
 icon = dataFromService.weather[0].icon;
 document.querySelector('.card-title').innerHTML = city;
 document.querySelector('.card-text').innerHTML = "It is " + temp + " degrees outside.";
 document.querySelector('.card-img-top').src = "http://openweathermap.org/img/w/" + icon + ".png";
}

let displayError = function(error) {
console.debug(error);
window.alert("Error!");
}

//let cards_html = ""
//for (let i = 1; i <= 5; ++i) {
  //let nextCard = deck[i - 1]
  //let new_img_src = "images/cards/" + nextCard.face + "_of_" + nextCard.suit + ".png"
  //let image_tag = "<img width=\"200\" src=\"" + new_img_src + "\">";
  //cards_html = cards_html + image_tag
//}
//let cards_div = document.getElementById("cards");
//cards_div.innerHTML = cards_html;

//let displayError = function(error) {
  //console.debug(error);
  //window.alert("Sorry, something went wrong.");
//}

// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
// The very last part ('10d.png') can change based on the current conditions.
