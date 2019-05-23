const TTC_Web3_Bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";

let ttc_web3_bridge = new TTC_Web3_Bridge(RPC_HOST)

//Get transaction receipt
const tx_hash = "t0851e6ad1c55f9488f550f9c758da654f304eb4b68a730583d7a542291887f15b";
ttc_web3_bridge.getTransactionReceipt(tx_hash,function(error, result){
	console.log(result);
});
