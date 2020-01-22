require("dotenv").config();
var axios= require("axios");
require("inquirer").config();
require("npmjs").config();
var moment=require("moment");
var Spotify = require('node-spotify-api');
var fs = require("fs");

var keys = require("./keys.js");

//  You should then be able to access your keys information like so
var Spotify;
var spotify = new Spotify(keys.spotify);

// Grabs the parameters from the command line
//      [0], [1] are reserved 
// process.argv will print out any command line arguments.
// console.log(process.argv)

  var command = process.argv[2];
  var parm2 = process.argv[3];
  var input = parm2.slice(3).join(" "); // argument given... ie movie or song name etc



  function spotifyThis   (keyword) {
    spotify.search({ type: 'track', query: keyword || 'The Sign Ace of Base' })
    , function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      };

      if(data.tracks.items.length > 0) {
        var record = data.tracks.items[0];

        console.log('/n-------------------------------');
        console.log('/nArtist: ' + record.artists[0].name);
        console.log('/nName: ' + record.name);
        console.log('/nLink: ' + record.preview_url);
        console.log('/nAlbum: ' + record.album.name);

     } else {
        console.log('No song data found. give me another request.');
      }
      //????????????????????/
    }
  

 // fsLogText: function(data) {
  //  fs.writeFile('log.txt', JSON.stringify(data, null, 2), function(err) {
 //   fs.appendFile('log.txt', JSON.stringify(data, null, 2) + '\n=====', function(err) {
 //     if(err) {
  //      console.log(err);

// Combines two command line arguments (strings).
// console.log(process.argv[2] + process.argv[3]);
// Adds two command line arguments (numbers).
// console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));
    }
    app[process.argv[2]]();
    app[process.argv[2]](process.argv[3]);

    if (command === "spotify-this-song") {
      spotifyThis(input);
  } else if (command === "concert-this") {
      concertThis(input);
  } else if (command === "movie-this") {
      movieThis(input);
  } else if (command === "do-what-it-says") {
      doWhat(input);
  } else {
      //console.log(command);
      //console.log(input);
      console.log(
          "Liri Bot usage: ",
          "\r\n",
          "\r\nspotify-this-song <songname> to get song, Artist, and preview info.",
          "\r\noncert-this <band Name> to show the next concert.",
          "\r\nmovie-this <Movie Title> to show movie info, ratings, plot, etc.",
          "\r\ndo-what-it-says will run the commands listed in the random.txt file."
      );
  }
      





// Example:
// User Input: node runBonus rap
// Output: A rap band is Run DMC.

