import { Card, Title, AreaChart } from "@tremor/react";

const Chart = (props) => (
  <Card>
    <Title>Phishing Success Rate</Title>
    <AreaChart
      data={props.data}
      categories={['Emails sent', "Times phished"]}
      dataKey="date"
      height="h-64"
      colors={['blue', 'red']}
      valueFormatter={undefined}
      marginTop="mt-4"
    />
  </Card>
);

Chart.displayName = 'Chart'

export default Chart
