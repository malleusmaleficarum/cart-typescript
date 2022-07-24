import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/data.json";
import { formatCurrency } from "../utilities/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className='flex items-center p-2 gap-2 border-gray-800 rounded-sm'>
      <img alt='' src={item.imgUrl} className='w-20 h-20 object-cover' />
      <div className='flex justify-items-center items-center'>
        <div className='flex-1 m-auto w-1/2 h-full'>
          <p>
            {item.name}
            <span>{quantity} x</span>
          </p>
          <p>{formatCurrency(item.price)}</p>
        </div>
        <div className='flex justify-end items-center gap-3 flex-1'>
          <p>{quantity * item.price}</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className='px-2 py-1 border-red-500 rounded-sm border text-red-600'
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
