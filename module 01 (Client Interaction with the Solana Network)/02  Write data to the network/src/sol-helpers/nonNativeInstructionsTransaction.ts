import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  TransactionInstruction,
  clusterApiUrl,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

export const nonNativeInstructionsTransaction = (payer: Keypair) => {
  const transaction = new Transaction();
  const PROGRAM_ADDRESS = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
  const PROGRAM_DATA_ADDRESS = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";

  const programId = new PublicKey(PROGRAM_ADDRESS);
  const programDataPubkey = new PublicKey(PROGRAM_DATA_ADDRESS);

  const instruction = new TransactionInstruction({
    keys: [
      {
        pubkey: programDataPubkey,
        isSigner: false,
        isWritable: true,
      },
    ],
    programId,
  });

  transaction.add(instruction);
  const connection = new Connection(clusterApiUrl("devnet"));

  sendAndConfirmTransaction(connection, transaction, [payer])
    .then((signature) => {
      console.log("signature =>", signature);
    })
    .catch((err) => {
      console.log(err);
    });
};
