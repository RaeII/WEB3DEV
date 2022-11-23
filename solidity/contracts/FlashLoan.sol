// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.0;

//import {IPoolAddressesProvider} from '../../interfaces/IPoolAddressesProvider.sol';
//import {IPool} from '../../interfaces/IPool.sol';


/**
 * @title IFlashLoanSimpleReceiver
 * @author Aave
 * @notice Define a interface básica de um contrato flashloan-receiver.
 * @dev Implemente esta interface para desenvolver um contrato flashLoanReceiver compatível com flashloan
 **/
interface IFlashLoanSimpleReceiver {
  /**
   * @notice Executa uma operação após receber o ativo emprestado em flash
   * @dev Certifique-se de que o contrato pode devolver a dívida + prêmio, por exemplo, tem
   * fundos suficientes para reembolsar e aprovou o Pool para retirar o valor total
   * @param asset O endereço do ativo emprestado em flash
   * @param amount The amount of the flash-borrowed asset
   * @param premium O valor do ativo emprestado em flash
   * @param initiator endereço do iniciador do flashloan
   * @param params Os parâmetros codificados em bytes passados ​​ao iniciar o flashloan
   * @return Verdadeiro se a execução da operação for bem-sucedida, falso caso contrário
   */
  function executeOperation(
    address asset,
    uint256 amount,
    uint256 premium,
    address initiator,
    bytes calldata params
  ) external returns (bool);

  //function ADDRESSES_PROVIDER() external view returns (IPoolAddressesProvider);

  //function POOL() external view returns (IPool);
}