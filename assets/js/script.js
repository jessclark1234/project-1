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






function sendApiRequest() {
    var userInput = document.getElementById("input").value
    console.log(userInput)
    var giphyApiKey = "3PETcBI1sQkizCJik9gKuWkHTt3Xojp0"
    var giphyApiUrl = 'https://api.giphy.com/v1/gifs/categories?q=' + userInput + '&rating=g&api_key=' + giphyApiKey

    fetch(giphyApiUrl).then(function (response) {
        return response.json()
    })
        .then(function (data) {
            console.log(json)
            console.log(json.data[0].images.url)
            var imgPath = json.data[0].images.fixed_height.url
            var img = document.createElement("img")
            img.setAttribute("src:", imgPath)
            document.body.appendChild(img)

        })

    // fetch(giphyApiUrl, {
    //     method: 'GET',
    // })
    // .then(function (response){
    //     return response.json();
    // })
    // .then(function (data){
    //     console.log(data);
    // })

    // function show(data) {
    //     let tab = 
    //         `<tr>
    //           <th>Celebrities</th>
    //           <th>Movies</th>
    //           <th>Cartoons_and_Comics</th>
    //          </tr>`;
       
    //     // Loop to access all rows 
    //     for (let r of data.list) {
    //         tab += `<tr> 
    //     <td>${r.Celebrities} </td>
    //     <td>${r.Movies}</td>
    //     <td>${r.Cartoons_and_Comics}</td>          
    // </tr>`;
    //     }
    //     // Setting innerHTML as tab variable
    //     document.getElementById("Gifs").innerHTML = tab;
    // }
    // asd
    
}


var searchBtn = document.getElementById('searchBtn');
var searchItem = document.getElementbyID('searchBar').value;
// document.getElementbyID('searchbar').value

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
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

    });
}

searchBtn.addEventListener('click', getApi);