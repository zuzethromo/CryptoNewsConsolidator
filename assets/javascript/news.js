//NY TIMES
//FORMAT: /articlesearch.json?q={query}&fq={filter}
//ex: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

$('#button').on("click",function(){
    let cryptoSearch = document.getElementById("inputSearch").value    
    let api = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    let query = `q=${cryptoSearch}&` //bitcoin will be input captured from Home page
    let apiKey = "api-key=n7kN1nsbvcCZ4ymY8aA7OAgd2dNWkzD3"
    let queryURL = (/* "https://cors-anywhere.herokuapp.com/" + */ api + query + apiKey); 

    //Removes headlines, snippets, and news links h1s so adjust
 /*  $('#headlines').empty();
    $('#snippets').empty();
    $('#newsLinks').empty(); */

for(let i =0; i<2; i++){
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    let headline = response.response.docs[i].headline.main;
    let articleUrl = response.response.docs[i].web_url;
    let link = articleUrl.link(articleUrl); //turning URLs to clickable links for user
    let snippet =  response.response.docs[i].snippet;

    $('#headlines').append(i+1 +": "+ headline);
    $('#headlines').append("<p></p>");
    $('#snippets').append(i+1 +": "+ snippet);
    $('#snippets').append("<p></p>");
    $('#newsLinks').append(i+1 +": "+ link); 
    $('#newsLinks').append("<p></p>");
})
}
})





/* julio@LAPTOP-VOTLS07I MINGW64 ~/Documents/Bootcamp/Projects/CryptoNewsConsolidator (julio)
$ git push
fatal: The current branch julio has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin julio */


