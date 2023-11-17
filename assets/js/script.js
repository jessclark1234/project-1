/* Base element needed for the accordion to work. */
var baseAccordion = $('#accordion');


/* Need function to generate accordions for each set of input given. */
function generateAccordion(resultCategory, resultOutput){
    var headline = $('<h3>');
    var descriptionText = $('<div>');

    headline.text(resultCategory);
    descriptionText.text(resultOutput);

    baseAccordion.append(headline);
    baseAccordion.append(descriptionText);
}





var repoList = document.querySelector('ul');
const userInput = document.getElementById("giphyButton");
userInput.addEventListener('click', sendGiphyApiRequest);

function sendGiphyApiRequest(event) {
  event.preventDefault();
    var giphyText = document.getElementById("giphyInput");
    var giphySearchBoxText = giphyText.value.trim();
    var giphyApiKey = "3PETcBI1sQkizCJik9gKuWkHTt3Xojp0";
     var giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + giphySearchBoxText + '&rating=g&api_key=' + giphyApiKey + '&limit=15'; 
    

    fetch(giphyApiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data){
            console.log(data)
            // data[0].images.looping.mp4
            /* INSERT DISPLAY FUNCTION HERE */
            for (var i =0; i < data.length; i++){
              var listItem = document.createElement('img');
              img.setAttribute("imageLayout" , listItem);
              listItem.textContent = data[i].images.looping.mp4;
              repoList.appendChild(listItem);
            }
        })
}

function showGiphyResult (data) {
  var giphyResult = data;
  for (var i = 0; i<giphyResult.length; i++) {
    //data[i].images.looping.mp4

  }
}
// function appendImage (img){
//   let $div = $('<div id = "imageLayout">');
//     $('<src id="0" ></src>').append(img).appendTo($div);
//     $('#thumbs').append($div)
// }



var searchBtn = document.getElementById('searchBtn');
var searchBar = document.getElementById('searchBar');
var tempDiv = document.getElementById('tempDiv');
//var searchItem = searchBar.value();
// document.getElementbyID('searchbar').value()

function getWikiApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var searchItem = searchBar.value.trim();
  var requestUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=' + searchItem + '&format=json&explaintext=true&exsectionformat=plain&origin=*';
ps://api.github.com/orgs/nodejs/repos
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data);
      //Loop over the data to generate a table, each table row will have a link to the repo url
      const key = Object.keys(data.query.pages)[0]
      //console.log(key)
      var fullText = data.query.pages[key].extract
      //console.log(fullText)
      const paragraphs = fullText.split("\n")
      const firstParagraph = paragraphs[0]

      console.log(firstParagraph)
      tempDiv.textContent = firstParagraph
        

    });
}

searchBtn.addEventListener('click', getWikiApi);