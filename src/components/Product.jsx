import { Link } from "react-router-dom";
import firstLetterUppercase from "../util/formatters";

export default function Product({ product }) {
  return (
    <div>
      <Link
        to={`/product/${product.id}`}
        className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
      >
        <img
          src={product.image}
          loading="lazy"
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </Link>      
      <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
        <div className="flex flex-col">
          <Link
            to={`/product/${product.id}`}
            className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
          >
            {product.title.length > 20
              ? product.title.slice(0, 25) + "..."
              : product.title}
          </Link>          
          <span className="text-sm text-gray-500 lg:text-base">
            {firstLetterUppercase(product.category)}
          </span>
        </div>

        <div className="flex flex-col items-end">
          <span className="font-bold text-gray-600 lg:text-lg">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
