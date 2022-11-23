// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Function {
    
   // _ Underline - variaveis não definidas de uso temporario e seu valor não vai ser salvo
   //external - função é vista apenas fora do contrato
   //pure - não lê e não salva nenhum dado, normalmente para calculo 
  function sun(uint _a, uint _b) external pure returns(uint){//dizer o dado de retorno
    
    return _a + _b;

  }

  string name = 'israel';
  //view - leitura de um dado 
  function printName() external view  returns(string memory){
    return name;
  } 

  mapping (address => uint) balances;
  
  //possui transação
  function payment() public payable returns(uint){
    balances[msg.sender] = msg.value;
    return balances[msg.sender];
  }

}