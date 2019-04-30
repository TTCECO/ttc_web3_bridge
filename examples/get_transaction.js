const ttc_web3_bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";
ttc_web3_bridge.initWeb3(RPC_HOST);

//Get transaction detail
var tx_hash = "t0172b6a7b6b50e95f5e11d52b5ac75abe0c053fc897ce0c05b74fa6faafbf0ece";
ttc_web3_bridge.getTransaction(tx_hash, function(error, result){
	console.log(result);
});
