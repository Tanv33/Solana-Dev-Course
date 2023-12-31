import { getBalance } from "./sol-helpers/getBalance";
import { getBalanceUsingJSONRPC } from "./sol-helpers/getBalanceUsingJSONRPC";

console.log("Welcome to Lesson 01 => Read data from the network");

// Get the Balance of an account using solana/web3 as an abstract JSON RPC API
getBalance();

// Get Balance Using JSON RPC
getBalanceUsingJSONRPC("7C4jsPZpht42Tw6MjXWF56Q5RQUocjBBmciEjDa8HRtp");
