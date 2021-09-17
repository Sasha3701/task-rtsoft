import { calcVMMax, calcVMMin } from "../../utils";

const createConfig = (countries, region, top) => {

  return {
    backgroundColor: "transparent",
    title: {
      text: region,
      left: "center",
      top: top,
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
        radius: "60%",
        center: ["50%", "50%"],
        data: countries,
        roseType: true,
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
          return 200;
        },
      },
    ],
  };
};

export default createConfig