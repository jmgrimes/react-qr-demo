import { withLDConsumer } from "launchdarkly-react-client-sdk";
import heart from "./../images/heart.svg";

const showHeart = ({ flags: _, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactShowHeart");

  return showFeature ? (
  <div>
    <img src={heart} className="heart" alt="heart" />
  </div>
  ) : (
  <div />
  );
};

export default withLDConsumer()(showHeart);