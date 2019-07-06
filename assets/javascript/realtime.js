// //*	Endpoints that return data around cryptocurrencies such as ordered cryptocurrency lists or price and volume data.
let queryURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=25&page=1&sparkline=true';
let coingeckoResponse = {};

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    for (let i = 0; i < response.length; i++) {
        const { symbol, name, image, current_price, sparkline_in_7d, id } = response[i];
        const tr = $("<tr>");
        const tableDataSymbol = $(`<th scope="row">${symbol}</th>`);
        const tableDataImg = $(`<td><img src="${image}" alt="Currency Thumbnail"></td>`);
        const tableDataName = $(`<td>${name}</td>`);
        const tableDataPrice = $(`<td>${'$' + current_price}</td>`);
        const tableDataSparkline = $(`
            <td>
                <button class="sparklineButton btn btn-secondary" data-sparkline_id=${id} data-toggle="modal" data-target="#exampleModal">View</button>
            </td>
        `);

        coingeckoResponse[id] = sparkline_in_7d.price;
        console.log(sparkline_in_7d);
        tr.append(tableDataSymbol).append(tableDataImg).append(tableDataName).append(tableDataPrice).append(tableDataSparkline);
        $('#stock-table-body').append(tr);
    }
});


function buildSparkline(priceData) {
    const ctx = document.getElementById('cryptocurrency-graph').getContext('2d');
    const min = Math.min.apply(null, priceData);
    const max = Math.max.apply(null, priceData);
    console.log(priceData.sort((a, b) => a - b));
    const graphData = {
        labels: ['0','1','2','3','4','5','6','7'], //
        datasets: [{
            label: 'Cryptocurrency',
            backgroundColor: 'white', 
            borderColor: 'rgb(128, 128, 128)', 
            data: priceData.sort((a, b) => a - b)
        }]
    };
    let chart = new Chart(ctx, {
        type: 'line',
        data: graphData,
        options: {}
    });
};

$(document).on('click', '.sparklineButton', function (event) {
    const currentSparklineId = event.currentTarget.dataset.sparkline_id;
    const currentSparklineData = coingeckoResponse[currentSparklineId]
    $('#exampleModalLabel').text(`7 Day Sparkline - ${currentSparklineId}`);
    buildSparkline(currentSparklineData, currentSparklineId);
});

//to do : make sure logo size is decreased/update graph color/update graph scale/update button look 