// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;


//internal - dentro e o filhos do contrato
//public   - todos consegue ver
//private  - apenas do contrato declarado 


contract Variables {
  string private name;
  uint public age;
  bool internal check = false;   
}