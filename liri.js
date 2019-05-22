require("dotenv").config();
var moment = require('moment');
moment().format();
var keys = require("./keys.js");
var axios = require("axios");
// var spotify = new Spotify(keys.spotify);
var search = process.argv[2];

var term = process.argv.slice(3).join("+");
// concert-this
if(search === "concert-this"){concertThis()}
else if(search === "movie-this"){movieThis()}

function concertThis() {
var artist = term 
var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
axios.get(URL).then(function(response){
  for (let i = 0; i < artist.length; i++) {
  var data = response.data[i]
    console.log([i+1])
    console.log("Venue:" + data.venue.name)
    console.log("City: " + data.venue.city)
    console.log("Date: " + moment(data.datetime).format("L"))
    console.log("----------------")}
})
.catch(function(error){
    if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}


function movieThis() {

  var movieName = process.argv.slice(3).join("+");
  var URL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  if(term === undefined){term = "Mr. Nobody"}
  axios.get(URL).then(function(response){
    var data = response.data
      console.log("Title:" + data.Title)
      console.log("Year: " + data.Year)
      console.log("Rate: " + data.Rated)
      console.log("Rotten Tomatoes: " + data.Ratings[1].Value)
      console.log("Country: " + data.Country)
      console.log("Language: " + data.Language)
      console.log("Actors: " + data.Actors)
      console.log("Plot: " + data.Plot)
      console.log("----------------")
  })
  .catch(function(error){
      if (error.response) {
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
}
// if (!search) {search = "concertThis"}
// // if (!search) {search = "concert-this"}
// if (!term) {term = "foo fighters"}

// spotify-this-song

// movie-this

// do-what-it-says