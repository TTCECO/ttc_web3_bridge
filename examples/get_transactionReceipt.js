const ttc_web3_bridge = require('ttc_web3_bridge');
//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";
ttc_web3_bridge.initWeb3(RPC_HOST);

//Get transaction receipt
var tx_hash = "t0a49488a381397a9688c46ae8327b3f8fa328f9354cf986dee89681c3e7cb5ef0";
ttc_web3_bridge.getTransactionReceipt(tx_hash,function(error, result){
	console.log(result);
});
