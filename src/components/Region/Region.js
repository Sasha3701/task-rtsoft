import ReactEcharts from "echarts-for-react";
import { useSelector } from 'react-redux';
import createConfig from './config';
import style from "./Region.module.css"

const Region = ({ region }) => {

  const countries = useSelector(state => state.regions.value[region])

  return (
    <ReactEcharts
      className={style.pie}
      option={createConfig(true, countries, region)}
    />
  );
};

export default Region;