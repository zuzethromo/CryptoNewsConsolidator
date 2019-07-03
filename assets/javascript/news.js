//NY TIMES
//FORMAT: /articlesearch.json?q={query}&fq={filter}
//ex: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

$('#button').on("click",function(){
    let cryptoSearch = document.getElementById("inputSearch").value    
    let api = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    let query = `q=${cryptoSearch}&` //bitcoin will be input captured from Home page
    let apiKey = "api-key=n7kN1nsbvcCZ4ymY8aA7OAgd2dNWkzD3"
    let queryURL = (/* "https://cors-anywhere.herokuapp.com/" + */ api + query + apiKey); 

    $('#newHeadlineOnSearch').empty();
    $('#newSnippetsOnSearch').empty();
    $('#newNewsLinksOnSearch').empty();

for(let i =0; i<2; i++){
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    let headline = response.response.docs[i].headline.main;
    let articleUrl = response.response.docs[i].web_url;
    let link = articleUrl.link(articleUrl); //turning URLs to clickable links for user
    let snippet =  response.response.docs[i].snippet;

    $('#newHeadlineOnSearch').append(i+1 +": "+ headline);
    $('#newHeadlineOnSearch').append("<p></p>");
    $('#newSnippetsOnSearch').append(i+1 +": "+ snippet);
    $('#newSnippetsOnSearch').append("<p></p>");
    $('#newNewsLinksOnSearch').append(i+1 +": "+ link); 
    $('#newNewsLinksOnSearch').append("<p></p>");
})
}
})





