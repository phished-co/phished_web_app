import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};


const Chart = () => (
  <Card>
    <Title>Total Phishing Success Rates</Title>
    <AreaChart
      data={chartdata}
      categories={["SemiAnalysis", "The Pragmatic Engineer"]}
      dataKey="date"
      height="h-72"
      colors={["indigo", "cyan"]}
      valueFormatter={dataFormatter}
      marginTop="mt-4"
    />
  </Card>
);

Chart.displayName = 'Chart'

export default Chart
