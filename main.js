// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartContainer = document.querySelector('.like-glyph')
const articleHearts = document.querySelectorAll('.like-glyph')

// Your JavaScript code goes here!
// * Add the `.hidden` class to the error modal in the HTML so it does not appear
//   when the page first loads
const modal = document.getElementById('modal')

modal.hidden = true

heartContainer.addEventListener('click', (e) => {
  handleHeartClick(e)
})
// * When a user clicks on an empty heart:
//   * Invoke `mimicServerCall` to simulate making a server request
//   * When the "server" returns a failure status:
//     * Respond to the error using a `.catch(() => {})` block after your
//       `.then(() => {})` block.
//     * Display the error modal by removing the `.hidden` class
//     * Display the server error message in the modal
//     * Use `setTimeout` to hide the modal after 3 seconds (add the `.hidden` class)
//   * When the "server" returns a success status:
//     * Change the heart to a full heart
//     * Add the `.activated-heart` class to make the heart appear red
function handleHeartClick(e){
  const heart = e.target
  mimicServerCall("pretendUrl")
  .then(function(serverMessage){
    heart.innerText = FULL_HEART
    heart.style.color = "red"
  })
  .catch(function (error){
    console.log(error)
  })

}
// * When a user clicks on a full heart:
//   * Change the heart back to an empty heart
//   * Remove the `.activated-heart` class
// * Keep all your styling rules entirely in `style.css`. Do not manipulate any
//   `.style` properties.
// * Only manipulate the DOM once the server request responds. Do not make the
//   heart full until you're inside a successful `.then` block.

// > Note: The tests will only check for the first part of the specification
// > (adding the `hidden` class). You should verify the rest of the behavior
// > yourself, by checking the page in the browser.



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
