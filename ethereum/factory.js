import web3 from './web3';
import compiledFactory from './build/ProjectFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(compiledFactory.interface),
    '0x619835eA199052f17F34f17B35D0550905D9f902'
);

export default instance;