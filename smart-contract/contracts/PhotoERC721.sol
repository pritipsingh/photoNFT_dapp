//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract PhotoERC721 is ERC721URIStorage {

    uint256 PHOTO_TOKEN_ID;

    constructor() ERC721("MyNFT", "CN"){}

    function mintNFT(address _userOne, address _userTwo, string memory tokenURI) public {
        _mint(_userOne, PHOTO_TOKEN_ID);
        _setTokenURI(PHOTO_TOKEN_ID, tokenURI);
        PHOTO_TOKEN_ID++;
        
        _mint(_userTwo, PHOTO_TOKEN_ID);
        _setTokenURI(PHOTO_TOKEN_ID, tokenURI);
        PHOTO_TOKEN_ID++;
    }
}
