import { useState } from 'react'

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'E-mail',
    value: 'info@pulsetrack.sk',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Telefón',
    value: '+421 2 5443 1278',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Adresa',
    value: 'Mlynské nivy 48, 821 09 Bratislava',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Otváracie hodiny',
    value: 'Po — Pi: 9:00 — 17:00',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Kontaktujte nás</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Máte otázky ohľadom PulseTrack alebo chcete vedieť viac o predobjednávke? Napíšte nám a ozveme sa vám do 24 hodín.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
            {submitted ? (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <p className="text-2xl font-semibold text-white mb-2">Ďakujeme!</p>
                  <p className="text-gray-400">Vaša správa bola odoslaná. Čoskoro sa vám ozveme.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Meno
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-all duration-300"
                    placeholder="Vaše meno"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-all duration-300"
                    placeholder="vas@email.sk"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Predmet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-all duration-300"
                    placeholder="Predmet správy"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Správa
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-all duration-300 resize-y"
                    placeholder="Napíšte vašu správu..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-400 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
                >
                  Odoslať správu
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center space-y-8">
            {CONTACT_INFO.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <p className="text-sm font-medium text-gray-400">{item.label}</p>
                  <p className="text-base text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
