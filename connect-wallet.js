// JavaScript code
document.getElementById('connect-wallet').addEventListener('click', connectWallet);

async function connectWallet() {
    // Connect wallet logic
    if (typeof window.ethereum !== 'undefined') {
        // Modern dapp browsers
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new Web3(window.ethereum);
            const accounts = await provider.eth.getAccounts();

            // Display the user's address
            const userAddress = accounts[0];
            document.getElementById('user-address').innerText = `User Address: ${userAddress}`;
           

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

    
	        const contract = new provider.eth.Contract(contractABI, contractAddress);


            const memberInfo = await contract.methods.memberInfo(accounts[0]).call();

            const memberInfoContainer = document.getElementById('member-info');
            memberInfoContainer.innerHTML = `
                <h3>Member Information</h3>
                <p><strong>Address:</strong> ${memberInfo.memberAddress}</p>
                <p><strong>Member Since:</strong> ${memberInfo.memberSince}</p>
                <p><strong>Token Balance:</strong> ${memberInfo.tokenBalance}</p>
                <p><strong>Experience (EXP):</strong> ${memberInfo.exp}</p>
                <p><strong>Discord ID:</strong> ${memberInfo.discordId}</p>
            `;
            displayProposals();
            // Use the provider instance to interact with the blockchain
            // ...
        } catch (error) {
            console.error(error);
        }
    } else {
        // Non-dapp browsers or older versions of Metamask
        alert('Please install Metamask to connect your wallet.');
    }
}