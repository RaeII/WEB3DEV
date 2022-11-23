// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Enum {
    
   enum ESTADOS{ATIVO,INATIVO,CANCELADO,CADASTRADO}

   
   mapping (address => ESTADOS) user;

   function addUser() external{
         user[msg.sender] = ESTADOS.CADASTRADO;
   }


 
   function getUser() external view returns(ESTADOS){
      return user[msg.sender];
   }   
   
   function calcPermission(uint _a , uint _b) external returns(uint){
         //primeiro verifica, se não passar vai gerar um erro com a msg
         require(user[msg.sender] == ESTADOS.CADASTRADO , "usuario nao esta ativo");

         uint response = _a + _b;
         user[msg.sender] == ESTADOS.ATIVO;
         return response;

   }


 

}