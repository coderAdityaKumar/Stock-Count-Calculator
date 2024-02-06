document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const stockType = document.getElementById('stockType').value;
    const currentPrice = parseFloat(document.getElementById('currentPrice').value);

    let stockCount;
    if (stockType === 'nifty') {
        stockCount = Math.round(amount / currentPrice); // Calculate the approximate number of stocks
        stockCount -= stockCount % 50; // Round down to the nearest multiple of 50
    } else if (stockType === 'banknifty') {
        stockCount = Math.round(amount / currentPrice); // Calculate the approximate number of stocks
        stockCount -= stockCount % 15; // Round down to the nearest multiple of 15
    } else if (stockType === 'finnifty') {
        stockCount = Math.round(amount / currentPrice); // Calculate the approximate number of stocks
        stockCount -= stockCount % 40; // Round down to the nearest multiple of 40
    }else if (stockType === 'custom') {
        stockCount = Math.round(amount / (currentPrice));
    }

    document.getElementById('result').innerHTML = `You can buy approximately ${stockCount} stocks.`;
});
