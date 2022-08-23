const { ethers } = require('hardhat');

const main = async () => { 
  const photoFactory = await ethers.getContractFactory('PhotoERC721')
  const photoContract = await photoFactory.deploy()

  console.log('PHOTO CONTRACT ADDRESS:', photoContract.address) //0x5FbDB2315678afecb367f032d93F642f64180aa3
}

main()
  .then(() => process.exit(0))
  .catch(error => 
    { 
    console.error("The error in deploying contract",error); 
    process.exit(1) 
  })