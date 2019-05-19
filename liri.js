require("dotenv").config();
var moment = require('moment');
moment().format();
var keys = require("./keys.js");
var axios = require("axios");
// var spotify = new Spotify(keys.spotify);
// var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join("+");
// concert-this
var artist = term //process.argv[2]
var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
axios.get(URL).then(function(response){
    var data = response.data[0]
    console.log("Venue:" + data.venue.name)
    console.log("City: " + data.venue.city)
    console.log("Date: " + data.datetime)
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
// if (!search) {search = "concert-this"}
if (!term) {term = "foo fighters"}

// spotify-this-song

// movie-this

// do-what-it-says