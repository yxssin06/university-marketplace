import Image from 'next/image';
import { Item } from '../data/mockData';

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-200">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
          {item.condition}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 min-h-[2.5rem]">
            {item.title}
          </h3>
          <p className="text-lg font-bold text-indigo-600 ml-2">
            ${item.price}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
          <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-600 font-medium">
            {item.category}
          </span>
          <span className="flex items-center">
            {item.timeListed}
          </span>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
          <span className="text-gray-500">
            Seller: <span className="text-gray-900 font-medium">{item.seller}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
