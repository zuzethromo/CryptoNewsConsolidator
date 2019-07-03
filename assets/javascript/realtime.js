// //*	Endpoints that return data around cryptocurrencies such as ordered cryptocurrency lists or price and volume data.
let queryURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=25&page=1&sparkline=true';

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    console.log(response);

    for (let i = 0; i < response.length; i++) {
        const { symbol, name, image, current_price, sparkline_in_7d } = response[i];
        const tr = $("<tr>");
        const tableDataSymbol = $(`<th scope="row">${symbol}</th>`);
        const tableDataImg = $(`<td><img src="${image}" alt="Currency Thumbnail"></td>`);
        const tableDataName = $(`<td>${name}</td>`);
        const tableDataPrice = $(`<td>${current_price}</td>`);
        const tableDataSparkline = $(`<td><button>View 7 day sparkline</button></td>`);

        tr.append(tableDataSymbol).append(tableDataImg).append(tableDataName).append(tableDataPrice).append(tableDataSparkline);
        $('#stock-table-body').append(tr);
    }
});


function buildSparkline(priceData) {

}