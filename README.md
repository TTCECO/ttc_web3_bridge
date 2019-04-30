# TTC web3 bridge
TTC blockchain JavaScript API is simply bridged based on Web3.js
## Basics
### Installation
Run the following commands in your project folder:
```bash
npm install ttc_web3_bridge
cd ./node_modules/ttc_web3_bridge // cd <YOUR_NODE_MODULES_LOCATION>/ttc_web3_bridge
npm install
npm rebuild

```

### Creating an Instance
```bash
const ttc_web3_bridge = require('ttc_web3_bridge');
```
### Connect to TTC Blockchain
```bash
ttc_web3 = ttc_web3_bridge.initWeb3(Your_RPC_HOST);
```
You can use TTC Blockchain public rpc as your rpc host
Mainnet http://rpc-tokyo.ttcnet.io / http://rpc-us.ttcnet.io

Testnet http://testnet-tokyo.ttcnet.io


## Examples

### Create account
```bash
var account =  ttc_web3_bridge.createAccount();
console.log(account);
```

### Get TTC balance
```bash
var address = "<ADDRESS>";
ttc_web3_bridge.getBalance(address, function(error, balance){
	console.log(balance);
});
```
### Send transaction
```bash
var private_key = "<YOUR PRIVATEKEY>";
var from = "<YOUR ADDRESS>";
var to = "<TO ADDRESS>";

var raw_tx = {
	"from": from,
	"to": to,
	"nonce": 104,
	"gasPrice": 10,
	"gasLimit": 100000,
	"value":1000000000000000000,
  "data": "0x0"
}

ttc_web3_bridge.sendRawTransaction(raw_tx,private_key,function(error, result){
	console.log("tx sent:", result);
});
```

### Sign transaction
```bash
var private_key = "<YOUR PRIVATEKEY>";
var from = "<YOUR ADDRESS>";
var to = "<TO ADDRESS>";

var raw_tx = {
	"from": from,
	"to": to,
	"nonce": 104,
	"gasPrice": 10,
	"gasLimit": 100000,
	"value":1000000000000000000,
  "data": "0x0"
}

ttc_web3_bridge.signTransaction(raw_tx,private_key,function(result){
	console.log(result);
});
```

### Send signed transaction
```bash
// eg: f86d428502540be400830186a0948f46586d7b9d28ab41eaed17feab7c0d403830f0880de0b6b3a7640000001ca08b2759a90cd6fd841cc827a688f7678a57ff0e4eb26412a3dc65e501a13ef398a0463c0bc41e9e3ec9780fd9fc071fa088958a4054593a7ab4fe85ac9d8a5306ae
var signed_data = "";
ttc_web3_bridge.sendSignedTransaction(signed_data,function(error, hash){
	console.log("tx sent:", hash);
});
```

### Send vote transaction
```bash
var private_key = "<YOUR PRIVATEKEY>";
var from = "<YOUR ADDRESS>";
var to = "<Rpresentative Coinbase ADDRESS>";

// Voting data: ttc_web3.toHex("ufo:1:event:vote") = "0x75666f3a313a6576656e743a766f7465"
var raw_tx = {
	"from": from,
	"to": to,
	"nonce": 104,
	"gasPrice": 10,
	"gasLimit": 100000,
	"value":0,
  "data": "0x75666f3a313a6576656e743a766f7465"
}

ttc_web3_bridge.sendRawTransaction(raw_tx,private_key,function(error, result){
	console.log("tx sent:", result);
});
```

### Deploy contract
```bash
// compiled solidity source code
var bytecode = "<Byte Code>";
var contract_abi = [];

var private_key = "<YOUR PRIVATEKEY>";
var from = "<YOUR ADDRESS>";

var raw_tx = {
	"from": from,
	"nonce": 99,
	"gasPrice": 10,
	"gasLimit": 1000000,
	"value":0,
}
var args = [];
ttc_web3_bridge.deployContract(contract_abi, bytecode, args, raw_tx, private_key, function(error, hash){
	console.log(hash);
  // will also return the contract address if the contract was deployed
});
```

### Call contract
#### Read data from contract
```bash
var contract_abi = [];
var contract_address = "<CONTRACT ADDRESS>";
var function_name = "<FUNCTION NAME>";
var args = [];
ttc_web3_bridge.callAndReadContract(contract_address, contract_abi,function_name, args, function(error, result){
  console.log(result);
});
```
#### Write data to contract
```bash
var private_key = "<YOUR PRIVATEKEY>";
var from = "<YOUR ADDRESS>";
var contract_address = "<CONTRACT ADDRESS>";
var contract_abi = [];
var function_name = "<FUNCTION NAME>";
var args = [];

ttc_web3_bridge.callAndWriteContract(raw_tx, private_key, contract_address, contract_abi, function_name, args, function(error,result){
   console.log(result);
});
```

### Get transaction
```bash
var tx_hash = "<TX HASH>";
ttc_web3_bridge.getTransaction(tx_hash, function(error,result){
	console.log(result);
});
```


### Get transaction receipt
```bash
var tx_hash = "<TX HASH>";
ttc_web3_bridge.getTransactionReceipt(tx_hash, function(error,result){
	console.log(result);
});
```

### Get transaction count
```bash
// Get nonce, supports pending、latest
var address = "<ADDRESS>";
ttc_web3_bridge.getTransactionCount(address, function(error, nonce){
	console.log(nonce);
});

ttc_web3_bridge.getTransactionCount(address,"pending", function(error, nonce){
	console.log(nonce);
});
```


### Get Block
#### Get block by block hash
```bash
var block_hash = "<BLOCK HASH>";
ttc_web3_bridge.getBlock(block_hash,function(error, result){
	console.log(result);
});
```
#### Get block by block height
```
var block_height = <BLOCK Height>;
ttc_web3_bridge.getBlock(block_height,function(error, result){
	console.log(result);
});
```

### Contact
email: jinhu@tataufo.com
