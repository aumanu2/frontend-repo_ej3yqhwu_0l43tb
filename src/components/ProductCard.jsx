import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
  return (
    <motion.a href={`/product/${product.id}`} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="group block">
      <div className="relative overflow-hidden rounded-lg border border-white/10">
        <img src={product.images?.[0]} alt={product.name} className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition px-4 py-2 bg-white text-black text-xs tracking-widest uppercase">Add to Cart</button>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <div>
          <div className="text-white/90">{product.name}</div>
          <div className="text-white/50">{product.category}</div>
        </div>
        <div className="text-yellow-400">${product.price.toFixed(2)}</div>
      </div>
    </motion.a>
  )
}
