const TTC_Web3_Bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";

let ttc_web3_bridge = new TTC_Web3_Bridge(RPC_HOST)

//return privatekey and adddress
const address_info =  ttc_web3_bridge.createAccount();
console.log(address_info);

//{ address: 't02f0A70eBab98B37D96Cd3C9D686d1d95876ff2b1',privatekey:'b232bb25dda3b3acaffea59a552200fdc8f8ed65a31bd18a02ec8599fe0e1bdf' }
