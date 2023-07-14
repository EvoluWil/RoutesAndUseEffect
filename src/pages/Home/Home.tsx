import { useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList/ProductList";
import { Product } from "../../types/product";
import { ShoeService } from "../../services/shoeService";
import Loading from "../../components/Loading/Loading";
import Input from "../../components/Input/Input";

export default function Home() {
  const [homeProducts, setHomeProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [term, setTerm] = useState('')

  const getProducts = async () => {
    setLoading(true)
    const data = await ShoeService.getAll()
    setHomeProducts(data)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (loading) {
    return <Loading />
  }

  const filteredProducts = homeProducts.filter((product) => {
    return product.title.toLowerCase().includes(term.toLowerCase())
  })

  return (
    <>
      <Input value={term} onChange={({ target }) => setTerm(target.value)} label="Buscar por nome" id="filtro" />
      <ProductsList products={filteredProducts} />
    </>
  );
}
