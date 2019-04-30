const ttc_web3_bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";
ttc_web3_bridge.initWeb3(RPC_HOST);

//Send signed data，eg: f86d428502540be400830186a0948f46586d7b9d28ab41eaed17feab7c0d403830f0880de0b6b3a7640000001ca08b2759a90cd6fd841cc827a688f7678a57ff0e4eb26412a3dc65e501a13ef398a0463c0bc41e9e3ec9780fd9fc071fa088958a4054593a7ab4fe85ac9d8a5306ae
var signed_data = "";//
ttc_web3_bridge.sendSignedTransaction(signed_data,function(error, hash){
	console.log("tx sent:", hash);
});
