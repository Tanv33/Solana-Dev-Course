import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

export const transferSol = (
  sender: PublicKey,
  recipient: PublicKey,
  amount: number,
  senderKeypair: Keypair
) => {
  const transaction = new Transaction();
  const connection = new Connection(clusterApiUrl("devnet"));
  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: sender,
    toPubkey: recipient,
    lamports: LAMPORTS_PER_SOL * amount,
  });
  console.log("sendSolInstruction =>", sendSolInstruction);

  transaction.add(sendSolInstruction);

  sendAndConfirmTransaction(connection, transaction, [senderKeypair])
    .then((signature) => {
      console.log("signature =>", signature);
    })
    .catch((err) => {
      console.log("err =>", err);
    });
};
