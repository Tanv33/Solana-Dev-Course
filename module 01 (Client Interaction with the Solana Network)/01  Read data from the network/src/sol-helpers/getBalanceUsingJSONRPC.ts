import { clusterApiUrl } from "@solana/web3.js";

export async function getBalanceUsingJSONRPC(address: string) {
  const url = clusterApiUrl("devnet");
  //   return fetch(url, {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getBalance",
      params: [address],
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.error) {
        console.log(json.error);
        // throw json.error;
      }
      console.log(
        "balance =>",
        json["result"]["value"] as number,
        "SOL",
        "by getBalanceUsingJSONRPC sol-helper"
      );
      //   return json["result"]["value"] as number;
    })
    .catch((error) => {
      console.log(error);
      //   throw error;
    });
}
