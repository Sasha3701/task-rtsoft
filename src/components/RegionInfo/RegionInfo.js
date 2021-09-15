import ReactEcharts from "echarts-for-react";
import { useSelector } from 'react-redux';
import { VISUAL_MAP } from '../../const';

const ReginInfo = ({ region }) => {

  const countries = useSelector(state => state.regions.value[region])
  console.log(countries)

  return (
    <ReactEcharts
      style={{ height: "100vh" }}

      option={{
        backgroundColor: 'transparent',
        title: {
          text: "Customized Pie",
          left: "center",
          top: 0,
          textStyle: {
            color: "#ccc",
          },
        },

        tooltip: {
          trigger: "item",
        },

        visualMap: {
          show: false,
          min: VISUAL_MAP.MIN,
          max: VISUAL_MAP.MAX,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: "Population",
            type: "pie",
            radius: "85%",
            center: ["50%", "50%"],
            data: countries,
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)",
            },
            labelLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      }}
    />
  );
};

export default ReginInfo;