const TTC_Web3_Bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";

let ttc_web3_bridge = new TTC_Web3_Bridge(RPC_HOST)

const private_key = "<YOUR PRIVATEKEY>";
const from = "<YOUR ADDRESS>";
const to = "<TO ADDRESS>";//Rpresentative coinbase address

const raw_tx = {
	"from": from,
	"to": to,
	"nonce": 131,
	"gasPrice": 10,
	"gasLimit": 100000,
	"value":0,
  	"data": ttc_web3_bridge.web3.utils.toHex("ufo:1:event:vote")//0x75666f3a313a6576656e743a766f7465
};

ttc_web3_bridge.sendRawTransaction(raw_tx,private_key,function(error, result){
	console.log("tx sent:", result);
});
