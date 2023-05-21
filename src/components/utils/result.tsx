type ResultType = {
  date: string;
  rewardUsd: number;
  rewardDot: number;
};

export default function Result({ date, rewardUsd, rewardDot }: ResultType) {
  return (
    <div className="grid grid-cols-2 mt-2">
      <div className="flex items-center">
        <label className="block text-lg font-medium leading-6 text-gray-900 ">
          {date}:
        </label>
      </div>

      <div className="flex justify-end">
        <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
          <span className="text-xs text-green-500 uppercase">+$</span>
          <span className="text-base text-green-500">{rewardUsd} </span>
          <span className=" text-gray-400 text-[10px] ">~ {rewardDot} DOT</span>
        </p>
      </div>
    </div>
  );
}
