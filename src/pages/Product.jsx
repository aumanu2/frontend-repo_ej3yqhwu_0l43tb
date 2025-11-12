import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../lib/api'
import { motion } from 'framer-motion'

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    api.getProduct(id).then(setProduct).catch(()=>{})
  }, [id])

  if (!product) return <div className="px-6 py-20 text-white/60">Loading...</div>

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {product.images?.map((src, i) => (
            <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="overflow-hidden rounded-lg border border-white/10">
              <img src={src} alt={product.name} className="w-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>
          ))}
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">{product.name}</h1>
          <div className="text-yellow-400 text-xl mt-2">${product.price.toFixed(2)}</div>
          {product.sizes?.length > 0 && (
            <div className="mt-6">
              <div className="uppercase tracking-widest text-xs text-white/60 mb-2">Size</div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(s => (
                  <button key={s} className="px-4 py-2 border border-white/10 hover:border-yellow-400 hover:text-yellow-400 transition">{s}</button>
                ))}
              </div>
            </div>
          )}
          <button className="mt-8 w-full md:w-auto px-6 py-3 bg-white text-black uppercase tracking-widest text-sm">Add to Cart</button>
          <p className="text-white/70 mt-6 leading-relaxed">{product.description}</p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl tracking-widest uppercase mb-6">Recommended</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...(product.tags||[]).slice(0,4)].map((_,i)=> (
            <div key={i} className="h-64 rounded-lg border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>
    </section>
  )
}
