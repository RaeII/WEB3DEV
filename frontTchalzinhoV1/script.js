const { ethereum } = window;

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

const wave = async () => {
  try {
    const { ethereum } = window;

    const abi =  [
      {
        inputs: [],
        stateMutability: "nonpayable",
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

    const contractAddress = '0x2a53c05D3d6A65D4527CDf46F6bbC2D6C6A83870'

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      
      const wavePortalContract = new ethers.Contract(contractAddress, abi, signer);

       /*
        * Executar o tchauzinho a partir do contrato inteligente
        */
       const waveTxn = await wavePortalContract.wave();
       console.log("Minerando...", waveTxn.hash);

       await waveTxn.wait();
       console.log("Minerado -- ", waveTxn.hash);


      let count = await wavePortalContract.getTotalWaves();
      console.log("Recuperado o número de tchauzinhos...", count.toNumber());
    } else {
      console.log("Objeto Ethereum não encontrado!");
    }
  } catch (error) {
    console.log(error)
  }
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

