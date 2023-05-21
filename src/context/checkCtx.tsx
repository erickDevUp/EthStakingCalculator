import React, { useState } from "react";

const CheckRestCtx = React.createContext({});
export const CheckRest = ({ children }: any) => {
  const [checkRest, setCheckRest] = useState(false);
  const [amount, setAmount] = useState();

  const [rewardValue, setRewardValue] = useState("15");
  return (
    <CheckRestCtx.Provider
      value={{
        checkRest,
        setCheckRest,
        amount,
        setAmount,
        rewardValue,
        setRewardValue,
      }}
    >
      {children}
    </CheckRestCtx.Provider>
  );
};

export default CheckRestCtx;
