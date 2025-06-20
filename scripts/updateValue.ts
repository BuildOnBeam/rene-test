import Web3 from "web3";
import contractAbi from "../artifacts/contracts/Oracle.sol/Oracle.json";

const updateValue = async (value: number) => {
  const web3 = new Web3("https://build.onbeam.com/rpc/testnet");
  const contractAddress = "0xbb3B07B424100655ad21040eC2F0da2F77189024";

  // Create account from private key
  const account = web3.eth.accounts.privateKeyToAccount(
    process.env.PRIVATE_KEY!
  );
  web3.eth.accounts.wallet.add(account);

  const contractInstance = new web3.eth.Contract(
    contractAbi.abi,
    contractAddress
  );

  try {
    // Update the value (this requires a transaction)
    const tx = await contractInstance.methods.updateValue(value).send({
      from: account.address,
      gas: "212040", // Add gas limit
    });

    console.log("Transaction hash:", tx.transactionHash);
    console.log("Block number:", tx.blockNumber);

    // Get the current value (this is a view function, so use call())
    const currentValue = await contractInstance.methods.getValue().call();
    console.log("Current value:", currentValue);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default updateValue;

// updateValue(parseInt(process.argv[2]));
