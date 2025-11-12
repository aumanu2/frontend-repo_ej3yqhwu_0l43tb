import { useState } from 'react'

export default function Cart() {
  const [open, setOpen] = useState(true)
  const items = [
    { id: 'st-laurent-coat', name: 'Wool Cashmere Overcoat', price: 2490, quantity: 1 },
    { id: 'ysl-boots-chelsea', name: 'Leather Chelsea Boots', price: 1290, quantity: 1 },
  ]
  const total = items.reduce((s,i)=> s + i.price * i.quantity, 0)

  return (
    <div className="relative">
      <button onClick={()=>setOpen(true)} className="hidden">Open Cart</button>
      {open && (
        <div className="fixed inset-0 bg-black/60 z-40" onClick={()=>setOpen(false)} />
      )}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-black border-l border-white/10 z-50 transition-transform ${open? 'translate-x-0':'translate-x-full'}`}>
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="uppercase tracking-widest">Your Cart</div>
          <button onClick={()=>setOpen(false)} className="text-white/60 hover:text-white">Close</button>
        </div>
        <div className="p-6 space-y-4 overflow-auto h-[calc(100%-200px)]">
          {items.map(i=> (
            <div key={i.id} className="flex items-center justify-between border border-white/10 p-3">
              <div>
                <div className="text-white/90">{i.name}</div>
                <div className="text-white/50 text-sm">Qty {i.quantity}</div>
              </div>
              <div className="text-yellow-400">${i.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="p-6 border-t border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60">Total</div>
            <div className="text-yellow-400">${total.toFixed(2)}</div>
          </div>
          <a href="/checkout" className="block text-center w-full px-6 py-3 bg-white text-black uppercase tracking-widest text-sm">Checkout</a>
        </div>
      </div>
    </div>
  )
}
