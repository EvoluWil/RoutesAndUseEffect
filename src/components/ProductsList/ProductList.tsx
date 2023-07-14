import { Link } from "react-router-dom";

import "./ProductList.css";
import { Product } from "../../types/product";

type ProductsListProps = {
  products: Product[];
};

function ProductsList({ products }: ProductsListProps) {
  return (
    <ul>
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product-detail/${product.id}`}
          style={{ textDecoration: 'none', color: '#0a0a0a' }}
        >
          <li>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.price}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default ProductsList;
