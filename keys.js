
// exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

console.log('this is loaded');

 



