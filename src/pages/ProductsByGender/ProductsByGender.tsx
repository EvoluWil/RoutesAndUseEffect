import { useCallback, useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import { Product } from '../../types/product'
import { ShoeService } from '../../services/shoeService'
import ProductsList from '../../components/ProductsList/ProductList'
import { useLocation } from 'react-router-dom'

export default function ProductsByGender() {
  const [MenProducts, setMenProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const { pathname } = useLocation()

  const getProducts = useCallback(async () => {
    const gender = pathname.replace('/', '') as Product['gender']
    setLoading(true)
    const data = await ShoeService.getByGender(gender)
    setMenProducts(data)
    setLoading(false)
  }, [pathname])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  if (loading) {
    return <Loading />
  }

  return (
    <ProductsList products={MenProducts} />
  )
}
