// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

/**
 *  Eventos são membros herdáveis ​​de contratos. Quando você os chama, 
 * eles fazem com que os argumentos sejam armazenados no log da transação 
 * – uma estrutura de dados especial no blockchain. Esses logs são associados ao endereço do contrato, 
 * são incorporados ao blockchain e permanecem lá enquanto um bloco estiver acessível 
 */

 //Resumindo, são logs salvos na blockchain

contract Event {
     
   //Poder ser salvo até 3 parâmetros 

                           //indexed serve para facilitar aplicação de um filtro
   event transfer( address indexed _from, address _to, uint256 _amout);

   function transferExe(address _to, uint _amout) public{
        //fazer validação de tranferencia

        emit transfer(msg.sender, _to, _amout);
   }

}