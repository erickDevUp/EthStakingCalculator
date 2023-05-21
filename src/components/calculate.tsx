import CheckRestCtx from "@/context/checkCtx";
import UseInflation from "@/tool/useInflation";
import React, { useContext } from "react";

export default function Calculate({ setCalculate }: any) {
  const { amount, checkRest, rewardValue } = useContext(CheckRestCtx) as any;

  const { Inflation } = UseInflation();
  const handleResult = () => {
    const result = checkRest
      ? (parseInt(amount) * Inflation) / 100
      : (parseInt(amount) * parseInt(rewardValue)) / 100;
    setCalculate(result);
  };

  return (
    <button
      type="submit"
      onClick={handleResult}
      className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Calculate
    </button>
  );
}
