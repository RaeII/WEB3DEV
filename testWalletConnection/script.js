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
        //setCurrentAccount(account)
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

      console.log("Conectado", accounts[0]);
      //setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

