import { Keypair, PublicKey } from "@solana/web3.js";
import { transferSol } from "./sol-helpers/transferSol";
import { personalKeyPair, personalPublicKey } from "./personalKeys";
import { nonNativeInstructionsTransaction } from "./sol-helpers/nonNativeInstructionsTransaction";

console.log("Welcome to Lesson 02 => Write data to the network");

// Creating new receiver using solana buildIn methods
const receiver = Keypair.generate();
console.log("Receiver Public Key:", receiver.publicKey.toString());
// console.log("Receiver Private Key:", receiver.secretKey.toString());
// const secret = JSON.parse(personalKeyPair ?? "") as number[]
// const secretKey = Uint8Array.from(secret)
// const keyPairFromSecretKey = Keypair.fromSecretKey(secretKey)

// Send SOL from one account to other
transferSol(
  new PublicKey(personalPublicKey),
  receiver.publicKey,
  0.002,
  Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(personalKeyPair ?? "") as number[])
  )
);

// You can create non-native instructions with the TransactionInstruction constructor.
nonNativeInstructionsTransaction(
  Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(personalKeyPair ?? "") as number[])
  )
);
