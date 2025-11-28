//any image with copyLinkBack as a class will copy the embed code for that image to your clipboard
const images = document.querySelectorAll('.copyLinkBack'); 

// Iterate over each image and add a click event listener
images.forEach(image => {
  image.addEventListener('click', (event) => {
    // Access the clicked image element through event.target
    const clickedImage = event.target;
    
    // Get the src attribute
    const imgSrc = clickedImage.src;
    
    const textToCopy = `<a href="https://dianasroom.org"><img src="` + imgSrc + `" alt="Diana's Room"/></a>`

    // copy text to clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {

        console.log('TEXT COPIED: ' + textToCopy); //console log

        //feedback- set text below image to display "text copied"
        const feedback = document.querySelector(".copyFeedback");
        const originalText = feedback.textContent;   //get original text
        feedback.textContent = "Copied!"; //set new text

        setTimeout(() => { //revert back to original text after 1 second
            feedback.textContent = originalText;
        }, 1000)
    });
    
  });
});

console.log("fack");