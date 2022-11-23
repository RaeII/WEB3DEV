import serviceTchauzinhos from "../services/service.tchauzinhos.js";


class TchauzinhosController {

  countTchauzinhos = async (req , res) => {
    // console.log(req.body) 
    const ethereum = req.body

    const response =  await serviceTchauzinhos.countTchauzinhos(ethereum)

    return await res.status(200).json({content:'response'});
  };

  
}

export default new TchauzinhosController();
