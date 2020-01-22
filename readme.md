 # LIRI Bot  (takeoff on Siri)
Sharon Story Smith  sstorysmith@gmail.com
https://github.com/sstorysmith/liri-node-ap
Fall 2019

this program uses: 

 dotenv: Loads environment variables from dotenv files. ... Dotenv files have become popular for storing configuration, especially in development and test environments. 

 axios -  to grab data from the movie database [OMDB API](http://www.omdbapi.com) and the [Bands In Town API]
     (http://www.artists.bandsintown.com/bandsintown-api)
​
 Inquirer- The package is named inquirer , a collection of common interactive command-line user interfaces. 

 Moment. js is an awesome JavaScript library that helps you manage dates, in the browser and in Node. js as well.

 node-spotify-api

 fs node package takes the text inside of random.txt and then uses it to call one of LIRI's commands.


What ths application does:

While SIRI is a Speech Interpretation LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface,LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command-line node app that takes in parameters and gives you back data.
liribot takes in one of the following commands:
​
   * `concert-this`​
   * `spotify-this-song`
   * `movie-this`​
   * `do-what-it-says`
​
​
​ LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
    

    

How users can get started with the project
(1) acquire an API key for yourself. The one here is for the author of this program.

(2) navigate to the root of your project and run `npm init -y'; this will initialize a `package.json` file for your project. The `package.json` file is required for installing third party npm packages and saving their version numbers.

 LIRI will take the text inside of random.txt and use it to call one of  LIRI's commands.
    



* Include screenshots (or a GIF/Video) of the typical user flow of your application. Make sure to include the 
use of Spotify, Bands in Town, and OMDB.
​
* Include any other screenshots you deem necessary to help someone who has never been introduced to your
application understand the purpose and function of it. This is how you will communicate to potential 
employers/other developers in the future what you built and why, and to show how it works.
​

​

X* Inside keys.js your file will look like this:
​
```js
console.log('this is loaded');
​
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
```
​
x4. Next, create a file named `.env`, add the following to it, replacing the values with your API keys (no quotes) 
once you have them:
​
X```js
# Spotify API keys
​
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
​
```
​
* This file will be used by the `dotenv` package to set what are known as environment variables to the global
 `process.env` object in node. These are values that are meant to be specific to the computer that node is running
  on, and since we are gitignoring this file, they won't be pushed to github &mdash; keeping our API key information
   private.
​
* If someone wanted to clone your app from github and run it themselves, they would need to supply their own
 `.env` file for it to work.
​
x5. Make a file called `random.txt`.
​
   * Inside of `random.txt` put the following in with no extra characters or white space:
​
     * spotify-this-song,"I Want it That Way"
​
x6. Make a JavaScript file named `liri.js`.
​
x7. At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:
​
```js
require("dotenv").config();
```
​
8. Add the code required to import the `keys.js` file and store it in a variable.
​
```js
  var keys = require("./keys.js");
```
  
* You should then be able to access your keys information like so
​
  ```js
  var spotify = new Spotify(keys.spotify);
  ```
​
x9. 
   * `movie-this`
​
   * `do-what-it-says`
​
### What Each Command Should Do
​
1. `node liri.js concert-this <artist/band name here>`
​
   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" 
   + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each 
   event to the terminal:
​
     * Name of the venue
​
     * Venue location
​
     * Date of the Event (use moment to format this as "MM/DD/YYYY")
​
x2. `node liri.js spotify-this-song '<song name here>'`
​
  x * This will show the following information about the song in your terminal/bash window
​
     * Artist(s)
​
     * The song's name
​
     * A preview link of the song from Spotify
​
     * The album that the song is from
​
  x * If no song is provided then your program will default to "The Sign" by Ace of Base.
​
  x * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in 
   order to retrieve song information from the Spotify API.
​
  x * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can 
   follow these steps in order to generate a **client id** and **client secret**:
​
   x* Step One: Visit <https://developer.spotify.com/my-applications/#!/>
​
   x* Step Two: Either login to your existing Spotify account or create a new one (a free account is fine)
   and log in.  sstorysmith@gmail.com  spotify----
               •	Client: ID   3fd0903482ce435a9d475d88ce2146a6
               Client screct or key:  de639700da3348e59ccc511c3f791cad

​
   x* Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create>
    to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these 
    fields. When finished, click the "complete" button.
​
   x* Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these 
   values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package]
   (https://www.npmjs.com/package/node-spotify-api).
​
3. `node liri.js movie-this '<movie name here>'`
​
   * This will output the following information to your terminal/bash window:
​
     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```
​
   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
​
     * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
​
     * It's on Netflix!
​
   * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities,
    the OMDB API requires an API key. You may use `trilogy`.
​
4. `node liri.js do-what-it-says`
​
   * Using 
​
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
​
     * Edit the text in random.txt to test out the feature for movie-this and concert-this.
​
### BONUS
​
* In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.
​
* Make sure you append each command you run to the `log.txt` file. 
​
* Do not overwrite your file each time you run a command.
​


​
### Add To Your Portfolio
​
After completing the homework please add the piece to your portfolio.
 Make sure to add a link to your updated portfolio in the comments section 
 of your homework so the TAs can easily ensure you completed this step when 
 they are grading the assignment. To receive an 'A' on any assignment, you 
 must link to it from your portfolio.
​
- - -
​
