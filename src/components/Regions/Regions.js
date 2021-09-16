import Region from "../Region/Region";
import style from "./Regions.module.css";

const Regions = ({ elements }) => {
  return (
    <ul className={style.regions}>
      {elements.map((region, index) => (
        <li key={index} className={style.regions__item}>
          <Region key={index} region={region} />
        </li>
      ))}
    </ul>
  );
};

export default Regions;
