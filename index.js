'use strict'
const rootURL = 'https://api.github.com/users/'


function watchForm() {
    $('#githubform').submit(event => {
        event.preventDefault();
        console.log("submit recorded");
        const userInput = $("#username").val();
        $("#username").val('');
        let fullURL = rootURL + userInput + '/repos'
        fetch(fullURL)
        .then(response => {    
        if (response.ok) {
                    return response.json();
            }
            throw new Error (response.statusText);
        })    
            //.then (response => response.json())
            .then(responseJSON => displayData(responseJSON))
            .catch(err => {
                console.log(err.message);
                $('#js-error-msg').text(`Something went wrong`);
                $('.hidden').removeClass ('.hidden');
                
    });
});
};

function displayData(responseJSON) {
    console.log(responseJSON); 
    $('#results').empty();
    for (let i=0; i<responseJSON.length; i++){ //have tried others like responseJSON.owner.length 
         console.log('asdfsdf');                                       //to try to get into object that had multiple key/value pairs
        $('#results').append(`
                <li>
                    <h2>${responseJSON[i].name}<h2><br> 
                   <a href = "${responseJSON[i].html_url}" target= "_blank">Repo</a> 
                </li>
                 `);
                 };
    }    
       
$(watchForm);  

    
//     responseJSON.map ()=>
//         $('#results').append(`
//         <li>
//             <h2>${responseJSON.name}<h2><br>
//             <a href = "${responseJSON.html_url}" target= "_blank">Repo</a>
//         </li>
//         `));
//         //  $('#results').html(responseJSON);
//         };


// $(watchForm);

// function getNews(query, maxResults=25) {
//     const params = {
//       user_handle: '${#user_input}',
//     };
//     const queryString = formatQueryParams(params)
//     const url = searchURL + '?' + queryString;

//     console.log(url);

//     const options = {
//       headers: new Headers({
//         "X-Api-Key": apiKey})
//     };

//     fetch(url, options)
//       .then(response => {
//         // the new code starts here
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error(response.statusText);
//       })
//       .then(responseJson => console.log(responseJson))
//       .catch(err => {
//         $('#js-error-message').text(`Something went wrong: ${err.message}`);
//       });



// function displayResults(responseJson, maxResults) {
//     // if there are previous results, remove them
//     console.log(responseJson);
//     $('.API_results').empty();
//     // iterate through the articles array, stopping at the max number of results
//     for (let i = 0; i < responseJson.repos.length && i<maxResults ; i++){
//       // for each video object in the articles
//       //array, add a list item to the results 
//       //list with the article title, source, author,
//       //description, and image
//       $('#results-list').append(
//         `<li><h3><a href="${responseJson.repos[i].url}">${responseJson.articles[i].title}</a></h3>
//         <a href = "${responseJson.repos[i].html_url}"</a>

//         <img src='${responseJson.articles[i].urlToImage}'>
//         </li>`
//       )};
//     //display the results section  
//     $('#results').removeClass('hidden');
//   };