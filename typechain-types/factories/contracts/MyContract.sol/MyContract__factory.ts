/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MyContract,
  MyContractInterface,
} from "../../../contracts/MyContract.sol/MyContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenErc20",
        type: "address",
      },
    ],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "depositOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "tokenErc20",
    outputs: [
      {
        internalType: "contract ITokenERC20",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080346200035457601f601f196001600160401b03620015603881900384810184168601838111878210176200033e578692829160405283396020958691810103126200035457516001600160a01b038116939084900362000354576200006562000359565b926005845264135e53919560da1b868501526200008162000359565b9060048252631353919560e21b878301528451908482116200033e576000918254966001978881811c9116801562000333575b8b8210146200031f57908187849311620002cc575b508a90878311600114620002695785926200025d575b5050600019600383901b1c191690871b1782555b8251948511620002495785548681811c911680156200023e575b898210146200022a57848111620001e2575b50879385116001146200017d575083949596509262000171575b5050600019600383901b1c191690821b1790555b600680546001600160a01b0319169190911790556040516111e690816200037a8239f35b01519050388062000139565b8493929193169685845280842093905b888210620001ca5750508385969710620001b0575b505050811b0190556200014d565b015160001960f88460031b161c19169055388080620001a2565b8087859682949686015181550195019301906200018d565b8683528883208580880160051c8201928b891062000220575b0160051c019087905b828110620002145750506200011f565b84815501879062000204565b92508192620001fb565b634e487b7160e01b83526022600452602483fd5b90607f16906200010d565b634e487b7160e01b82526041600452602482fd5b015190503880620000df565b90848a9416918680528c8720928d88905b828210620002b457505084116200029a575b505050811b018255620000f3565b015160001960f88460031b161c191690553880806200028c565b8385015186558d979095019493840193018e6200027a565b9091508480528a85208780850160051c8201928d861062000315575b918b91869594930160051c01915b82811062000306575050620000c9565b8781558594508b9101620002f6565b92508192620002e8565b634e487b7160e01b85526022600452602485fd5b90607f1690620000b4565b634e487b7160e01b600052604160045260246000fd5b600080fd5b60408051919082016001600160401b038111838210176200033e5760405256fe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a714610ad05750816306fdde0314610a23578163081812fc14610a03578163095ea7b31461089557816323b872dd1461087057816323e3fbd51461083857816342842e0e146107db5781635baf3e8d146107b25781636215be77146104c45781636352211e1461049357816370a08231146103fd57816395d89b4114610305578163a22cb46514610239578163b88d4fde1461017e578163c87b56dd14610125575063e985e9c5146100d557600080fd5b3461012157806003193601126101215760ff816020936100f3610b7b565b6100fb610b96565b6001600160a01b0391821683526005875283832091168252855220549151911615158152f35b5080fd5b8383346101215760203660031901126101215761014d61014861017a9435610f81565b610c50565b81815161015981610be1565b5280519161016683610be1565b825251918291602083526020830190610b3b565b0390f35b919050346102355760803660031901126102355761019a610b7b565b906101a3610b96565b6064359360443591906001600160401b038611610231573660238701121561023157850135936101de6101d586610c35565b94519485610c12565b84845286366024878901011161022e5760208661022697602461022b9a0183890137860101526102166102118433610dbd565b610ce4565b610221838383610e85565b6110ba565b610d99565b80f35b80fd5b8680fd5b8280fd5b91905034610235578060031936011261023557610254610b7b565b9060243591821515809303610301576001600160a01b0316923384146102c35750338452600560205280842083855260205280842060ff1981541660ff8416179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b6020606492519162461bcd60e51b8352820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152fd5b8480fd5b82843461022e578060031936011261022e578151918160019283549384811c918186169586156103f3575b60209687851081146103e0578899509688969785829a5291826000146103b957505060011461037c575b50505061017a929161036d910385610c12565b51928284938452830190610b3b565b91908693508083528383205b8284106103a1575050508201018161036d61017a61035a565b8054848a018601528895508794909301928101610388565b60ff19168782015293151560051b8601909301935084925061036d915061017a905061035a565b634e487b7160e01b835260228a52602483fd5b92607f1692610330565b83915034610121576020366003190112610121576001600160a01b03610421610b7b565b1690811561043e5760208480858581526003845220549051908152f35b608490602085519162461bcd60e51b8352820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152fd5b82843461022e57602036600319011261022e57506104b360209235610c97565b90516001600160a01b039091168152f35b90503461023557602091826003193601126107ae57813592831561076d5760018060a01b0380600654169483516323b872dd60e01b8152338682015283816064818b60249b308d8401528760448401525af1908115610763578891610729575b50156106f5573387526008835283872080549182018092116106e3575533865260088252838284882054926006541685519283809263313ce56760e01b82525afa80156106d95787906106a1575b60ff915016604d811161068f57600a0a90612710918083029283040361068f57101561059c578480f35b600754926001840180941161067d57836007558251946105bb86610be1565b868652331561063e5750509161063693916002610226946105e46105de85610f81565b15611145565b6105f06105de85610f81565b33808952600382528389208054600101905584895291905290862080546001600160a01b031916821790558190866000805160206111918339815191528180a433610f9e565b388080808480f35b916064928185519362461bcd60e51b85528401528201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152fd5b634e487b7160e01b8652601190528385fd5b634e487b7160e01b8752601185528587fd5b508281813d83116106d2575b6106b78183610c12565b81010312610231575160ff811681036102315760ff90610572565b503d6106ad565b84513d89823e3d90fd5b634e487b7160e01b8852601186528688fd5b835162461bcd60e51b8152808601849052600f818801526e151c985b9cd9995c8819985a5b1959608a1b6044820152606490fd5b90508381813d831161075c575b6107408183610c12565b81010312610758575180151581036107585738610524565b8780fd5b503d610736565b85513d8a823e3d90fd5b905162461bcd60e51b815291820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b8380fd5b50503461012157816003193601126101215760065490516001600160a01b039091168152602090f35b838334610121576107eb36610bac565b83519390929060208501906001600160401b03821186831017610825579161022b9593916102269593528684526102166102118433610dbd565b634e487b7160e01b875260418852602487fd5b5050346101215760203660031901126101215760209181906001600160a01b03610860610b7b565b1681526008845220549051908152f35b833461022e5761022b61088236610bac565b916108906102118433610dbd565b610e85565b9050346102355781600319360112610235576108af610b7b565b6024359290916001600160a01b03919082806108ca87610c97565b169416938085146109b657803314908115610997575b501561092f57848652602052842080546001600160a01b0319168317905561090783610c97565b167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258480a480f35b6020608492519162461bcd60e51b8352820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152fd5b90508652600560205281862033875260205260ff8287205416386108e0565b506020608492519162461bcd60e51b8352820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152fd5b82843461022e57602036600319011261022e57506104b360209235610cbd565b82843461022e578060031936011261022e5781519181825492600184811c91818616958615610ac6575b60209687851081146103e0578899509688969785829a5291826000146103b9575050600114610a895750505061017a929161036d910385610c12565b91908693508280528383205b828410610aae575050508201018161036d61017a61035a565b8054848a018601528895508794909301928101610a95565b92607f1692610a4d565b849134610235576020366003190112610235573563ffffffff60e01b811680910361023557602092506380ac58cd60e01b8114908115610b2a575b8115610b19575b5015158152f35b6301ffc9a760e01b14905083610b12565b635b5e139f60e01b81149150610b0b565b919082519283825260005b848110610b67575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610b46565b600435906001600160a01b0382168203610b9157565b600080fd5b602435906001600160a01b0382168203610b9157565b6060906003190112610b91576001600160a01b03906004358281168103610b9157916024359081168103610b91579060443590565b602081019081106001600160401b03821117610bfc57604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b03821190821017610bfc57604052565b6001600160401b038111610bfc57601f01601f191660200190565b15610c5757565b60405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606490fd5b6000908152600260205260409020546001600160a01b0316610cba811515610c50565b90565b610cc961014882610f81565b6000908152600460205260409020546001600160a01b031690565b15610ceb57565b60405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b6064820152608490fd5b60809060208152603260208201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60608201520190565b15610da057565b60405162461bcd60e51b815280610db960048201610d46565b0390fd5b906001600160a01b038080610dd184610c97565b16931691838314938415610e04575b508315610dee575b50505090565b610dfa91929350610cbd565b1614388080610de8565b909350600052600560205260406000208260005260205260ff604060002054169238610de0565b15610e3257565b60405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608490fd5b90610ead91610e9384610c97565b6001600160a01b0393918416928492909183168414610e2b565b16918215610f305781610eca91610ec386610c97565b1614610e2b565b600080516020611191833981519152600084815260046020526040812060018060a01b03199081815416905583825260036020526040822060001981540190558482526040822060018154019055858252600260205284604083209182541617905580a4565b60405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b6000908152600260205260409020546001600160a01b0316151590565b9192600092909190803b156110b057610fec946040518092630a85bd0160e11b9485835233600484015287602484015260448301526080606483015281878160209a8b966084830190610b3b565b03926001600160a01b03165af1849181611070575b5061105f575050503d600014611057573d61101b81610c35565b906110296040519283610c12565b81528091833d92013e5b805191826110545760405162461bcd60e51b815280610db960048201610d46565b01fd5b506060611033565b6001600160e01b0319161492509050565b9091508581813d83116110a9575b6110888183610c12565b8101031261030157516001600160e01b031981168103610301579038611001565b503d61107e565b5050915050600190565b9293600093909291803b1561113a579484916111149660405180948193630a85bd0160e11b9788845233600485015260018060a01b0380921660248501526044840152608060648401528260209b8c976084830190610b3b565b0393165af1849181611070575061105f575050503d600014611057573d61101b81610c35565b505050915050600190565b1561114c57565b60405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606490fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220acff7dc3f7e5e260c5be6adcb1dfe908b28b03913273af9088b1c8b3cda3470464736f6c63430008110033";

type MyContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyContract__factory extends ContractFactory {
  constructor(...args: MyContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tokenErc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyContract> {
    return super.deploy(_tokenErc20, overrides || {}) as Promise<MyContract>;
  }
  override getDeployTransaction(
    _tokenErc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenErc20, overrides || {});
  }
  override attach(address: string): MyContract {
    return super.attach(address) as MyContract;
  }
  override connect(signer: Signer): MyContract__factory {
    return super.connect(signer) as MyContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyContractInterface {
    return new utils.Interface(_abi) as MyContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyContract {
    return new Contract(address, _abi, signerOrProvider) as MyContract;
  }
}