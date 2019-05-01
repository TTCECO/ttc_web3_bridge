const ttc_web3_bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";
ttc_web3 = ttc_web3_bridge.initWeb3(RPC_HOST);

var private_key = "<YOUR PRIVATEKEY>";
var from = "<YOUR ADDRESS>";
var to = "<TO ADDRESS>";//Rpresentative coinbase address

var raw_tx = {
	"from": from,
	"to": to,
	"nonce": 104,
	"gasPrice": 10,
	"gasLimit": 100000,
	"value":0,
  	"data": ttc_web3.toHex("ufo:1:event:vote")//0x75666f3a313a6576656e743a766f7465
}

ttc_web3_bridge.sendRawTransaction(raw_tx,private_key,function(error, result){
	console.log("tx sent:", result);
});
