var searchBtn = document.getElementById('searchBtn');
var searchBar = document.getElementById('searchBar');
var tempDiv = document.getElementById('tempDiv');



/* Base element needed for the accordion to work. */
var baseAccordion = $('#accordion');


/* Need function to generate accordions for each set of input given. */
function generateAccordion(resultCategory, resultOutput) {
  var headline = $('<h3>');
  var descriptionText = $('<div>');

  headline.text(resultCategory);
  descriptionText.text(resultOutput);

  baseAccordion.append(headline);
  baseAccordion.append(descriptionText);
}






const userInput = document.getElementById("giphyButton");
userInput.addEventListener('click', sendGiphyApiRequest);

function sendGiphyApiRequest(event) {
  event.preventDefault();
  var giphyText = document.getElementById("giphyInput");
  var giphySearchBoxText = giphyText.value.trim();
  var giphyApiKey = "3PETcBI1sQkizCJik9gKuWkHTt3Xojp0";
  var giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + giphySearchBoxText + '&rating=g&api_key=' + giphyApiKey + '&limit=15';


  
searchBtn.addEventListener('click', sendGiphyApiRequest);









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