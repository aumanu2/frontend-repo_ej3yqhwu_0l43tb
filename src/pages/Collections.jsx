import { useEffect, useState } from 'react'
import api from '../lib/api'
import ProductCard from '../components/ProductCard'

export default function Collections({ gender }) {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({ category: '', sort: '' })

  useEffect(() => {
    const params = { gender }
    if (filters.category) params.category = filters.category
    if (filters.sort) params.sort = filters.sort
    api.listProducts(params).then(setProducts).catch(()=>{})
  }, [gender, filters])

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">{gender === 'men' ? 'Men' : 'Women'}'s Collection</h1>
          <p className="text-white/60 mt-1">Refined pieces curated for the season.</p>
        </div>
        <div className="flex gap-3">
          <select value={filters.category} onChange={(e)=>setFilters(f=>({...f, category:e.target.value}))} className="bg-black border border-white/10 px-3 py-2">
            <option value="">All Categories</option>
            <option value="outerwear">Outerwear</option>
            <option value="shoes">Shoes</option>
            <option value="tops">Tops</option>
            <option value="bags">Bags</option>
          </select>
          <select value={filters.sort} onChange={(e)=>setFilters(f=>({...f, sort:e.target.value}))} className="bg-black border border-white/10 px-3 py-2">
            <option value="">Sort</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
