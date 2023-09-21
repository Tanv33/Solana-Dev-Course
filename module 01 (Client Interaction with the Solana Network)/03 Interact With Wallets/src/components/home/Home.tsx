import { FC } from "react";
import WalletContextProvider from "../wallet/WalletContextProvider";
import { AppBar } from "./AppBat";
// import { PingButton } from "./PingButton";

const Home: FC = () => {
  return (
    <div>
      <WalletContextProvider>
        <AppBar />
        {/* <div>
          <PingButton />
        </div> */}
      </WalletContextProvider>
    </div>
  );
};

export default Home;
