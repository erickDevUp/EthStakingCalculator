import CheckRestCtx from "@/context/checkCtx";
import { useContext } from "react";
type Props = { getConversionPrice: Function };
export default function ImputMont({ getConversionPrice }: Props) {
  const { amount, setAmount } = useContext(CheckRestCtx) as any;
  return (
    <>
      <label className="block text-sm font-medium leading-6 text-gray-900 mt-4">
        Amount USD{" "}
        {amount && (
          <span className=" text-gray-400 text-[10px] ">
            ~{getConversionPrice(amount)} DOT
          </span>
        )}
      </label>
      <div className="">
        <input
          id="amountUsd"
          name="amountUsd"
          type="number"
          required
          value={amount}
          onChange={(e) => {
            setAmount(e.currentTarget.value);
          }}
          placeholder="$100"
          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
}
