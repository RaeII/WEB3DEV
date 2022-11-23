// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract State {
    
  //CALL - não paga gás
  //TRANSATION - paga gás

  //padrão - sem nenhum estado especificado (transation)
  //         possui um alteração de dados ou uma transação de valor

  //VIEW - apenas lê os dados
  //pure
  
  mapping (address => uint) balances;
  
  //se nenhum parametro for passado terá custo
  function payment() public  payable returns(uint){
    balances[msg.sender] = msg.value;
    return balances[msg.sender];
  }

  string name = 'israel';
  //view - função tem leitura de um dado 
  function printNameView() external view  returns(string memory){
    return name;
  }

  //faz um calculo mas sem custo 
  function calc(uint _a, uint _b) external pure returns(uint){
    return _a + _b;
  }  


}


