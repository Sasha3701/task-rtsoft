import { Grid } from "@material-ui/core";
import { REGIONS_ARR } from "../../const";
import Region from "../Region/Region";

const Regions = () => {
  return (
    <div style={{ backgroundColor: "#2c343c" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        {REGIONS_ARR.map((region, index) => (
          <Grid item>
            <Region key={index} region={region}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Regions;
