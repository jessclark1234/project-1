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
