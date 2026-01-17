function updateUI(data) {
    document.getElementById("tokenName").innerText = data.name;
    document.getElementById("tokenSymbol").innerText = data.symbol;
    document.getElementById("tokenBalance").innerText = data.balance;
}
