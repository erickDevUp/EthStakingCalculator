import CheckRestCtx from "@/context/checkCtx";
import CheckBox from "./utils/checkBox";
import { useContext, useState } from "react";
import UseInflation from "@/tool/useInflation";

export default function ImputReward() {
  const { checkRest, rewardValue, setRewardValue } = useContext(
    CheckRestCtx
  ) as any;
  const { Inflation } = UseInflation();
  return (
    <>
      <label className="block mt-3 text-sm font-medium leading-6 text-gray-900 ">
        Annual Reward %{" "}
        <span className=" text-gray-400 text-[10px] ">(APY)</span>{" "}
        {checkRest && (
          <span className=" text-gray-400 text-[10px] ">
            ~ {Inflation}% After Inflation
          </span>
        )}
      </label>
      <div className="">
        <input
          id="reward"
          name="reward"
          type="number"
          required
          value={rewardValue}
          onChange={(e) => setRewardValue(e.currentTarget.value)}
          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
}
