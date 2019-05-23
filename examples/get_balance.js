const TTC_Web3_Bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";

let ttc_web3_bridge = new TTC_Web3_Bridge(RPC_HOST)

//Get TTC balance
const address = "t08f46586D7b9D28aB41eAEd17feAb7c0D403830f0";
ttc_web3_bridge.getBalance(address, function(error, balance){
	console.log(balance);
});
