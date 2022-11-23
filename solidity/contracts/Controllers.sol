// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

//create - fora do contrato consegue ver
//read - dentro e o filhos do contrato
//update   - todos consegue ver
//delete  - apenas do contrato declarado 


//Arrays de um tipo de dados apenas
contract Controllers {
    
   address[] balances;

   function setBalances(address _walletAdress) external returns(string memory){
         balances.push(_walletAdress);
         return "Carteira adicionada!";
   }

   function checkBalancesWallet(address _walletAdress) external view returns(bool){
         
         for(uint i; i < balances.length; i++){
             if(balances[i] == _walletAdress){
                 return true;
             }
         }

         return false;
   }

   

}