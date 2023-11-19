var searchBtn = document.getElementById('searchBtn');
var searchBar = document.getElementById('searchBar');
var tempDiv = document.getElementById('tempDiv');
var giphySearchTerms;
var wikiSearchTerms;








// var giphyOutput = document.querySelector('ul');

// const userInput = document.getElementById("giphyButton");
// userInput.addEventListener('click', sendGiphyApiRequest);
searchBtn.addEventListener('click', sendGiphyApiRequest);

function checkInput(){
  var userEntry = searchBar.value.trim();
  var wikiFirst;
  var wikiSecond;
  var reformString = '';

  giphySearchTerms = userEntry;
  sendGiphyApiRequest;

  wikiFirst = userEntry.split(" ");
//There has to be a better way to do this first part, but I'm too brain dead at this point to think of it.
  if(wikiFirst.length == 1){
    wikiSecond = wikiFirst[0].split('');
    for(var x = 0; x < wikiSecond.length; x++ ){
      if(x == 0){
        reformString = wikiSecond[x].toUpperCase();
      }
      else{
        reformString = reformString + wikiSecond[x].toLowerCase();
      }
    }
    wikiSearchTerms = reformString;
    console.log(wikiSearchTerms);
    getWikiApi;
  }
  else{
    for(var x = 0; x < wikiFirst.length; x++){
      if (x == 0){
        wikiSecond = wikiFirst[0].split('');
        for(var x = 0; x < wikiSecond.length; x++ ){
          if(x == 0){
            reformString = wikiSecond[x].toUpperCase();
          }
          else{
            reformString = reformString + wikiSecond[x].toLowerCase();
          }
        }
      }
      else if( x > 0 && x < wikiFirst.length-1){
        // STOPPED HERE; NEED TO FINISH; MULTI-PURPOSE BRIDGE FUNCTION -- CS
      }
    }
  }

}



function sendGiphyApiRequest(event) {
  event.preventDefault();
  // var giphyText = document.getElementById("giphyInput");
  // var giphySearchBoxText = giphyText.value.trim();
  //var giphySearchBoxText = searchBar.value.trim();
  var giphyApiKey = "3PETcBI1sQkizCJik9gKuWkHTt3Xojp0";
 // var giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + giphySearchBoxText + '&rating=g&api_key=' + giphyApiKey + '&limit=15';

  var giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + giphySearchTerms + '&rating=g&api_key=' + giphyApiKey + '&limit=15';



  fetch(giphyApiUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      var gifSection = document.getElementById('giphySection')
      for (var i = 0; i < 10; i++) {
        var gifOnPage = document.createElement('img');
        // var idString = data.data[i].id
        var idString = data.data[i].images.original.url
        console.log(idString)
        var gifSource = "https://media.giphy.com/media/" + idString[i] + "/giphy.gif"
        gifOnPage.setAttribute('src', idString);
        gifSection.appendChild(gifOnPage);
      }
    })
}






//var searchItem = searchBar.value();
// document.getElementbyID('searchbar').value()

function getWikiApi() {
  var searchItem = searchBar.value.trim();
  var requestUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=' + searchItem + '&format=json&explaintext=true&exsectionformat=plain&origin=*';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const key = Object.keys(data.query.pages)[0]
      var fullText = data.query.pages[key].extract
      const paragraphs = fullText.split("\n")
      const firstParagraph = paragraphs[0]

      console.log(firstParagraph)
      tempDiv.textContent = firstParagraph


    });
}

searchBtn.addEventListener('click', getWikiApi);