import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/data.json";

interface ShoppingCartProps {
  isOpen: boolean;
}

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <>
      {isOpen && (
        <div
          className='w-full min-h-full bg-black absolute top-0 right-0 opacity-50 z-10'
          onClick={closeCart}
        />
      )}
      <div
        className={`w-1/3 h-full bg-white absolute top-0 right-0 transition z-20 border-b ${
          isOpen ? "" : "translate-x-full"
        }`}
      >
        <div className='flex justify-between items-center px-3 py-1 text-2xl mb-5'>
          <p
            className='font-semibold text-gray-400 cursor-pointer'
            onClick={closeCart}
          >
            X
          </p>
          <p className='font-bold'>Cart</p>
        </div>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div>
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </div>
    </>
  );
};
