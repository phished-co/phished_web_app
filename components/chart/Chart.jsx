import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    'Emails sent': 2890,
    "Times phished": 2338,
  },
  {
    date: "Feb 22",
    'Emails sent': 2756,
    "Times phished": 2103,
  },
  {
    date: "Mar 22",
    'Emails sent': 3322,
    "Times phished": 2194,
  },
  {
    date: "Apr 22",
    'Emails sent': 3470,
    "Times phished": 2108,
  },
  {
    date: "May 22",
    'Emails sent': 3475,
    "Times phished": 1812,
  },
  {
    date: "Jun 22",
    'Emails sent': 3129,
    "Times phished": 1726,
  },
];

const colorArray = [
  "blue", "red"
]

// const dataFormatter = (number) => {
//   return "$ " + Intl.NumberFormat("us").format(number).toString();
// };


const Chart = () => (
  <Card>
    <Title>Total Phishing Success Rates</Title>
    <AreaChart
      data={chartdata}
      categories={['Emails sent', "Times phished"]}
      dataKey="date"
      height="h-72"
      colors={colorArray}
      valueFormatter={undefined}
      marginTop="mt-4"
    />
  </Card>
);

Chart.displayName = 'Chart'

export default Chart
