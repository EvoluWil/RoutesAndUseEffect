import { products } from "../data/products";
import { Product } from "../types/product";

export const ShoeService = {
  async getAll() {
    const data = await new Promise<Product[]>((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 3000);
    })
    return data;
  },
  async getByGender(gender: 'men' | 'women') {
    const data = await new Promise<Product[]>((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(product => product.gender === gender)
        resolve(filteredProducts);
      }, 3000);
    })
    return data;
  },
}
