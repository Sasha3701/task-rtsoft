import { calcVMMax, calcVMMin } from "../../utils";

const createConfig = (rose, countries, region) => {
  return {
    backgroundColor: "transparent",
    title: {
      text: region,
      left: "center",
      top: 50,
      textStyle: {
        color: "#ccc",
      },
    },

    tooltip: {
      trigger: "item",
    },

    visualMap: {
      show: false,
      min: calcVMMin(countries[0].value),
      max: calcVMMax(countries[countries.length - 1].value),
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: "Population",
        type: "pie",
        radius: "50%",
        center: ["50%", "50%"],
        data: countries,
        roseType: rose,
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
          shadowColor: "rgba(0, 0, 0, 0)",
        },

        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (idx) {
          return Math.random() * 200;
        },
      },
    ],
  };
};

export default createConfig