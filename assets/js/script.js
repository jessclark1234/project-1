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