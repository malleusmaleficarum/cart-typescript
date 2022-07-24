import { ItemCard } from "../components/ItemCard";
import storeItems from "../data/data.json";

export const Store = () => {
  return (
    <div>
      <h1 className='mb-3 font-semibold text-3xl'>Store</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {storeItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
