async function readToken(tokenAddress, wallet) {
    const contract = new ethers.Contract(tokenAddress, TOKEN_ABI, wallet);

    const name = await contract.name();
    const symbol = await contract.symbol();
    const decimals = await contract.decimals();
    const balance = await contract.balanceOf(await wallet.getAddress());

    return {
        name: name,
        symbol: symbol,
        balance: formatToken(balance, decimals)
    };
}
