// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

//external - fora do contrato consegue ver
//internal - dentro e o filhos do contrato
//public   - todos consegue ver
//private  - apenas do contrato declarado 


contract Visibility {
    
    string name = 'Israel Zefe';

    function printNameExter() external view returns(string memory){
       return name;
    }

    function printNameInternal() internal view returns(string memory){
       return name;
    }

    function printNamePublic() public view returns(string memory){
       return name;
    }

    function printNamePrivate() private view returns(string memory){
       return name;
    } 
}