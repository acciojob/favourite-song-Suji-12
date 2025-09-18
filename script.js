// Song details
const songName = "Power house";
const youtubeLink = "https://www.youtube.com/watch?v=OXHTlMPbX7o&list=RDOXHTlMPbX7o&start_radio=1";

// Get the existing div by id
const divTag = document.getElementById("song-container");

// Insert the text + link inside the div
divTag.innerHTML = `My current favourite song is 
  <a href="${youtubeLink}" target="_blank">${songName}</a>`;
