// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

//create - fora do contrato consegue ver
//read - dentro e o filhos do contrato
//update   - todos consegue ver
//delete  - apenas do contrato declarado 


//Arrays de um tipo de dados apenas
contract Map {
    
   mapping(address => uint) balances;

   function setBalances() external payable returns(string memory){
         balances[msg.sender] += msg.value;
         return 'Valor de msg.value adicionado a carteira!';
   }

   function balancesOf() external view returns(uint256){
             return balances[msg.sender];
   }

   //list em um map

   mapping(address => uint[]) points;

   function addPoints(uint _point) external returns(string memory){
       points[msg.sender].push(_point);
       return string(abi.encodePacked("pontos"," ",_point," ","adicionados com sucesso"));
   }

    function getTotalPoints() external view returns(uint){
         uint total;
         for(uint i; i < points[msg.sender].length; i++){
             total += points[msg.sender][i];
         }

         return total;
   }

}