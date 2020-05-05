import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')
{
    // We are in browser AND meatamask is running on machine
    web3 = new Web3(window.web3.currentProvider);
}
else
{
    // We are on server OR matamask is not running
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/7726b1123e86406abe06c2a153cea51e'
    );

    web3 = new Web3(provider);
}

export default web3;