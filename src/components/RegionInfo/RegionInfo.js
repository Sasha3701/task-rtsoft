import { useSelector } from "react-redux";
import { PolarArea } from "react-chartjs-2";

const RegionInfo = ({ region }) => {
  const regions = useSelector((state) => state.regions.value[region]);

  console.log(regions);

  return (
    <PolarArea
      width={500}
      height={500}
      data={{
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
        datasets: [
          {
            label: "test",
            data: [10, 10, 10, 20],
            backgroundColor: ["rgb(255, 0, 0)", "blue", "yellow", "green"],
          },
        ],
      }}
      options={{
        type: "polarArea",
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
          legend: false,
          tooltip: false,
        },
        scales: {
          r: {
            display: false,
          },
        },
        elements: {
          arc: {
            hoverBackgroundColor: (context) => {
              var index = context.dataIndex;
              var value = context.dataset.backgroundColor[index];
              console.log(value)
              return value.color
            },
            borderWidth: 0,
          },
        },
      }}
    />
  );
};

export default RegionInfo;
