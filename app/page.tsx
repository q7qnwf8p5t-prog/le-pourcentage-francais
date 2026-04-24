'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const DIMS = [
  { icon: '💶', label: 'Revenus', desc: "Salaire, épargne, stabilité financière et revenus passifs.", color: '#c9a84c' },
  { icon: '🏠', label: 'Patrimoine', desc: "Immobilier, placements, épargne long terme et héritage.", color: '#e47a4c' },
  { icon: '🎓', label: 'Diplôme', desc: "Niveau d'études, langues, compétences rares et formation continue.", color: '#4c9ac9' },
  { icon: '❤️', label: 'Santé', desc: "Activité physique, alimentation, sommeil et bien-être mental.", color: '#4cc97a' },
  { icon: '🤝', label: 'Réseau', desc: "Contacts influents, LinkedIn, associations et mentorat.", color: '#9a4cc9' },
  { icon: '🌟', label: 'Mode de vie', desc: "Voyages, projets personnels, culture et rapport à l'avenir.", color: '#c94c9a' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628] overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#c9a84c]/4 blur-[140px]" />
      </div>

      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-block text-[#c9a84c] text-xs tracking-[0.3em] uppercase border border-[#c9a84c]/30 px-4 py-1.5 rounded-full mb-6">
            Calculateur de rang social · Données INSEE
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.25)} className="font-playfair text-5xl sm:text-7xl font-bold leading-[1.1] mb-6">
          Dans quel <span className="text-[#c9a84c]">top %</span><br />
          des Français<br />
          êtes-vous ?
        </motion.h1>

        <motion.p {...fadeUp(0.4)} className="text-gray-400 max-w-lg mb-12 text-lg leading-relaxed">
          6 dimensions analysées. Revenus, patrimoine, diplôme, santé, réseau, mode de vie.
          Découvrez votre positionnement réel parmi 68 millions de Français.
        </motion.p>

        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="/quiz?mode=rapide">
            <div className="cursor-pointer bg-[#c9a84c] hover:bg-[#e4c97e] text-[#0a1628] rounded-2xl px-8 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(201,168,76,0.35)] min-w-[220px] text-left">
              <p className="font-bold text-lg">Quiz Rapide</p>
              <p className="text-sm opacity-70 mt-0.5">15 questions · ~3 min</p>
            </div>
          </Link>
          <Link href="/quiz?mode=complet">
            <div className="cursor-pointer border border-white/15 hover:border-white/30 bg-[#112240] hover:bg-[#1a2f4e] rounded-2xl px-8 py-5 transition-all duration-300 hover:-translate-y-1 min-w-[220px] text-left">
              <p className="font-bold text-lg text-white">Quiz Approfondi</p>
              <p className="text-sm text-gray-400 mt-0.5">50 questions · ~10 min</p>
            </div>
          </Link>
        </motion.div>

        <motion.p {...fadeUp(0.7)} className="text-gray-600 text-xs mt-8">
          Basé sur les données de l'INSEE · Revenus, patrimoine, diplômes des ménages français
        </motion.p>
      </section>

      <section className="relative px-6 pb-32 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-3">Méthodologie</p>
          <h2 className="font-playfair text-4xl font-bold text-white">6 dimensions, 1 rang</h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">Chaque question est calibrée sur les statistiques réelles des ménages français (INSEE 2023).</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {DIMS.map((dim, i) => (
            <motion.div
              key={dim.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#112240] border border-white/6 hover:border-white/15 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4" style={{ backgroundColor: `${dim.color}18`, border: `1px solid ${dim.color}35` }}>
                {dim.icon}
              </div>
              <h3 className="font-semibold mb-2" style={{ color: dim.color }}>{dim.label}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{dim.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
