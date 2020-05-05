const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/ProjectFactory.json');

const provider = new HDWalletProvider(
    'use pet twelve runway glance vintage capable banana wrong interest sugar twin',
    'https://rinkeby.infura.io/v3/7726b1123e86406abe06c2a153cea51e'
);
const web3 = new Web3(provider);

const deployFunction = async ()=>{

    const accounts = await web3.eth.getAccounts();
    console.log('trying to deploy from account '+accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                    .deploy({data:'0x'+compiledFactory.bytecode})
                    .send({from:accounts[0]});

    console.log('contract deployed to '+result.options.address); 

    // 0x619835eA199052f17F34f17B35D0550905D9f902 (Version 2.0)(Added two methods for getting all project details and no of requests)
    // 0xB88a0a35795cc569aF9D8cD0750186f16A2f08F8 (Version 1.0)
};
deployFunction();