import { products } from '../../data/products'

import "./ProductDetail.css";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams()

  const product = products.find(product => product.id === id);

  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
    <ul>
      <li>
        <img src={product.image} alt={product.title} />
        <strong>{product.title}</strong>
        <span>{product.price}</span>
      </li>
    </ul>
  );

}

export default ProductDetail;
