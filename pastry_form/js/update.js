//calculates the total of the pastries being purhased. gives error if quantity is negative
function update() {
	//TODO
	var quantities = document.getElementsByClassName('quant'); //get all quant elements
	var costs = document.getElementsByClassName('cost'); //get all cost elements
	var totalQuant = 0; //initiate total quantity var
	var totalCost = 0; //initiate total cost var

	for (var i = 0; i < quantities.length; i++){ //loop through all quant elements
		const quantity = parseInt(quantities[i].value) || 0; //get value of quant element
        const cost = parseFloat(costs[i].textContent); //get value of cost element
		if (quantity < 0) { //if quant is less than 0, throw error
			console.log('Quantity cannot be negative');
			quantities[i].style.backgroundColor = 'red';
			continue;
		}
		// check if it's not empty
		else if (!quantity) {
			console.log('Value cannot be empty');
			quantities[i].style.backgroundColor = 'red';
			continue;
		}
		quantities[i].style.backgroundColor = 'white';
		totalQuant += quantity; //add total quantity
		totalCost += quantity * cost; //add total cost
	}

	//update HTML
	document.getElementById('quantTotal').textContent = totalQuant;
	document.getElementById('totalCost').textContent = totalCost;
}