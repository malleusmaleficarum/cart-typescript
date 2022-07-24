import { FC } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

interface Item {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

interface ItemCardProps {
  item: Item;
}

export const ItemCard: FC<ItemCardProps> = ({ item }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(item.id);
  return (
    <div className='flex p-2 flex-col gap-2 border-2 border-gray-200 rounded-md shadow-sm'>
      <img alt='' src={item.imgUrl} className='h-52 object-cover' />
      <div className='flex justify-between items-center'>
        <p className='font-bold text-xl'>{item.name}</p>
        <p className='text-zinc-500'>{formatCurrency(item.price)}</p>
      </div>
      <div>
        {quantity === 0 ? (
          <button
            className='p-1 bg-blue-500 rounded-sm w-full text-white font-semibold'
            onClick={() => increaseCartQuantity(item.id)}
          >
            Add to Cart
          </button>
        ) : (
          <div className='flex flex-col items-center gap-1'>
            <div className='flex items-center gap-2 justify-center'>
              <button
                className='px-2 bg-blue-500 rounded-sm text-white font-bold text-center'
                onClick={() => decreaseCartQuantity(item.id)}
              >
                -
              </button>
              <p className='font-semibold text-xl'>{quantity}</p>
              <p>In Cart</p>
              <button
                className='px-2 bg-blue-500 rounded-sm text-white font-bold text-center'
                onClick={() => increaseCartQuantity(item.id)}
              >
                +
              </button>
            </div>
            <button
              className='py-1 px-2 bg-red-600 rounded-sm text-white'
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
