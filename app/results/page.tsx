'use client'
import { Suspense, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Radar, ResponsiveContainer, Tooltip,
} from 'recharts'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { getGlobalLabel } from '@/lib/questions'

const DIMS = [
  { key: 'r', label: 'Revenus', icon: '💶', color: '#c9a84c' },
  { key: 'p', label: 'Patrimoine', icon: '🏠', color: '#e47a4c' },
  { key: 'd', label: 'Diplôme', icon: '🎓', color: '#4c9ac9' },
  { key: 's', label: 'Santé', icon: '❤️', color: '#4cc97a' },
  { key: 'n', label: 'Réseau', icon: '🤝', color: '#9a4cc9' },
  { key: 'm', label: 'Mode de vie', icon: '🌟', color: '#c94c9a' },
]

function PercentBar({ score, color }: { score: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        />
      </div>
      <span className="text-xs font-semibold w-16 text-right" style={{ color }}>
        top {Math.max(1, 100 - score)}%
      </span>
    </div>
  )
}

function ResultsContent() {
  const params = useSearchParams()
  const cardRef = useRef<HTMLDivElement>(null)
  const [downloading, setDownloading] = useState(false)

  const r = Number(params.get('r') || 50)
  const p = Number(params.get('p') || 50)
  const d = Number(params.get('d') || 50)
  const s = Number(params.get('s') || 50)
  const n = Number(params.get('n') || 50)
  const m = Number(params.get('m') || 50)
  const mode = params.get('mode') || 'rapide'

  const scores = { r, p, d, s, n, m }
  const globalScore = Math.round((r + p + d + s + n + m) / 6)
  const topPercent = Math.max(1, 100 - globalScore)
  const status = getGlobalLabel(topPercent)

  const radarData = DIMS.map(dim => ({
    dim: dim.label,
    score: scores[dim.key as keyof typeof scores],
    fullMark: 100,
  }))

  const handleDownload = async () => {
    if (!cardRef.current) return
    setDownloading(true)
    try {
      const { toPng } = await import('html-to-image')
      const dataUrl = await toPng(cardRef.current, { quality: 0.95, pixelRatio: 2 })
      const link = document.createElement('a')
      link.download = `mon-pourcentage-francais-top${topPercent}.png`
      link.href = dataUrl
      link.click()
    } finally {
      setDownloading(false)
    }
  }

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  })

  return (
    <div className="min-h-screen bg-[#0a1628] py-16 px-6">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <span className="inline-block text-[#c9a84c] text-xs tracking-[0.3em] uppercase border border-[#c9a84c]/30 px-4 py-1.5 rounded-full mb-6">
            {mode === 'complet' ? 'Quiz Approfondi · 50 questions' : 'Quiz Rapide · 15 questions'}
          </span>
          <p className="text-gray-400 text-lg mb-3">Vous êtes dans le</p>
          <div className="font-playfair font-bold leading-none mb-3">
            <span className="text-[10rem] sm:text-[14rem] text-white" style={{ lineHeight: '0.9' }}>
              TOP
            </span>
            <br />
            <span className="text-[8rem] sm:text-[11rem] text-[#c9a84c]" style={{ lineHeight: '0.95' }}>
              {topPercent}%
            </span>
          </div>
          <p className="text-gray-400 text-xl mt-4">des Français</p>
          <p className="font-semibold text-lg mt-2" style={{ color: status.color }}>
            {status.label}
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.15)} className="bg-[#112240] rounded-2xl border border-white/8 p-6 sm:p-8 mb-6">
          <h2 className="text-center text-white font-semibold mb-1">Votre profil sur 6 dimensions</h2>
          <p className="text-center text-gray-500 text-xs mb-6">Score percentile sur 100 — plus c&apos;est élevé, mieux vous vous situez</p>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData} margin={{ top: 10, right: 40, bottom: 10, left: 40 }}>
              <PolarGrid stroke="rgba(255,255,255,0.07)" />
              <PolarAngleAxis dataKey="dim" tick={{ fill: '#a0b4c8', fontSize: 12, fontWeight: 500 }} />
              <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#c9a84c"
                fill="#c9a84c"
                fillOpacity={0.12}
                strokeWidth={2}
                dot={{ r: 4, fill: '#c9a84c', strokeWidth: 0 }}
              />
              <Tooltip
                contentStyle={{ background: '#112240', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: 'white', fontSize: 13 }}
                formatter={(v: number) => [`Top ${Math.max(1, 100 - v)}%`, 'Rang']}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div {...fadeUp(0.25)} className="bg-[#112240] rounded-2xl border border-white/8 p-6 sm:p-8 mb-6">
          <h2 className="text-white font-semibold mb-6">Détail par dimension</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {DIMS.map((dim, i) => {
              const sc = scores[dim.key as keyof typeof scores]
              const top = Math.max(1, 100 - sc)
              return (
                <motion.div key={dim.key} {...fadeUp(0.3 + i * 0.07)}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{dim.icon}</span>
                      <span className="text-sm text-gray-300">{dim.label}</span>
                    </div>
                    <span className="text-xs font-bold" style={{ color: dim.color }}>
                      Top {top}%
                    </span>
                  </div>
                  <PercentBar score={sc} color={dim.color} />
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0.45)}
          className="relative overflow-hidden rounded-2xl border mb-6 p-7 sm:p-9"
          style={{ borderColor: `${status.color}40`, background: 'linear-gradient(135deg, #112240, #0e1f3a)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 80% at 0% 50%, ${status.color}10, transparent)` }} />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: status.color }}>
                Positionnement social
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-3">
                {status.label}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                {status.desc}
              </p>
            </div>
            <div
              className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
              style={{ background: `${status.color}15`, border: `1px solid ${status.color}30` }}
            >
              {topPercent <= 1 ? '👑' : topPercent <= 10 ? '🏛️' : topPercent <= 30 ? '📈' : topPercent <= 60 ? '🌱' : '⚡'}
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.55)} className="mb-6">
          <div
            ref={cardRef}
            className="relative overflow-hidden rounded-2xl p-8"
            style={{ background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0a1628 100%)', border: '1px solid rgba(201,168,76,0.3)' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl" style={{ background: `${status.color}08`, transform: 'translate(30%, -30%)' }} />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] uppercase mb-2">Mon Pourcentage Français</p>
                  <div className="font-playfair font-bold text-white leading-none">
                    <span className="text-2xl">TOP </span>
                    <span className="text-6xl" style={{ color: status.color }}>{topPercent}%</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">des Français</p>
                  <p className="font-semibold mt-1 text-sm" style={{ color: status.color }}>{status.label}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl mb-1">🇫🇷</div>
                  <p className="text-white/15 text-[10px] tracking-widest">BILAN DE VIE</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {DIMS.map(dim => {
                  const sc = scores[dim.key as keyof typeof scores]
                  const top = Math.max(1, 100 - sc)
                  return (
                    <div key={dim.key}>
                      <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">{dim.icon} {dim.label}</p>
                      <p className="font-bold text-lg" style={{ color: dim.color }}>Top {top}%</p>
                    </div>
                  )
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/8">
                <p className="text-white/20 text-xs">le-pourcentage-francais.vercel.app</p>
                <p className="text-white/20 text-xs">{mode === 'complet' ? '50 questions analysées' : '15 questions analysées'}</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-[#112240] hover:bg-[#1a2f4e] border border-white/10 hover:border-[#c9a84c]/40 text-white px-6 py-3.5 rounded-xl text-sm font-medium transition-all disabled:opacity-50"
          >
            <Download size={16} />
            {downloading ? 'Génération...' : 'Télécharger ma fiche de stats'}
          </button>
        </motion.div>

        <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-3 justify-center">
          <Link href={`/quiz?mode=${mode}`}>
            <button className="bg-[#c9a84c] hover:bg-[#e4c97e] text-[#0a1628] font-bold px-6 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5">
              Refaire le test
            </button>
          </Link>
          {mode === 'rapide' && (
            <Link href="/quiz?mode=complet">
              <button className="border border-white/15 hover:border-white/30 text-white px-6 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5 bg-[#112240]">
                Quiz complet (50 questions)
              </button>
            </Link>
          )}
          <Link href="/">
            <button className="text-gray-500 hover:text-white px-6 py-3 rounded-full text-sm transition-all">
              Accueil
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a1628] flex items-center justify-center text-white text-lg">Calcul en cours…</div>}>
      <ResultsContent />
    </Suspense>
  )
}
