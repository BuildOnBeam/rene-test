// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Oracle {
    uint256 public oracleValue;
    address[] public authorizedAddresses;
    address public owner;

    constructor() {
        owner = msg.sender;
        authorizedAddresses.push(msg.sender); // Initially, only the deployer is authorized
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function addAuthorizedAddress(address _address) public onlyOwner {
        authorizedAddresses.push(_address);
    }

    modifier onlyAuthorized() {
        bool authorized = false;
        for (uint i = 0; i < authorizedAddresses.length; i++) {
            if (authorizedAddresses[i] == msg.sender) {
                authorized = true;
                break;
            }
        }
        require(authorized, "Only authorized addresses can call this function");
        _;
    }

    function updateValue(uint256 _newValue) public onlyAuthorized {
        oracleValue = _newValue;
    }

    function getValue() public view returns (uint256) {
        return oracleValue;
    }
}
