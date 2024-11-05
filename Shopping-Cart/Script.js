document.getElementById('itemQuantity1').value = 1;
document.getElementById('itemQuantity2').value = 1;

document.getElementById('plusPhone').addEventListener("click", function () {
    let item = getQuantity('itemQuantity1')
    const phonePrice = getInnerTextValue('phonePrice');

    const singleItem = phonePrice / item;
    plusOperationCostCalculate(singleItem);
    let array = plusOperation(item, phonePrice);

    document.getElementById('itemQuantity1').value = array[0];
    document.getElementById('phonePrice').innerText = array[1];
});


document.getElementById('minusPhone').addEventListener('click', function () {
    let item = getQuantity('itemQuantity1');
    const phonePrice = getInnerTextValue('phonePrice');
    let array = [];
    const singleItem = phonePrice / item;
    if (item > 1) {
        array = minusOperation(item, phonePrice);
        minusOperationCostCalculate(singleItem);
        document.getElementById('itemQuantity1').value = array[0];
        document.getElementById('phonePrice').innerText = array[1];
    }

});

document.getElementById('plusCase').addEventListener('click', function () {
    const item = getQuantity('itemQuantity2');
    const casePrice = getInnerTextValue('casePrice');

    const singleItem = casePrice / item;
    plusOperationCostCalculate(singleItem);
    const array = plusOperation(item, casePrice);

    document.getElementById('itemQuantity2').value = array[0];
    document.getElementById('casePrice').innerText = array[1];
});
document.getElementById('minusCase').addEventListener('click', function () {
    const item = getQuantity('itemQuantity2');
    const casePrice = getInnerTextValue('casePrice');
    let array = [];
    const singleItem = casePrice / item;
    if (item > 1) {
        array = minusOperation(item, casePrice);
        minusOperationCostCalculate(singleItem);
        document.getElementById('itemQuantity2').value = array[0];
        document.getElementById('casePrice').innerText = array[1];
    }




});

function getQuantity(id) {
    const Quantity = document.getElementById(id).value;
    const item = parseInt(Quantity);
    return item;
}
function getInnerTextValue(id) {
    const sNumber = document.getElementById(id).innerText;
    const price = parseInt(sNumber);
    return price;
}
function minusOperation(item, price) {
    let total = item, currentPrice = price;

    const temp = price / item;
    total = item - 1;
    currentPrice = price - temp;
    let array = [total, currentPrice];
    return array;
}

function plusOperation(item, price) {
    const SingleItem = price / item;
    const total = item + 1;
    const totalPrice = SingleItem * total;
    const array = [total, totalPrice];
    return array;
}

document.getElementById('remove-item1').addEventListener('dblclick', function () {

    let array = getTotalCost('totalItemPrice', 'tax', 'totalCost', 'phonePrice');

    document.getElementById('totalItemPrice').innerText = array[0];
    document.getElementById('totalCost').innerText = array[1];

    document.getElementById('card1').style.display = "none";
});
document.getElementById('remove-item2').addEventListener('dblclick', function () {
    let array = getTotalCost('totalItemPrice', 'tax', 'totalCost', 'casePrice');

    document.getElementById('totalItemPrice').innerText = array[0];
    document.getElementById('totalCost').innerText = array[1];

    document.getElementById('card2').style.display = "none";
});

function getTotalCost(subtotal, taxId, total, price) {
    let itemPrice = getInnerTextValue(price);
    let totalItemPrice = getInnerTextValue(subtotal);
    let tax = getInnerTextValue(taxId);
    let cost = getInnerTextValue(total);
    totalItemPrice = totalItemPrice - itemPrice;
    cost = cost - itemPrice;
    let array = [totalItemPrice, cost];
    return array;
}
function minusOperationCostCalculate(itemPrice) {
    let totalItemPrice = getInnerTextValue('totalItemPrice');
    let tax = getInnerTextValue('tax');
    let cost = getInnerTextValue('totalCost');
    totalItemPrice = totalItemPrice - itemPrice;
    cost = cost - itemPrice;
    document.getElementById('totalItemPrice').innerText = totalItemPrice;
    document.getElementById('totalCost').innerText = cost;
    document.getElementById('tax').innerText = tax;
}

function plusOperationCostCalculate(itemPrice) {
    let totalItemPrice = getInnerTextValue('totalItemPrice');
    let tax = getInnerTextValue('tax');
    let cost = getInnerTextValue('totalCost');

    totalItemPrice = totalItemPrice + itemPrice;
    cost = cost + itemPrice;

    document.getElementById('totalItemPrice').innerText = totalItemPrice;
    document.getElementById('totalCost').innerText = cost;
    document.getElementById('tax').innerText = tax;

}

