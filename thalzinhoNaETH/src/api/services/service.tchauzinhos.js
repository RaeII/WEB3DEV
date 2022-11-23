import axios from "axios";
import { Console } from "console";
import { ethers } from "ethers";
import wavePortal from '../../../artifacts/contracts/WavePortal.sol/WavePortal.json' assert { type: 'json' };

class TchauzinhosService {

  countTchauzinhos = async (ethereum) => {

    try {
      
      if (ethereum) {

        console.log('ETHEREUM',ethereum)
        console.log('===================================================')
        
        const abi = wavePortal.abi

        const contractAddress = '0xe44b24E219FDB14b9cBAB9Da6019B4aB1d226EE2'

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, abi, signer);

        let count = await wavePortalContract.getTotalWaves();
        return "Recuperado o número de tchauzinhos..." + count.toNumber();
        
      } else {
        return "Objeto Ethereum não encontrado!";
      }

    } catch (error) {
      console.log(error)
      return
    }

  };

  

}

export default new TchauzinhosService();
