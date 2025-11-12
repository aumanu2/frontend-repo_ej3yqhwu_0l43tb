import { Link, NavLink, Outlet } from 'react-router-dom'
import { ShoppingBag, Menu, X, Instagram, Twitter, Facebook } from 'lucide-react'
import { useState } from 'react'

export default function Layout() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl tracking-widest font-semibold">
            <span className="text-white">LUXE</span><span className="text-yellow-400">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/collections/men" className={({isActive})=>`uppercase tracking-widest hover:text-yellow-400 transition ${isActive?'text-yellow-400':''}`}>Men</NavLink>
            <NavLink to="/collections/women" className={({isActive})=>`uppercase tracking-widest hover:text-yellow-400 transition ${isActive?'text-yellow-400':''}`}>Women</NavLink>
            <NavLink to="/about" className={({isActive})=>`uppercase tracking-widest hover:text-yellow-400 transition ${isActive?'text-yellow-400':''}`}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=>`uppercase tracking-widest hover:text-yellow-400 transition ${isActive?'text-yellow-400':''}`}>Contact</NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/cart" aria-label="Cart" className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] rounded-full px-1">2</span>
            </Link>
            <button className="md:hidden" onClick={()=>setOpen(true)} aria-label="Open Menu"><Menu/></button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl tracking-widest font-semibold mb-4">LUXE<span className="text-yellow-400">.</span></div>
            <p className="text-white/60 text-sm">A curated house of modern luxury. Minimal. Black. Bold.</p>
          </div>
          <div className="text-sm">
            <div className="uppercase tracking-widest text-white/60 mb-3">Support</div>
            <ul className="space-y-2 text-white/80">
              <li><Link to="#">Help Center</Link></li>
              <li><Link to="#">Returns</Link></li>
              <li><Link to="#">Shipping</Link></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="uppercase tracking-widest text-white/60 mb-3">Legal</div>
            <ul className="space-y-2 text-white/80">
              <li><Link to="#">Terms</Link></li>
              <li><Link to="#">Privacy</Link></li>
            </ul>
            <div className="flex gap-4 mt-6 text-white/60">
              <a href="#" aria-label="Instagram"><Instagram/></a>
              <a href="#" aria-label="Twitter"><Twitter/></a>
              <a href="#" aria-label="Facebook"><Facebook/></a>
            </div>
          </div>
        </div>
        <div className="border-t border-yellow-500/40"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-white/50">© {new Date().getFullYear()} LUXE. All rights reserved.</div>
      </footer>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur">
          <div className="absolute top-4 right-4"> 
            <button onClick={()=>setOpen(false)} aria-label="Close Menu" className="p-2 rounded border border-white/10"><X/></button>
          </div>
          <div className="h-full flex items-center justify-center">
            <nav className="space-y-6 text-center text-2xl">
              <NavLink onClick={()=>setOpen(false)} to="/collections/men" className="block hover:text-yellow-400">Men</NavLink>
              <NavLink onClick={()=>setOpen(false)} to="/collections/women" className="block hover:text-yellow-400">Women</NavLink>
              <NavLink onClick={()=>setOpen(false)} to="/about" className="block hover:text-yellow-400">About</NavLink>
              <NavLink onClick={()=>setOpen(false)} to="/contact" className="block hover:text-yellow-400">Contact</NavLink>
              <NavLink onClick={()=>setOpen(false)} to="/cart" className="block hover:text-yellow-400">Cart</NavLink>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
