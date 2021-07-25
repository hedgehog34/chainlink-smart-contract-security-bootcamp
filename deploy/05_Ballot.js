module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId
}) => {
 
  const [deployer] = await ethers.getSigners();
  // const { deployer } = await getNamedAccounts();

  console.log(
    "Deploying Ballot contract with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const BallotContract = await ethers.getContractFactory("Ballot");
  const deployedContract = await BallotContract.deploy(["0x6d6168616d000000000000000000000000000000000000000000000000000000","0x4300000000000000000000000000000000000000000000000000000000000000","0x53696c7665720000000000000000000000000000000000000000000000000000","0x666972737420746f6b656e000000000000000000000000000000000000000000","0x696d6167652075726c0000000000000000000000000000000000000000000000"]);
  console.log("Deployed BallotContract contract at address:", deployedContract.address);


  // await deployedContract.giveRightToVote(deployer.address);


}

// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });

  // module.exports.tags = ['all', 'mocks', 'main']
