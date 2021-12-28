/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { HopeNobt } from "../HopeNobt";

export class HopeNobt__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<HopeNobt> {
    return super.deploy(overrides || {}) as Promise<HopeNobt>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HopeNobt {
    return super.attach(address) as HopeNobt;
  }
  connect(signer: Signer): HopeNobt__factory {
    return super.connect(signer) as HopeNobt__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HopeNobt {
    return new Contract(address, _abi, signerOrProvider) as HopeNobt;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
    ],
    name: "EndBlock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "addReferral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "getInvitees",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "getReferrals",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "mySquad",
    outputs: [
      {
        internalType: "uint256",
        name: "totalCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "refMap",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardEndBlock",
        type: "uint256",
      },
    ],
    name: "setEnd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "uInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805180820182526009815268121bdc1948139bd89d60ba1b6020808301918252835180850190945260058452641a1393d09560da1b9084015281519192916200006091600391620002d1565b50805162000076906004906020840190620002d1565b50506005805460ff19166012179055506000620000926200014e565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620000f262000152565b60ff16600a0a6064026006556200010862000152565b60ff16600a0a6301312d00026007556003600855600c600b5562000148336200013062000152565b60ff16600a0a6308f0d180026200015b60201b60201c565b6200036d565b3390565b60055460ff1690565b6001600160a01b038216620001b7576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620001c5600083836200026a565b620001e1816002546200026f60201b62000c531790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200021491839062000c536200026f821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b600082820183811015620002ca576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200031457805160ff191683800117855562000344565b8280016001018555821562000344579182015b828111156200034457825182559160200191906001019062000327565b506200035292915062000356565b5090565b5b8082111562000352576000815560010162000357565b611686806200037d6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806370a08231116100b857806395d89b411161007c57806395d89b411461046a578063a457c2d714610472578063a9059cbb1461049e578063dd62ed3e146104ca578063e9881a5e146104f8578063f2fde38b1461051e57610142565b806370a08231146103d8578063715018a6146103fe5780637f498ffc146104065780638da5cb5b1461042357806390a634aa1461042b57610142565b80632643dd221161010a5780632643dd2214610284578063313ce567146102aa57806339509351146102c857806340c10f19146102f457806341a0894d1461032057806364d713e21461039657610142565b806306fdde0314610147578063095ea7b3146101c45780630b5c3f871461020457806318160ddd1461023457806323b872dd1461024e575b600080fd5b61014f610544565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610189578181015183820152602001610171565b50505050905090810190601f1680156101b65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f0600480360360408110156101da57600080fd5b506001600160a01b0381351690602001356105da565b604080519115158252519081900360200190f35b6102326004803603604081101561021a57600080fd5b506001600160a01b03813581169160200135166105f8565b005b61023c610668565b60408051918252519081900360200190f35b6101f06004803603606081101561026457600080fd5b506001600160a01b0381358116916020810135909116906040013561066e565b61023c6004803603602081101561029a57600080fd5b50356001600160a01b03166106a1565b6102b26106b6565b6040805160ff9092168252519081900360200190f35b6101f0600480360360408110156102de57600080fd5b506001600160a01b0381351690602001356106bf565b6102326004803603604081101561030a57600080fd5b506001600160a01b038135169060200135610712565b6103466004803603602081101561033657600080fd5b50356001600160a01b031661077e565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561038257818101518382015260200161036a565b505050509050019250505060405180910390f35b6103bc600480360360208110156103ac57600080fd5b50356001600160a01b03166107f7565b604080516001600160a01b039092168252519081900360200190f35b61023c600480360360208110156103ee57600080fd5b50356001600160a01b0316610812565b61023261082d565b6102326004803603602081101561041c57600080fd5b50356108df565b6103bc61097c565b6104516004803603602081101561044157600080fd5b50356001600160a01b0316610990565b6040805192835260208301919091528051918290030190f35b61014f6109a5565b6101f06004803603604081101561048857600080fd5b506001600160a01b038135169060200135610a06565b6101f0600480360360408110156104b457600080fd5b506001600160a01b038135169060200135610a6e565b61023c600480360360408110156104e057600080fd5b506001600160a01b0381358116916020013516610aa3565b6103466004803603602081101561050e57600080fd5b50356001600160a01b0316610ace565b6102326004803603602081101561053457600080fd5b50356001600160a01b0316610b45565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105d05780601f106105a5576101008083540402835291602001916105d0565b820191906000526020600020905b8154815290600101906020018083116105b357829003601f168201915b5050505050905090565b60006105ee6105e7610cad565b8484610cb1565b5060015b92915050565b610600610cad565b6001600160a01b031661061161097c565b6001600160a01b03161461065a576040805162461bcd60e51b815260206004820181905260248201526000805160206115c3833981519152604482015290519081900360640190fd5b6106648282610d9d565b5050565b60025490565b600061067b848484610ed6565b156106965761068b848484610f4e565b506106968484610d9d565b5060015b9392505050565b600c6020526000908152604090206001015481565b60055460ff1690565b60006105ee6106cc610cad565b8461070d85600160006106dd610cad565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610c53565b610cb1565b61071a610cad565b6001600160a01b031661072b61097c565b6001600160a01b031614610774576040805162461bcd60e51b815260206004820181905260248201526000805160206115c3833981519152604482015290519081900360640190fd5b610664828261109b565b6001600160a01b0381166000908152600c60209081526040918290206003018054835181840281018401909452808452606093928301828280156107eb57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116107cd575b50505050509050919050565b600d602052600090815260409020546001600160a01b031681565b6001600160a01b031660009081526020819052604090205490565b610835610cad565b6001600160a01b031661084661097c565b6001600160a01b03161461088f576040805162461bcd60e51b815260206004820181905260248201526000805160206115c3833981519152604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360058054610100600160a81b0319169055565b6108e7610cad565b6001600160a01b03166108f861097c565b6001600160a01b031614610941576040805162461bcd60e51b815260206004820181905260248201526000805160206115c3833981519152604482015290519081900360640190fd5b60098190556040805182815290517f2e20f3ba2581cffa5b994facd646056498993a84a4452367b91a3be061b2ea9f9181900360200190a150565b60055461010090046001600160a01b031690565b60008061099c8361118b565b91509150915091565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105d05780601f106105a5576101008083540402835291602001916105d0565b60006105ee610a13610cad565b8461070d8560405180606001604052806025815260200161162c6025913960016000610a3d610cad565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611288565b6000610a7a838361131f565b156105ee57610a91610a8a610cad565b8484610f4e565b506105ee610a9d610cad565b84610d9d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0381166000908152600c60209081526040918290206002018054835181840281018401909452808452606093928301828280156107eb576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116107cd5750505050509050919050565b610b4d610cad565b6001600160a01b0316610b5e61097c565b6001600160a01b031614610ba7576040805162461bcd60e51b815260206004820181905260248201526000805160206115c3833981519152604482015290519081900360640190fd5b6001600160a01b038116610bec5760405162461bcd60e51b815260040180806020018281038252602681526020018061150c6026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b60008282018381101561069a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b6001600160a01b038316610cf65760405162461bcd60e51b81526004018080602001828103825260248152602001806116086024913960400191505060405180910390fd5b6001600160a01b038216610d3b5760405162461bcd60e51b81526004018080602001828103825260228152602001806115326022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038181166000908152600d602052604090205416151580610ddf57506001600160a01b0381166000908152600c602052604090206002015415155b15610de957610664565b6001600160a01b038083166000818152600c602081815260408084206002018054600181810183559186528386200180549789166001600160a01b031998891681179091558552600d8352818520805488168717905592825283206003018054928301815580845290832090910180549094169092179092559083905b600b54811015610ecf576001600160a01b039182166000908152600d60205260409020549091169081610e9b57505050610664565b82546001808201855560008581526020902090910180546001600160a01b0319166001600160a01b03851617905501610e66565b5050505050565b6000610ee384848461132f565b61069684610eef610cad565b61070d8560405180606001604052806028815260200161159b602891396001600160a01b038a16600090815260016020526040812090610f2d610cad565b6001600160a01b031681526020810191909152604001600020549190611288565b600080600954118015610f6357506009544310155b80610f725750600754600a5410155b15610f7f5750600061069a565b600654821080610fa05750826001600160a01b0316846001600160a01b0316145b15610fad5750600061069a565b6001600160a01b0384166000908152600c602052604090206001015460085481101580610ffe57506001600160a01b038086166000908152600c602090815260408083209388168352929052205415155b1561100d57600091505061069a565b60065460009061102890611022846002610c53565b9061148a565b600a5460075491925090038181116110405780611042565b815b915061104e878361109b565b506001600160a01b039586166000818152600c6020818152604080842099909a1683528881529882208490559190529095525050506001908101805482019055600a805490920190915590565b6001600160a01b0382166110f6576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611102600083836114e3565b60025461110f9082610c53565b6002556001600160a01b0382166000908152602081905260409020546111359082610c53565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0381166000908152600c60209081526040808320600201805482518185028101850190935280835284936060939291908301828280156111fb57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116111dd575b5050505050905060008060005b835181101561127c57600084828151811061121f57fe5b6020026020010151905060018401935061123881610812565b6001600160a01b0382166000908152600c602052604090206002015493019215611273576000806112688361118b565b960195949094019350505b50600101611208565b50909350915050915091565b600081848411156113175760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156112dc5781810151838201526020016112c4565b50505050905090810190601f1680156113095780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60006105ee61132c610cad565b84845b6001600160a01b0383166113745760405162461bcd60e51b81526004018080602001828103825260258152602001806115e36025913960400191505060405180910390fd5b6001600160a01b0382166113b95760405162461bcd60e51b81526004018080602001828103825260238152602001806114e96023913960400191505060405180910390fd5b6113c48383836114e3565b61140181604051806060016040528060268152602001611554602691396001600160a01b0386166000908152602081905260409020549190611288565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546114309082610c53565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600082611499575060006105f2565b828202828482816114a657fe5b041461069a5760405162461bcd60e51b815260040180806020018281038252602181526020018061157a6021913960400191505060405180910390fd5b50505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220ab724304962c045d94ffd624bb154fff71916a39eed0ba2d033b266d04e5c29864736f6c634300060c0033";