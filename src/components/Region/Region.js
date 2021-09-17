import ReactEcharts from "echarts-for-react";
import { useSelector } from 'react-redux';
import createConfig from './config';
import styled from "styled-components"
import { useEffect, useState } from 'react';

const StyledRegion = styled(ReactEcharts)`
  height: 600px !important;
  width: 600px;

  @media (max-width: 650px) {
    height: 500px !important;
    width: 500px;
  }

  @media (max-width: 550px) {
    height: 400px !important;
    width: 400px;
  }

  @media (max-width: 450px) {
    height: 300px !important;
    width: 300px;
  }
`

const Region = ({ region }) => {

  const [top, setTop] = useState(() => window.innerWidth < 700 ? 10 : 50)
  const countries = useSelector(state => state.regions.value[region])

  const handleResize = () => {
    const value = window.innerWidth < 700 ? 10 : 50
    setTop(value)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <StyledRegion
      option={createConfig(countries, region, top)}
    />
  );
};

export default Region;