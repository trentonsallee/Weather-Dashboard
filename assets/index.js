var searchButton = $('#search-button');
searchButton.on('click', cityInput);
var clearHistoryEl = $('#clearHistory')
clearHistoryEl.on('click', clearHistory)
var historyList = JSON.parse(localStorage.getItem("storedCitiesArray")) || [];
const apiKey = "54ab12f9f770218eab336604399c722f";

function SavedData() {
  var searchHistoryEl = $('#searchHistory');
  searchHistoryEl.text('')
  for (var i = 0; i < historyList.length; i++)
  $('<button class="btn btn-success searchButtons m-2" type="button">').text(historyList[i]).attr("onclick", "bringBackData('" + historyList[i] + "')").appendTo(searchHistoryEl)
};

function cityInput() {
  var citySearch = $('#citySearch').val();
  weatherAPI(citySearch);
  historyList.push(citySearch)
  localStorage.setItem('storedCitiesArray', JSON.stringify(historyList));
  SavedData();
};
function weatherAPI(city) {
  var geocodeAPI = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=&appid=" + apiKey;
  fetch(geocodeAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var lat = data[0].lat
    var lon = data[0].lon
    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial"
    fetch(urlCurrent)
    .then(function (response) {
      return response.json();
    })
 
      .then(function (data) {
        $('#day0city').text(data.name)
        var date = new Date(data.dt * 1000)
        $('#day0date').text(date.toUTCString());
        $('#day0icon').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png').attr('alt', data.weather[0].description);
        $('#day0Desc').text(data.weather[0].description);
        $('#day0temp').text(data.main.temp + 'F');
        $('#day0wind').text(data.wind.speed + 'mph');
        $('#day0humid').text(data.main.humidity + '% Humidity');
    
        $('#day1city').text(data.city.name)
        var date1 = new Date(data.list[4].dt_txt)
        $('#day1date').text(date1.toUTCString());
        $('#day1icon').attr('src', 'http://openweathermap.org/img/w/' + data.list[4].weather[0].icon + '.png').attr('alt', data.list[8].weather[0].description);
        $('#day1Desc').text(data.list[4].weather[0].description);
        $('#day1temp').text(data.list[4].main.temp + 'F');
        $('#day1wind').text(data.list[4].wind.speed + 'mph');

        $('#day2city').text(data.city.name)
        var date2 = new Date(data.list[12].dt_txt)
        $('#day2date').text(date2.toUTCString());
        $('#day2icon').attr('src', 'http://openweathermap.org/img/w/' + data.list[12].weather[0].icon + '.png').attr('alt', data.list[16].weather[0].description);
        $('#day2Desc').text(data.list[12].weather[0].description);
        $('#day2temp').text(data.list[12].main.temp + 'F');
        $('#day2wind').text(data.list[12].wind.speed + 'mph');        $('#day3city').text(data.city.name)

        var date3 = new Date(data.list[20].dt_txt)
        $('#day3date').text(date3.toUTCString());
        $('#day3icon').attr('src', 'http://openweathermap.org/img/w/' + data.list[20].weather[0].icon + '.png').attr('alt', data.list[24].weather[0].description);
        $('#day3Desc').text(data.list[20].weather[0].description);
        $('#day3temp').text(data.list[20].main.temp + 'F');
        $('#day3wind').text(data.list[20].wind.speed + 'mph');

        $('#day4city').text(data.city.name)
        var date4 = new Date(data.list[28].dt_txt)
        $('#day4date').text(date4.toUTCString());
        $('#day4icon').attr('src', 'http://openweathermap.org/img/w/' + data.list[28].weather[0].icon + '.png').attr('alt', data.list[32].weather[0].description);
        $('#day4Desc').text(data.list[28].weather[0].description);
        $('#day4temp').text(data.list[28].main.temp + 'F');
        $('#day4wind').text(data.list[28].wind.speed + 'mph');

        $('#day5city').text(data.city.name)
        var date5 = new Date(data.list[36].dt_txt)
        $('#day5date').text(date5.toUTCString());
        $('#day5icon').attr('src', 'http://openweathermap.org/img/w/' + data.list[36].weather[0].icon + '.png').attr('alt', data.list[39].weather[0].description);
        $('#day5Desc').text(data.list[36].weather[0].description);
        $('#day5temp').text(data.list[36].main.temp + 'F');
        $('#day5wind').text(data.list[36].wind.speed + 'mph');    });
  });
};

function clearHistory() {
  localStorage.clear();
  historyList = [];
  SavedData();
}

function bringBackData(fromHistory) {
  weatherAPI(fromHistory);
}

SavedData();