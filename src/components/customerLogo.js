import { withLDConsumer } from "launchdarkly-react-client-sdk";

const customerLogo = ({ flags: _, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactShowCustomerLogo");
  let logo = ldClient.variation("reactCustomerLogo");

  return showFeature ? (
  <div>
    <img src={logo} className="customer-logo" alt="customerLogo" />
  </div>
  ) : (
  <div />
  );
};

export default withLDConsumer()(customerLogo);