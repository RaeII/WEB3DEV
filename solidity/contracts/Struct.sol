// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Struct {
    
   struct User{
       uint id;
       address wallet;
       string name;
   }
   
   //struct tem vira um tipo, deve ser instanciado
   User[] users;

   function addUser(uint _id, string memory _name) external{
         User memory user1 = User(_id,msg.sender,_name);
         users.push(user1);
   }


    function addUserSimple(uint _id, string memory _name) external{
         users.push(User(_id, msg.sender,_name));
   }

   function getUser(uint _position) external view returns(string memory){
      return users[_position].name;
   }

 

}