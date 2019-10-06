require("dotenv").config();
require("axios").config();
require("inquirer").config();
require("npmjs").config();
require("moment).config();")

let keys = require("./keys.js");

//  You should then be able to access your keys information like so
  
var spotify = new Spotify(keys.spotify);
  
​
  
// Grabs the parameters from the command line
//      [0], [1] are reserved 
// process.argv will print out any command line arguments.
// console.log(process.argv)

  var command = process.argv[1];
  var parm2 = process.argv[2];



  function spotifyThisSong (keyword) {
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
    }
  

  fsLogText: function(data) {
    fs.writeFile('log.txt', JSON.stringify(data, null, 2), function(err) {
    fs.appendFile('log.txt', JSON.stringify(data, null, 2) + '\n=====', function(err) {
      if(err) {
        console.log(err);

// Combines two command line arguments (strings).
// console.log(process.argv[2] + process.argv[3]);
// Adds two command line arguments (numbers).
// console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));
    }
    app[process.argv[2]]();
    app[process.argv[2]](process.argv[3]);

    * `concert-this`
    ​
       * `spotify-this-song`
    ​
       * `movie-this`
    ​
       * `do-what-it-says`

    switch (command) {
      case "concert-this":
        
        break;
      
      case 'spotify-this-song':  
         "spotify-this-song (command, parm2);  ​
        
        break;
      
      case "movie-this":
      
        break;
      
      case "do-what-it-says":
        
        break;
      
      
      default:
        
      }
      





// Example:
// User Input: node runBonus rap
// Output: A rap band is Run DMC.

