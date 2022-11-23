// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

//memory - salva temporario
//calldata - salva temporario mas valor não pode ser substituido
//storage   - salva na blockchain



//Arrays de um tipo de dados apenas
contract Memory {

   //por padrão sempre vai ser STORAGE
   //salvando na block e consumindo gas 
   string name;
   
   //memory é o padrão de string sempre ser passado
   function setName(string memory _name, string calldata _value) external pure returns(string memory){
         _name = "israel";
          
         //storage salva na block
         //uint storage valueInBlockchain = 10;  

          // tipo calldata não pode ter valor alterado
         //_value = 5;
        
         return _value;
   }

}