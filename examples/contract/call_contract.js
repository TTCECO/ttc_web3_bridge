const TTC_Web3_Bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";

let ttc_web3_bridge = new TTC_Web3_Bridge(RPC_HOST)

//ABI:
const contract_abi =
[
  {
    "constant": true,
    "inputs": [],
    "name": "index",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getIndex1",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "addIndex",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "changeIndex",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
]

var contract_address = "<CONTRACT ADDRESS>";

function read_contract(){
  var function_name = "<FUNCTION NAME>";
  var args = [];
  ttc_web3_bridge.callAndReadContract(contract_address, contract_abi,function_name, args, function(error, res){
    console.log(res);
  });
}


function write_contract(){

  var private_key = "<YOUR PRIVATEKEY>";
  var from = "<YOUR ADDRESS>";

  var raw_tx = {
    "from": from,
    "nonce": 137,
    "gasPrice": 10,
    "gasLimit": 100000,
    "value":0

  }

  var function_name = "<FUNCTION NAME>";
  var args = [];

  ttc_web3_bridge.callAndWriteContract(raw_tx,private_key , contract_address, contract_abi,function_name, args, function(error, res){
    console.log(res);
  });
}

read_contract();
// write_contract();

