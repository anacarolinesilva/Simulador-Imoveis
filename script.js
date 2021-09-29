function validateNumber (value) {
    // Valide o numero
    if (!isNumber(value))
    alert('Entre com o numero.');
}

function validateZIPCode (value) {
    // valide o codigo postal
    if (!isZIPCode(value))
    alert ("Entre com o CEP no formulário XXXXX.");
}

function calcPrice() {
    var maxPrice = document.getElementById("income").value * 4;
    alert ("Você pode comprar uma casa de até $" + maxPrice + ".");
}

function findHouses (form) {
    var bedrooms = document.getElementById("bedrooms").value;
    var zipCode = document.getElementById("zip").value;

    // Exiba a lista de casas coincidentes a partir do servidor form.submit();
}