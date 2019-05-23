const TTC_Web3_Bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";

let ttc_web3_bridge = new TTC_Web3_Bridge(RPC_HOST)

//Get block detail by block hash
const block_hash = "t04e73885aace23b7135f0d960a2fece2736e89e225b5f31c2efa927aa2e49cdd0";
ttc_web3_bridge.getBlock(block_hash,function(error, result){
	console.log(result);
});

//Get block detail by block height
const block_height = 424498;
ttc_web3_bridge.getBlock(block_height,function(error, result){
	console.log(result);
});
