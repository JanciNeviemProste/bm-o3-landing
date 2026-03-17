export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight text-white">
            Váš nový partner pre&nbsp;
            <span className="text-blue-500">aktívny životný štýl</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 text-gray-300 opacity-80">
            PulseTrack je inteligentný fitness tracker, ktorý monitoruje vašu aktivitu 24&nbsp;hodín denne.
            Sledujte kroky, srdcový tep, spánok aj stres — všetko na jednom elegantnom displeji.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#kontakt"
              className="rounded-lg bg-blue-500 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-blue-400 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Predobjednať teraz
            </a>
            <a
              href="#funkcie"
              className="rounded-lg border border-gray-600 px-8 py-4 text-base font-semibold text-gray-200 hover:border-blue-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Zistiť viac
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-hidden aspect-square w-full max-w-md shadow-2xl border border-white/10">
            <img
              src="https://loremflickr.com/800/800/fitness,tracker,smartwatch?random=1"
              alt="PulseTrack fitness tracker na zápästí"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
