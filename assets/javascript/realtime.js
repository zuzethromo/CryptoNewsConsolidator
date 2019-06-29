//yoooooo// https://rapidapi.com/BraveNewCoin/api/crypto-asset-tickers
//***creating 
//thought: hover over page button showing recent currency searches 


let APIkey = 'e69ae8c2dcmshfae52962052ff9cp11c1d7jsna497ba830301';
//*	Endpoints that return data around cryptocurrencies such as ordered cryptocurrency lists or price and volume data.
let queryURL = 'https://CoinMarketCapzakutynskyV1.p.rapidapi.com/getCryptocurrenciesList';
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  let URL = (response.data);
  console.log(response);
  $('#body').append(response);
});

//let recentSearch = [];


//the goal for this is to allow a user to visually compare and contrast the currency they are interested in investing in 
//$('.search').on('click', function(){
//    preventDefault();
    //more to come 
//})
//NEAT NOTE: POTENTIAL ADDITION: >>something that says something like: "you've searched a currency with recent trends in the media click ok to see more"


//I will want to specify what data will be searched in my code 

//what are these variables 

//View 1:

//}

//View 2:
//there will also be a search form (you made this) on the page. This will allow a user to search a specifc 
//currency (loop) and once they submit their search that will isolate to the view of the searched value 
//showing the proper view of graph and stats to that specificc search 
    //should compare search to search?? rather than just one. 

//appending recent searches to act as a quick click to compare search to search 

//am I biting off more than I can chew. idfk. but why not? 

//



//View 3..similar to view_1: 
//A breakdown of currencies 1-last and their rankings 


//Additional notes: 
//Graphs and stats : Showing trends and variances >> Forecasting the next trend and pattern 
