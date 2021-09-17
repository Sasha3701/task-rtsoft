import ReactEcharts from "echarts-for-react";
import { useSelector } from 'react-redux';
import createConfig from './config';

const Region = ({ region }) => {

  const countries = useSelector(state => state.regions.value[region])

  return (
    <ReactEcharts
      style={{ height: "600px", width: "600px" }}
      option={createConfig(true, countries, region)}
    />
  );
};

export default Region;