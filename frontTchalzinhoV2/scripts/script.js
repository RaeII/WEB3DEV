
  const getContract = async () => {

    const { ethereum } = window;//wallet MetaMask
    if (!ethereum) throw new Error('"Metamask não encontrada"')

    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length == 0) throw new Error('Carteira não conectada!')
    
    const abi = [
      {
        inputs: [],
        stateMutability: "payable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "timestamp",
            type: "uint256"
          },
          {
            indexed: false,
            internalType: "string",
            name: "message",
            type: "string"
          }
        ],
        name: "NewWave",
        type: "event"
      },
      {
        inputs: [],
        name: "getAllWaves",
        outputs: [
          {
            components: [
              {
                internalType: "address",
                name: "waver",
                type: "address"
              },
              {
                internalType: "string",
                name: "message",
                type: "string"
              },
              {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256"
              }
            ],
            internalType: "struct WavePortal.Wave[]",
            name: "",
            type: "tuple[]"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "getTotalWaves",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_message",
            type: "string"
          }
        ],
        name: "wave",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }
    ];
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contractAddress = '0xdD91Be4d01167E8E3F562D1a921447384e0cB1c4'  
    const wavePortalContract = new ethers.Contract(contractAddress, abi, signer);

    return wavePortalContract
  }

const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask não encontrada");
      } else {
        console.log("Metamask encontrada", ethereum);
      }

      /*
      * Confirma se estamos autorizados a acessar a carteira do cliente
      */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Encontrada a conta autorizada:", account);
        document.querySelector('.connect-wallet').innerHTML = "Carteira conectada"
      } else {
        console.log("Nenhuma conta autorizada foi encontrada")
      }
    } catch (error) {
      console.log(error);
    }
}
checkIfWalletIsConnected()

const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("MetaMask não encontrada!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      document.querySelector('.connect-wallet').innerHTML = "Carteira conectada"

      console.log("Conectado", accounts[0]);
      //setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
}

const sendWave = async () => {

  const messageToBlock = $('#msgToBlock').val()
  
  if(messageToBlock.length == 0) return

  const contract = await getContract()
  const waveTxn = await contract.wave(messageToBlock,{ gasLimit: 300000 })//define um limite de gas
  console.log('Dale',waveTxn)
} 

const wave = async () => {
  try {

        const contract = await getContract()

        /*
         * Chama o método getAllWaves do seu contrato inteligente
         */
        const waves = await contract.getAllWaves();

         /*
         * Apenas precisamos do endereço, data/horário, e mensagem na nossa tela, então vamos selecioná-los
         */
         let wavesCleaned = [];
         waves.forEach(wave => {
           wavesCleaned.push({
             address: wave.waver,
             timestamp: new Date(wave.timestamp * 1000),
             message: wave.message
           });
         });  

         console.log('WAVESCLEANED',wavesCleaned)


      let count = await contract.getTotalWaves();
      console.log("Recuperado o número de tchauzinhos...", count.toNumber());

  } catch (error) {
    console.log(error)
  }
}

const showWalves = async (e) => {

  const contract = await getContract()

  const waves = await contract.getAllWaves();

  $('#content-msg').html('')
  
   await waves.map((e) => {
         $('#content-msg').append(
                `<div class="item-msg">
                <p class="adress">${e.waver}</p>
                <p class="msg">${e.message}</p>
                <p class="data">${new Date(e.timestamp * 1000)}</p>
            </div>`)
   })
        
}

// const countTchalzinhos = async () => {

//  if (!ethereum) {
//     alert("MetaMask não encontrada!");
//     return;
//  }
 
//  const DATA = {ethereum : ethereum}

//  const response = await execFetch('count',DATA,'POST')
 
//  console.log(response)
// }

//   const execFetch = async (param, datas = '',method = 'GET') =>{

//     console.log('DATAS',datas)

//     const options = {
//       method: method,
//       headers: {
//         'Content-type': 'application/json'
//       },
//     };
  
//     if(method !== 'GET') options.body = JSON.stringify(datas);
    
//     const response = await fetch(`http://localhost:3000/api/v1/${param}`, options)
//                       .then(req => req)
//                       .then(req => req.json())
//                       .catch((e) => {
//                                       console.log('ERROR: ',e)
//                                       return []   
//                                     });

//     return response;
// }

