import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CheckoutForm = ({ data }) => {
  const { user } = useAuth();
  const price = parseFloat(data.price.toFixed(2));
  console.log(price);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log("card", card);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    setProcessing(true);
    console.log("checkout form user email : " , user.email);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "unknown",
          name: user?.displayName || "anonymous",
        },
      },
    });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("payment intent", paymentIntent);

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      //dave payment info to database
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
        price,
        class: data,
        status: "service pending",
        class_name: data?.name,
        class_id: data?.class_id,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data.myClassResult, res.data.updateResult, res.data.deleteResult);
        if (res.data.result.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Payment Successful!!!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <div className=" w-1/2 mx-auto py-20">
      <form onSubmit={handleSubmit} className="border p-8 bg-base-300 w-full rounded-lg shadow-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-neutral btn-sm w-full mt-8 "
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
