import { FC } from "react";

export const PingButton: FC = () => {
  const onClick = () => {
    console.log("Ping!");
  };

  return (
    <div onClick={onClick}>
      <button>Ping!</button>
    </div>
  );
};
