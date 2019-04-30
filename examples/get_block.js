const ttc_web3_bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";
ttc_web3_bridge.initWeb3(RPC_HOST);

//Get block detail by block hash
var block_hash = "t0711be95936c60453434e54d913ff604b4d87242393cda1c280b58fcf6266e4e5";
ttc_web3_bridge.getBlock(block_hash,function(error, result){
	console.log(result);
});

//Get block detail by block height
var block_height = 100;
ttc_web3_bridge.getBlock(block_height,function(error, result){
	console.log(result);
});
