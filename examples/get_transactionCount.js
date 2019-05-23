const TTC_Web3_Bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";

let ttc_web3_bridge = new TTC_Web3_Bridge(RPC_HOST)

//Get nonce, supports, pending、latest
const address = "t0fdbd5d6F633e29CC0Ebecb4fB3A3C8d27c4c6e4b";
ttc_web3_bridge.getTransactionCount(address,function(error, nonce){
	console.log(nonce);
});
