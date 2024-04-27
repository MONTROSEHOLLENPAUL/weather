const input = document.querySelector(".searchInput");
document.querySelector(".searchButton").addEventListener("click", () => {
  meteo(input.value);
});
const iconTemp = document.querySelector(".icontemp");

const apikey = `5a982fa18197223a1767459031b92363`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?=units=metric&q=`;
async function meteo(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    alert("Tried again later");
    iconTemp.innerHTML = `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Pleading%20Face.png" alt="Pleading Face" width="180" height="180" style="cursor: pointer;"/> <br>
    restart page please`;
    document.querySelector("#ville").remove();

    document.querySelector("#temperature").innerHTML = "";
    document.querySelector(".humspeed").remove();

    iconTemp.addEventListener("click", function () {
      window.location.reload();
    });
  }

  /*-------------------------------------*/
  let data = await response.json();
  console.log(data);
  document.querySelector("#ville").innerHTML = data.name;
  document.querySelector("#degree").innerHTML = `${
    Math.round(data.main.temp) - 273
  } &#8451`;
  document.querySelector(".cold").innerHTML = `<img
  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Snowflake.webp"
  alt="Snowflake"
  width="40"
  height="40"
/> <span> ${data.main.humidity}  % </span>`;
  document.querySelector(".hot").innerHTML = `<img
  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Tornado.png"
  alt="Tornado"
  width="40"
  height="40"
/> <span> ${data.wind.speed} km/h </span>`;

  /* -----------------gif condition--------------------*/
  if (data.weather[0].description == "broken clouds") {
    document.querySelector(".icontemp").innerHTML = `<h3>Broken clouds</h3>`;
    function brc() {
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/nuages brises.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    brc();
  } else if (data.weather[0].description == "scattered clouds") {
    document.querySelector(".icontemp").innerHTML = `<h3>scattered clouds</h3>`;
    function scc() {
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/nuages brises.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    scc();
  } else if (data.weather[0].description == "light snow") {
    document.querySelector(".icontemp").innerHTML = `<h3>Light snow</h3>`;
    function lsnow() {
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/neige legere.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    lsnow();
  } else if (data.weather[0].description == "overcast clouds") {
    document.querySelector(".icontemp").innerHTML = `<h3>Overcast clouds</h3>`;
    function ovc() {
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/couvert de nuages.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    ovc();
  } else if (data.weather[0].description == "clear sky") {
    document.querySelector(".icontemp").innerHTML = `<h3>Clear sky</h3>`;
    function csy() {
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/ciel clair.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    csy();
  } else if (data.weather[0].description == "few clouds") {
    document.querySelector(".icontemp").innerHTML = `<h3>Few clouds</h3>`;
    function fcd() {
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/qlqs nuages.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    fcd();
  } else if (data.weather[0].description == "rain") {
    document.querySelector(".icontemp").innerHTML = `<h3>It's rain</h3>`;
    function rn() {
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/pluie.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    rn();
  } else if (data.weather[0].description == "snow") {
    document.querySelector(".icontemp").innerHTML = `<h3>covered in snow</h3>`;
    function snc() {
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/couvert de neige.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    snc();
  } else if (data.weather[0].description == "light rain") {
    document.querySelector(".icontemp").innerHTML = `<h3>Light rain</h3>`;
    function lrn() {
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/light rain.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    lrn();
  }
  else if (data.weather[0].description == "mist") {
    document.querySelector(".icontemp").innerHTML = `<h3>Mist</h3>`;
    function mist() {
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/mist.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    mist();
  }
  else if (data.weather[0].description == "thunderstorm") {
    document.querySelector(".icontemp").innerHTML = `<h3>Thunderstorm</h3>`;
    function thund() {
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/thunderstorm.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    thund();
  }else{
    document.querySelector(".icontemp").innerHTML = `<h3>Other condition</h3>`;
    function globe(){
      let gif = document.querySelector(".icontemp");
      let condgif = new Image();
      condgif.src = "gif cond/else.gif";
      condgif.setAttribute("width", "60%");
      condgif.setAttribute("height", "200vh");
      gif.appendChild(condgif);
    }
    globe()
  }
}

input.addEventListener("keypress", (e) => {
  const btnEnter = e.key;
  if (btnEnter === "Enter") {
    meteo(input.value)
  }
});

window.addEventListener("load", () => {
  console.log("🧐the Js file has finished loading... ");
});
/*-----------------------------------------------*/
