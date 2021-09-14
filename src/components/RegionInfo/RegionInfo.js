import { useSelector } from "react-redux"

const RegionInfo = ({ region }) => {

    const regions = useSelector(state => state.regions.value[region])

    console.log(regions)

    return "RegionInfo"
}

export default RegionInfo