import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <Helmet>
        <title>Global Speak || Payment</title>
      </Helmet>
     
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} />
      </Elements>
    </div>
  );
};

export default Payment;