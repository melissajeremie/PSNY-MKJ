// 5b3682be <- my API key
var apiKey = '5b3682be';
// const fakeApiKey = '5b3682b';
var myUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=` // I'm going to fill in with movie title
// $.ajax({
//   url: myUrl + 'Frozen', // -> http://www.omdbapi.com/?apikey=5b3682be&t=Frozen
//   success: (dataThatCameFromOutsideWorld) => {
//     console.log(dataThatCameFromOutsideWorld);
//   },
//   error: (errorThatCameBack) => {
//     console.error("something messed up")
//     console.error(errorThatCameBack)
//   }
// })
// const promise = $.ajax({ url: myUrl + 'Frozen' });
// const secondAjaxReq = axios.get(/* url */);
// const thirdAjaxReq = setInterval(() => console.log('hello'), 1000);
// const fourthAjaxReq = fetch('url');
// console.log(promise) // Promise obj has .then AND .catch
// .then is like a success. If your async func worked. Run .then
// .catch is to catch your errors
$(function() {
  // inside of here
  // we write our code
  // onload we want to attach an event listener to our form w/ jQuery
    // when form submits we want to...
    // how could I select the form attach an event listener that runs on submit
    $('form').on('submit', function(event){
      event.preventDefault(); // stops refresh
      // select input field. and log out text typed into it
      var userInput = $('#user-movie-input').val(); // gives us what user typed into text box
      console.log(userInput, typeof userInput)
      // use the userInput and tack it on to the url=myUrl
      var filledInUrl = myUrl + userInput;
      console.log(filledInUrl);
      var promise = $.ajax({ url: filledInUrl })
      promise.then(function(data) {
        // inside of here we render the info we get into the el's in our HTML
        console.log(data);
        console.log(data.Title);
        console.log(data.Year);
        console.log(data.Rated);
        $('#title').text(data.Title);
        $('#year').text(data.Year);
        $('#rated').text(data.Rated);
      }).catch(function(e) {console.error(e)});
    });
      // get text typed in by the user
      // input el w/ user input -> #user-movie-input
    // use text to get API data
      // render it on screen (movie details)
})
// promise.then(data => {
//   // <!-- form.onSubmit() -->
//   // <form>
//   //   <input type="text" placeholder="Movie Title">
//   //   <input type="submit" value="Get Movie Info">
//   //   <!-- event.preventDefault() -->
//   // </form>
//   console.log(data); // -> this is just an object
// 
//   const movieTitle = data.Title;
//   console.log(movieTitle) // -> Frozen
// 
//   const movieYear = data.Year
//   console.log(movieYear); // -> 2013
// 
//   const movieRating = data.Rated;
//   console.log(movieRating); // -> PG
// 
//   // document.getElementById('title');
//   // console.log($('dt'))
//   $('#title').text(movieTitle); // $('#title').text('Frozen');
//   $('#year').text(movieYear);
//   $('#rated').text(movieRating);
// }).catch(err => {
//   console.error(err);
// })
// async function callFrozen() {
//   try {
//     const res = await $.ajax({ url: myUrl + 'Frozen' })
//     console.log(res);
//   } catch(e) {
//     console.error(e, e.message)
//   }
// }
// callFrozen();
// const res = axios.get(myUrl + 'Frozen');
// res.then(data => {
//   console.log(data.data);
// }).catch(e => {
//   console.error(e.message)
// })