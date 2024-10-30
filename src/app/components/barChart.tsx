import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartStatistic = () => {
  const data = [
    {
      name: "To Do",
      count: 2,
      
    },
    {
      name: "In Progress",
      count: 1,
    },
    {
      name: "Review",
      count: 2,
    },
    {
      name: "Complete",
      count: 3
    }
   
  ];

  return (
    <ResponsiveContainer  width="70%" height="80%" className="ml-20">
      <BarChart width={50} height={80} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#99C3FF" barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartStatistic;
