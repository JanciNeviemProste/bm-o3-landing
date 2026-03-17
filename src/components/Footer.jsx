export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="text-xl font-bold text-white tracking-tight">
            Pulse<span className="text-blue-500">Track</span>
          </a>
          <nav aria-label="Pätička" className="flex gap-6">
            <a href="#funkcie" className="text-sm text-gray-400 hover:text-white transition-all duration-300">
              Funkcie
            </a>
            <a href="#kontakt" className="text-sm text-gray-400 hover:text-white transition-all duration-300">
              Kontakt
            </a>
          </nav>
          <p className="text-sm text-gray-500">&copy; 2026 PulseTrack. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}
