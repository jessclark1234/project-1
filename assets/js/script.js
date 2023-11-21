var searchBtn = document.getElementById('searchBtn');
var searchBar = document.getElementById('nav');

var tempDiv = document.getElementById('tempDiv');
var giphySearchTerms;
var wikiSearchTerms;
var storage = [];



searchBtn.addEventListener('click', checkInput);

/* Kindly assisted by Prof. Farish Kashefinejad */
function checkInput() {
  var userEntry = searchBar.value.trim();

  getFavorite;

  giphySearchTerms = userEntry;
  sendGiphyApiRequest();

  var string = "captain america pizza";
  var words = userEntry.split(' ');
  var combineWord = '';
  for (var x = 0; x < words.length; x++) {
    var upperWord = words[x][0].toUpperCase() + words[x].substr(1);
    var correctWord = upperWord[0].toUpperCase() + upperWord[0].substr(1);


    combineWord += upperWord + ' ';
  }
  wikiSearchTerms = combineWord;
  getWikiApi();
}

function setFavorite() {
  var tempFavArray = [];
  tempFavArray[0] = wikiSearchTerms;
  tempFavArray[1] = giphySearchTerms;

  storage.append(tempFavArray);
  localStorage.setItem('favorites', JSON.stringify(storage));

}

function getFavorite() {

  storage = JSON.parse(localStorage.getItem('favorites'));
  var favorite1 = document.getElementById('favorite');
  var favorite2 = document.getElementById('button2');

  if (storage != null) {
    favorite1.setAttribute('text', storage[0][0]);
    favorite1.setAttribute('data-wiki', storage[0][0]);
    favorite1.setAttribute('data-giphy', storage[0][1]);

    if (storage[1] != null) {
      favorite2.setAttribute('text', storage[1][0]);
      favorite1.setAttribute('data-wiki', storage[1][0]);
      favorite1.setAttribute('data-giphy', storage[1][1]);
    }
  }


}

function invokeFavorite() {

  // this.
}

function sendGiphyApiRequest() {
  var giphyApiKey = "3PETcBI1sQkizCJik9gKuWkHTt3Xojp0";
  var giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + giphySearchTerms + '&rating=g&api_key=' + giphyApiKey + '&limit=15';
  var gifTest = document.getElementById('giphySection');
  if (gifTest.hasChildNodes) {
    while (gifTest.firstChild) {
      gifTest.removeChild(gifTest.firstChild);
    }
  }
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


function getWikiApi() {

  var requestUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=' + wikiSearchTerms + '&format=json&explaintext=true&exsectionformat=plain&origin=*';
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
