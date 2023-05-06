async function loadContractABI() {
    try {
      const response = await fetch('./contractABI.json');
      const abi = await response.json();
      return abi;
    } catch (error) {
      throw new Error('Failed to load contract ABI');
    }
  }

async function displayProposals() {
    
    const contractAddress = '0x96B3FF0448A561902485A96e5ef05674a6EA943b';
    const contractABI = await loadContractABI();

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const accounts = await web3.eth.getAccounts();
    const memberAddress = accounts[0];

    const proposalsContainer = document.getElementById('proposals-container');
    proposalsContainer.innerHTML = '';

    // const proposalCount = await contract.methods.proposalCount().call();
    proposalCount = 10;
    for (let i = 0; i < proposalCount; i++) {
    const proposal = await contract.methods.proposals(i).call();

    const proposalElement = document.createElement('div');
    proposalElement.classList.add('proposal');

    const descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = `<strong>Description:</strong> ${proposal.description}`;

    const tokenAmountInput = document.createElement('input');
    tokenAmountInput.type = 'text';
    tokenAmountInput.placeholder = 'Token Amount';
    tokenAmountInput.classList.add('token-amount-input');

    const voteButton = document.createElement('button');
    voteButton.textContent = 'Vote';
    voteButton.addEventListener('click', async () => {
        const tokenAmount = tokenAmountInput.value;
        await vote(i, tokenAmount);
    });

    proposalElement.appendChild(descriptionElement);
    proposalElement.appendChild(tokenAmountInput);
    proposalElement.appendChild(voteButton);

    proposalsContainer.appendChild(proposalElement);
    }

}

async function vote(proposalId, tokenAmount) {
    const gasLimit = 1000000;
    try {
        console.log(proposalId);
      const contractAddress = '0x96B3FF0448A561902485A96e5ef05674a6EA943b';
      const contractABI = await loadContractABI();

      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const provider = new Web3(window.ethereum);
      const accounts = await provider.eth.getAccounts();
      console.log(contract);
      console.log(accounts[0]);
      
      
  
      // Perform the voting action by calling the contract's vote method
      await contract.methods.vote(proposalId, tokenAmount).send({ from: accounts[0], gas: gasLimit });
  
      console.log('Vote cast successfully!');
    } catch (error) {
      console.error('Error occurred while voting:', error);
    }
  }
