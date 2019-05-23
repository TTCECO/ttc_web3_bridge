const TTC_Web3_Bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";

let ttc_web3_bridge = new TTC_Web3_Bridge(RPC_HOST)

const private_key = "<YOUR PRIVATEKEY>";
const from = "<YOUR ADDRESS>";
const to = "<TO ADDRESS>";

const raw_tx = {
	"from": from,
	"to": to,
	"nonce": 130,
	"gasPrice": 10,
	"gasLimit": 100000,
	"value":1000000000000000000,
  	"data": "0x0"
}

ttc_web3_bridge.sendRawTransaction(raw_tx,private_key,function(error, result){
  // console.log(error);
	console.log("tx sent:", result);
});
