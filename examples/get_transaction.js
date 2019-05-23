const TTC_Web3_Bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";

let ttc_web3_bridge = new TTC_Web3_Bridge(RPC_HOST)

//Get transaction detail
const tx_hash = "t0cdcabb0b94fea244bd78ff893b5bfedad24b184b109695e03d70ea3ede850d80";
ttc_web3_bridge.getTransaction(tx_hash, function(error, result){
	console.log(result);
});
