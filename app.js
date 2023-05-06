// Function to add a member
async function addMember(memberAddress) {
    try {
        await contract.methods.addMember(memberAddress).send({ from: userAddress });
        console.log('Member added successfully');
    } catch (error) {
        console.error('Failed to add member:', error);
    }
}

// Function to link Discord ID
async function linkDiscordId(discordId) {
    try {
        await contract.methods.linkDiscordId(discordId).send({ from: userAddress });
        console.log('Discord ID linked successfully');
    } catch (error) {
        console.error('Failed to link Discord ID:', error);
    }
}

// Function to create a proposal
async function createProposal(description) {
    try {
        await contract.methods.createProposal(description).send({ from: userAddress });
        console.log('Proposal created successfully');
    } catch (error) {
        console.error('Failed to create proposal:', error);
    }
}

// Function to vote on a proposal
async function vote(proposalId, tokenAmount) {
    try {
        await contract.methods.vote(proposalId, tokenAmount).send({ from: userAddress });
        console.log('Vote cast successfully');
    } catch (error) {
        console.error('Failed to cast vote:', error);
    }
}

// Connect wallet button click event
document.getElementById('connect-wallet').addEventListener('click', connectWallet);

async function connectWallet() {
    // Connect wallet logic
    if (typeof window.ethereum !== 'undefined') {
        // Modern dapp browsers
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new Web3(window.ethereum);
            const accounts = await provider.eth.getAccounts();

            // Set the user's address
            window.userAddress = accounts[0];
            console.log('Connected wallet:', userAddress);

            // Use the provider instance and contract functions
            addMember(userAddress);
            linkDiscordId(123456789); // Replace with the Discord ID
            createProposal('Example proposal');
            vote(0, 100); // Replace with the proposal ID and token amount
        } catch (error) {
            console.error('Failed to connect wallet:', error);
        }
    } else {
        // Non-dapp browsers or older versions of Metamask
        alert('Please install Metamask to connect your wallet.');
    }
}
