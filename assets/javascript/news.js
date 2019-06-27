//FINANCIAL TIMES FAIL
/* // let api = "http://api.ft.com/content/search/v1?"
let api = "https://api.ft.com/content/notifications?"
let apiKey = "apiKey=59cbaf20e3e06d3565778e7bd4763621eb134dd6adf6fd8077539a9e"
let query = "&since=2019-04-28T03:22:52.394Z"
let queryURL = ("https://cors-anywhere.herokuapp.com/" + api + apiKey + query); */

//NY TIMES
//FORMAT: /articlesearch.json?q={query}&fq={filter}
//ex: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

let api = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
let query = "q=bitcoin&" //bitcoin will be input captured from Home page
let apiKey = "api-key=n7kN1nsbvcCZ4ymY8aA7OAgd2dNWkzD3"
let queryURL = (/* "https://cors-anywhere.herokuapp.com/" + */ api + query + apiKey); 

for(let i =0; i<4; i++){
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    let headline = "Headline: "+response.response.docs[i].headline.main;
    let articleUrl = response.response.docs[i].web_url;
    let link = articleUrl.link(articleUrl); //turning URLs to clickable links for user

    $('#newsLinks').append(headline);
    $('#newsLinks').append("<p></p>");
    $('#newsLinks').append(link); 
    $('#newsLinks').append("<p></p>");
     console.log(response);
})
}



/* julio@LAPTOP-VOTLS07I MINGW64 ~/Documents/Bootcamp/Projects/CryptoNewsConsolidator (julio)
$ git push
fatal: The current branch julio has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin julio */


