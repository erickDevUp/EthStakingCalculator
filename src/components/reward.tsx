import CheckRestCtx from "@/context/checkCtx";
import Container from "./container";
import Result from "./utils/result";
import { useContext, useEffect, useState } from "react";

type Props = { calculate: number; getConversionPrice: Function };
export default function Reward({ calculate, getConversionPrice }: Props) {
  const [rewards, setRewards] = useState({
    day: 0,
    week: 0,
    month: 0,
    year: 0,
  });
  const [conversion, setConversion] = useState({
    conversion_day: 0,
    conversion_week: 0,
    conversion_month: 0,
    conversion_year: 0,
  });

  useEffect(() => {
    const day = Number((calculate / 365).toFixed(2));
    const week = Number((day * 7).toFixed(2));
    const month = Number((week * 4.2).toFixed(2));
    const year = parseFloat(calculate.toFixed(2));

    const newReward = { day, week, month, year };
    setRewards({ ...newReward });

    const conversion_day = getConversionPrice(day);
    const conversion_week = getConversionPrice(week);
    const conversion_month = getConversionPrice(month);
    const conversion_year = getConversionPrice(year);
    const newConversion = {
      conversion_day,
      conversion_week,
      conversion_month,
      conversion_year,
    };
    setConversion({ ...newConversion });
  }, [calculate]);

  return (
    <div className="px-6">
      <Container>
        <label className="block text-sm font-medium leading-6 text-gray-900 mb-4">
          Rewards :
        </label>
        <Result
          date={"Day"}
          rewardUsd={rewards.day}
          rewardDot={conversion.conversion_day}
        ></Result>
        <Result
          date={"Week"}
          rewardUsd={rewards.week}
          rewardDot={conversion.conversion_week}
        ></Result>
        <Result
          date={"Month"}
          rewardUsd={rewards.month}
          rewardDot={conversion.conversion_month}
        ></Result>
        <Result
          date={"Year"}
          rewardUsd={rewards.year}
          rewardDot={conversion.conversion_year}
        ></Result>
      </Container>
    </div>
  );
}
