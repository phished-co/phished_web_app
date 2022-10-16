import { Card, Title, AreaChart } from "@tremor/react";

const Chart = (props) => (
  <Card>
    <Title>All-Time Phishing Success Rate</Title>
    <AreaChart
      data={props.fakedata}
      categories={['Emails sent', "Times phished"]}
      dataKey="date"
      height="h-64"
      colors={['green', 'blue']}
      valueFormatter={undefined}
      marginTop="mt-4"
    />
  </Card>
);

Chart.displayName = 'Chart'

export default Chart
