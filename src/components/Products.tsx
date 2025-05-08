import { Product } from "../types";

interface Props {
  product: Product;
}

export default function Products({ product }: Props) {
  return (
    <div>
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white border rounded-lg hover:bg-gray-100 text-blue-600"
      >
        {product.title}
      </a>{" "}
      <small>#ad</small>
    </div>
  );
}
