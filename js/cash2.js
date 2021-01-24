async function getPrice() {

	try
	{
		const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=cash2&vs_currencies=usd');
		
		if (response.status !== 200) {
			console.log('Looks like there was a problem. Status Code: ' +	response.status);
			return;
		}

		// Examine the text in the response
		const data = await response.json();
		const price = data['cash2']['usd']
		document.getElementById('priceHeaderSpan').innerHTML = `$ ${price} USD`;
	}
	catch(error)
	{
		console.log('Fetch Error :-S', error);
	}	
}

getPrice();

setTimeout(function() {
	getPrice();
}, 600000);

