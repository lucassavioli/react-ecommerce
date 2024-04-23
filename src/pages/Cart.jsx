import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartItem from "../components/Cart/CartItem";
import Error from "../components/Error";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      {cartCtx.items.length === 0 ? (
        <Error
          errorType="Oops..."
          warningMessage="Your cart is empty!"
          additionalMessage={
            "Go to our homepage and start adding amazing products!"
          }
          path="/"
          buttonMessage="Shop now"
        />
      ) : (
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Your Cart
            </h2>
          </div>

          <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
            {cartCtx.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={() => cartCtx.addItem(item)}
                onDecrease={() => cartCtx.removeItem(item.id)}
                onDelete={() => cartCtx.deleteItem(item.id)}
              />
            ))}
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
              <div className="space-y-1">
                <div className="flex justify-between gap-4 text-gray-500">
                  <span>Subtotal</span>
                  <span>${cartCtx.totalAmount}</span>
                </div>

                <div className="flex justify-between gap-4 text-gray-500">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="mt-4 border-t pt-4">
                <div className="flex items-start justify-between gap-4 text-gray-800">
                  <span className="text-lg font-bold">Total</span>

                  <span className="flex flex-col items-end">
                    <span className="text-lg font-bold">
                      ${cartCtx.totalAmount} USD
                    </span>
                    <span className="text-sm text-gray-500">including VAT</span>
                  </span>
                </div>
              </div>
            </div>

            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
