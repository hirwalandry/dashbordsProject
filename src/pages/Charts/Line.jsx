import React from 'react';
import { ChartsHeader, LineChart } from "../../component"
import { Header } from "../../component";

function Line(props) {
    return (
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="chart" title="Inflation Rate" />
        <div className="w-full">
          <LineChart />
        </div>
      </div>
    );
}

export default Line;