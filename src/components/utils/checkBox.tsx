import CheckRestCtx from "@/context/checkCtx";
import { useContext, useState } from "react";

export default function CheckBox() {
  const { checkRest, setCheckRest } = useContext(CheckRestCtx) as any;

  return (
    <div className="flex">
      <div className="flex items-center justify-center">
        <input
          type="checkbox"
          onChange={() => setCheckRest(!checkRest)}
          className="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5"
        />
      </div>
      <label
        htmlFor="email"
        className="block mx-2 text-sm font-medium leading-6 text-gray-900 "
      >
        Subtract Inflation % From Reward
      </label>
    </div>
  );
}
