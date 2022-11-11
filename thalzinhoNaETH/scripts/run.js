const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
//"npx hardhat" -> no terminal "hre.ethers" = hre construído em tempo real usando o hardhat.config.js
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);


  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  // teste para ver se muda a contagem de tchalzinhos 
  // let waveTx = await waveContract.wave();
  // await waveTx.wait();

  // let waveT = await waveContract.wave();
  // await waveT.wait();

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
