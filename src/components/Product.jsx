import firstLetterUppercase from "../util/formatters";

export default function Product({ product }) {
  return (
    <div>
        <a href="#" class="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
          <img src={product.image} loading="lazy" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />          
        </a>

        <div class="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
          <div class="flex flex-col">
            <a href="#" class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">{product.title.length > 20 ? product.title.slice(0, 25) + "..." : product.title}</a>
            <span class="text-sm text-gray-500 lg:text-base">{firstLetterUppercase(product.category)}</span>
          </div>

          <div class="flex flex-col items-end">
            <span class="font-bold text-gray-600 lg:text-lg">{product.price}</span>            
          </div>
        </div>
      </div>
  );
}
