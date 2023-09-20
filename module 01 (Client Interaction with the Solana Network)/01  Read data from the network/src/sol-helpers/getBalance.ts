import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

async function getBalanceUsingWeb3(address: PublicKey): Promise<number> {
  const connection = new Connection(clusterApiUrl("devnet"));
  return connection.getBalance(address);
}

const publicKey = new PublicKey("7C4jsPZpht42Tw6MjXWF56Q5RQUocjBBmciEjDa8HRtp");

export const getBalance = () => {
  getBalanceUsingWeb3(publicKey)
    .then((balance) => {
      console.log("balance =>", balance, "SOL", "by getBalance sol-helper");
      console.log(
        "balance in LAMPORTS_PER_SOL=>",
        balance / LAMPORTS_PER_SOL,
        "SOL",
        "by getBalance sol-helper"
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
