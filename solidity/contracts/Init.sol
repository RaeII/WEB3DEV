// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Init {
    
    constructor() {
        console.log("EU SOU UM CONTRATO INTELIGENTE. POG.");
    }

    //inteiros
    uint age;
    uint birthDate = 1997;

    //strings
    string name;

    //enderecos de cateiras e contratos
    address wallet = msg.sender; // quem chamou o contrato

    //booleanos
    bool isActive = false;

    //armazena até 32 bytes
    //otimização de gas
    bytes32 data;

    //lista de dados de mesmo valor
    uint256[] balances;
    string[] clients;
    address[] wallets;
    
    //lista com chave e valor. Endereço é uma chave que contar um saldo como dado
    mapping (address => uint) balancesWallet;
    
    //se pah como um objeto
    // struct User{
    //     uint id,
    //     string name,
    //     address wallet
    // }
    
    //como se fosse categorias
    //valores já definidos(constantes)
    enum category{
        EASY,
        MEDIUM,
        HARD,
        EXTREME
    }



    function useVariables() external{
        balances.push(1001); //adicionando valor a lista
        isActive = true;

        balancesWallet[msg.sender] = 1002;
        
    }

}