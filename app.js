let wallet = null;

document.getElementById("connectBtn").addEventListener("click", async function () {
    wallet = await connectWallet();
    if (wallet) {
        log("Wallet connected");
    }
});

document.getElementById("checkBtn").addEventListener("click", async function () {
    const tokenAddress = document.getElementById("tokenAddress").value;
    if (!tokenAddress || !wallet) {
        alert("Connect wallet and enter token address");
        return;
    }

    const tokenData = await readToken(tokenAddress, wallet);
    updateUI(tokenData);
});
