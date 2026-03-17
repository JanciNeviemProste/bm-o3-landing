import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Funkcie', href: '#funkcie' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/70 backdrop-blur-md border-b border-white/10"
      aria-label="Hlavná navigácia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-white tracking-tight">
          Pulse<span className="text-blue-500">Track</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-400 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Rezervovať
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2 transition-all duration-300"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Otvoriť menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-t border-white/10 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="mt-2 block rounded-lg bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-md hover:bg-blue-400 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Rezervovať
          </a>
        </div>
      )}
    </nav>
  )
}
