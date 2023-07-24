import RailwaySignal from "./Ie-1/RailwaySignal/RailwaySignal";
import { railwaySignals } from "../suchData/railwaySignals";
const Exercises = () => {
  return (
    <>
      {/* <RailwaySignal table={[1, 2, 3, 4]} /> */}
      {railwaySignals.map(signal=>(<RailwaySignal table={signal.code} />))}
    </>
  );
};
export default Exercises;
