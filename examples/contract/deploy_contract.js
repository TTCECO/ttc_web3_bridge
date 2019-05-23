const TTC_Web3_Bridge = require('ttc_web3_bridge');

//TTC Mainnet public rpc host http://rpc-tokyo.ttcnet.io http://rpc-us.ttcnet.io
//TTC Testnet public rpc host http://rpc-testnet.ttcnet.io

const RPC_HOST = "http://rpc-testnet.ttcnet.io";

let ttc_web3_bridge = new TTC_Web3_Bridge(RPC_HOST)


// contract TestContract{
//   uint256 public index;
//
//   function TestContract(){
//       index = 0;
//   }
//
//   function changeIndex(uint256 _index)  public {
//       index = _index;
//   }
//
//   function getIndex() public view returns  (uint256){
//         return index;
//   }
//
//   function addIndex(uint256 _index) public{
//         index += 1;
//   }
//
//   function getIndex1(uint256 _index) public view returns  (uint256){
//         return _index;
//   }
//
// }

const bytecode = "608060405234801561001057600080fd5b50600080819055506101c5806100276000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632986c0e51461007257806381045ead1461009d5780638ba7a059146100c8578063b71be48914610109578063ebbf442f14610136575b600080fd5b34801561007e57600080fd5b50610087610163565b6040518082815260200191505060405180910390f35b3480156100a957600080fd5b506100b2610169565b6040518082815260200191505060405180910390f35b3480156100d457600080fd5b506100f360048036038101908080359060200190929190505050610172565b6040518082815260200191505060405180910390f35b34801561011557600080fd5b506101346004803603810190808035906020019092919050505061017c565b005b34801561014257600080fd5b506101616004803603810190808035906020019092919050505061018f565b005b60005481565b60008054905090565b6000819050919050565b6001600080828254019250508190555050565b80600081905550505600a165627a7a723058200c691b5f340d0eb250e0aa30fd3e8208d557284a196c8224dfaebbf000936f380029"
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


const private_key = "<YOUR PRIVATEKEY>";
const from = "<YOUR ADDRESS>";

const raw_tx = {
  "from": from,
  "nonce": 136,
  "gasPrice": 10,
  "gasLimit": 1000000,
  "value":0,
}

const args = [];
ttc_web3_bridge.deployContract(contract_abi, bytecode, args, raw_tx, private_key, function(error, hash){
  console.log(hash);
  //will return the contract address if the contract was deployed
});
