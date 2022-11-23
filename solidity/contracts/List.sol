// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

//create - fora do contrato consegue ver
//read - dentro e o filhos do contrato
//update   - todos consegue ver
//delete  - apenas do contrato declarado 


//Arrays de um tipo de dados apenas
contract List {
    
   string[] names;

   function setName(string memory _name) external returns(string memory){
         names.push(_name);
         return "Nome cadastrado com sucesso!";
   }

   function readName(uint _position) external view returns(string memory){
         
         return names[_position];
   }

   function updateName(uint _position, string memory _name) external returns(string memory){
         names[_position] = _name;
         return "Nome atualizado com sucesso";
   }

   function deleteName(uint _position) external returns(string memory){
         delete names[_position];
         return "Nome deletado com com sucesso!";
   }

}