import React from 'react';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';

const Graph = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData([
      {
        x: 'Março/2021',
        y: 2000,
      },
      {
        x: 'Abril/2021',
        y: 3000,
      },
      {
        x: 'Maio/2021',
        y: 1500,
      },
      {
        x: 'Junho/2021',
        y: 1000,
      },
    ]);
  }, []);

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      height={192}
      padding={{ top: 16, right: 16, bottom: 32, left: 48 }}
      domainPadding={20}
    >
      <VictoryBar data={data}></VictoryBar>
    </VictoryChart>
  );
};

export default Graph;
