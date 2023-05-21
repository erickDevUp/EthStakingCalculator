import CheckRestCtx from "@/context/checkCtx";
import React, { useContext } from "react";

const inflationRate: number = 0.52;

export default function UseInflation() {
  const { rewardValue } = useContext(CheckRestCtx) as any;

  const Inflation = parseInt(rewardValue) - inflationRate;

  return { Inflation };
}
