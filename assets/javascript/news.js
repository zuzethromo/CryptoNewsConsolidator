

// let api = "http://api.ft.com/content/search/v1?"
let api = "https://api.ft.com/content/notifications?"
let apiKey = "apiKey=59cbaf20e3e06d3565778e7bd4763621eb134dd6adf6fd8077539a9e"
let query = "&since=2019-04-28T03:22:52.394Z"
let queryURL = ("https://cors-anywhere.herokuapp.com/" + api + apiKey + query);


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
}).catch(err => {
    console.log(err)
})

