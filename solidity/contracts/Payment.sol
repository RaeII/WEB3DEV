// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

//O token sempre sera o padrão da rede que atua

contract Payment {
                                //quando for uma função de recebimento usa PAYABLE
    function deposit() external payable returns(bool){
         require(msg.value >= 1 ether, "Valor nao pode ser abaixo de 1 ether");
         return true;
    }

    function balance() external view returns(uint256){
        //this referencia o contrato
        //pegando o endereço do contrato
        return address(this).balance;
    }

    //Enviar token
    //sender - retornar true/false do resultado da transação
    //tranfer não retorna nada e reverte tudo o que foi feito, gerando um erro

    function withdrawSend(uint _amout) external payable returns(bool){
         //enviando ether para quem chamou o contrato
         //payable() transforma endereço para pagamento
         if(payable(msg.sender).send(_amout)){
             return true;
         }else{
             return false;
         }
        
    }
                                       //endereço para pagamento
    function withdrawTransfer(address payable _walletSend, uint _amout) external{
          //passando uma carteira especifica para enviar ether
          _walletSend.transfer(_amout);

          /**
           Transfer - ex.: Em um loop de varios pagamentos, se um tiver erro,
                           todas as outros pagamentos seram cancelados e voltando
                           ao estado incial
          */
    }

}