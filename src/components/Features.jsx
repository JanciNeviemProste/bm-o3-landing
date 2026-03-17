const FEATURES = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Nepretržité sledovanie aktivity',
    description:
      'PulseTrack zaznamenáva každý váš krok, spálené kalórie a prejdenú vzdialenosť počas celého dňa. Pokročilý akcelerometer a gyroskop rozlišujú chôdzu, beh, cyklistiku aj plávanie — nemusíte nič manuálne prepínať. Na konci dňa získate podrobný prehľad vašej aktivity s porovnaním oproti vašim cieľom.',
    image: 'https://loremflickr.com/800/600/fitness,running,sport?random=2',
    imageAlt: 'Osoba beží s fitness trackerom na ruke',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Monitorovanie zdravia v reálnom čase',
    description:
      'Optický senzor srdcového tepu meria vašu frekvenciu každých 5 sekúnd a upozorní vás, ak sa dostanete mimo bezpečné pásmo. Sledovanie hladiny kyslíka v krvi (SpO₂), variability srdcového tepu (HRV) a úrovne stresu vám pomôže lepšie porozumieť svojmu telu a predísť preťaženiu.',
    image: 'https://loremflickr.com/800/600/heart,health,monitor?random=3',
    imageAlt: 'Zobrazenie srdcového tepu na displeji trackera',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
    title: 'Inteligentná analýza spánku',
    description:
      'Zaspávate ťažko alebo sa budíte unavení? PulseTrack analyzuje fázy vášho spánku — ľahký, hlboký aj REM — a na základe dát vám navrhne optimálny čas na zaspávanie. Tichý vibračný budík vás zobudí v najľahšej fáze spánku, takže sa cítite oddýchnutí a plní energie.',
    image: 'https://loremflickr.com/800/600/sleep,night,rest?random=4',
    imageAlt: 'Spiaci človek s fitness trackerom',
  },
]

export default function Features() {
  return (
    <section id="funkcie" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Prečo si vybrať PulseTrack
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Kombinácia presných senzorov, dlhej výdrže batérie a elegantného dizajnu, ktorá zmení spôsob, akým sa staráte o svoje zdravie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <article
              key={i}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-base text-gray-300 opacity-80 leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
