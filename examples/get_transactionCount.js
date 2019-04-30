const ttc_web3_bridge = require('ttc_web3_bridge');
//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";
ttc_web3_bridge.initWeb3(RPC_HOST);

//Get nonce, supports, pending、latest
var address = "t08f46586D7b9D28aB41eAEd17feAb7c0D403830f0";
ttc_web3_bridge.getTransactionCount(address,function(error, nonce){
	console.log(nonce);
});
