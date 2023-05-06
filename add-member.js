// JavaScript code
document.getElementById('add-member').addEventListener('click', addMember);

async function addMember() {

    const web3 = new Web3();

    const contractAddress = '0x96B3FF0448A561902485A96e5ef05674a6EA943b';

	const contractABI = [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_member",
					"type": "address"
				}
			],
			"name": "addMember",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_description",
					"type": "string"
				}
			],
			"name": "createProposal",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_proposalId",
					"type": "uint256"
				}
			],
			"name": "executeProposal",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_discordId",
					"type": "uint256"
				}
			],
			"name": "linkDiscordId",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "proposalId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "description",
					"type": "string"
				}
			],
			"name": "ProposalCreated",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_member",
					"type": "address"
				}
			],
			"name": "removeMember",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_proposalId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_tokenAmount",
					"type": "uint256"
				}
			],
			"name": "vote",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "voter",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "proposalId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "tokenAmount",
					"type": "uint256"
				}
			],
			"name": "VoteCast",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "balances",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_discordId",
					"type": "uint256"
				}
			],
			"name": "getExpByDiscordId",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_memberAddress",
					"type": "address"
				}
			],
			"name": "getMemberExp",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "memberInfo",
			"outputs": [
				{
					"internalType": "address",
					"name": "memberAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "memberSince",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "tokenBalance",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "exp",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "discordId",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "members",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "proposals",
			"outputs": [
				{
					"internalType": "string",
					"name": "description",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "voteCount",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "executed",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "votes",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	];


	const contract = new web3.eth.Contract(contractABI, contractAddress);
    const provider = new Web3(window.ethereum);
    const accounts = await provider.eth.getAccounts();
    console.log(contract);
    console.log(accounts[0]);

    const discordId = document.getElementById('discord-id').value;

    await contract.methods.addMember(accounts[0]).send({ from: accounts[0] });

    console.log('Discord ID linked successfully!');

}