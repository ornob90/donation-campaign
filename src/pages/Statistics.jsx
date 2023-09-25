import { useContext, useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { getDonationsFromLS } from "../utilities/localStorage";
import DonationContext from "../context/DonationContext";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

const Statistics = () => {
  const [myDonationPrct, setMyDonationPrct] = useState(0);
  const [totalDonationPrct, setTotalDonationPrct] = useState(100);
  const totalDonation = useContext(DonationContext).length;

  useEffect(() => {
    const myDonationCount = getDonationsFromLS().length;

    const myDonationPrct = (myDonationCount / totalDonation) * 100;
    console.log(myDonationPrct);
    setMyDonationPrct(myDonationPrct);
  }, []);

  const data = [
    { name: "Total", value: myDonationPrct },
    { name: "Mine", value: 100 - myDonationPrct },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  return (
    <div className="w-screen h-[60vh]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex-wrap flex w-full justify-center items-center gap-4 md:gap-16">
        <div className="flex-wrap flex gap-2 items-center text-[#0B0B0B]">
          <p>Your Donation</p>
          <div className="w-[100px] h-[0px] border-4 border-[#00C49F]"></div>
        </div>
        <div className="flex-wrap flex gap-2 items-center text-[#0B0B0B]">
          <p>Total Donation</p>
          <div className="w-[100px] h-[0px] border-4 border-[#FF444A]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
