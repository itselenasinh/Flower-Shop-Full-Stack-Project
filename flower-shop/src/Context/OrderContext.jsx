import { createContext, useState } from "react";
import { createCheckoutOrder } from "../services/apiFlower";

export const CheckoutOrderContext = createContext();

function OrderContext({ children }) {
  const [orderDetails, setOrderDetails] = useState([]);

  const createOrder = async (product) => {
    console.log(product);

    const productsQTYs = product.map((p) => {
      return {
        productId: p.id,
        QTY: p.quantity,
      };
    });

    const data = {
      status: "processing",
      productsQTYs,
    };

    const response = await createCheckoutOrder(data);
    setOrderDetails(response);
    console.log(response);
  };

  return (
    <CheckoutOrderContext.Provider
      value={{ orderDetails, setOrderDetails, createOrder }}
    >
      {children}
    </CheckoutOrderContext.Provider>
  );
}

export default OrderContext;
