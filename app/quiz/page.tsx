'use client'
import { useState, useCallback, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import { getCapitaux } from '@/lib/questions'
import Link from 'next/link'

function QuizContent() {
  const router = useRouter()
  const params = useSearchParams()
  const mode = (params.get('mode') === 'complet' ? 'complet' : 'rapide') as 'rapide' | 'complet'
  const CAPITAUX = getCapitaux(mode)

  const [capitalIdx, setCapitalIdx] = useState(0)
  const [questionIdx, setQuestionIdx] = useState(0)
  const [scores, setScores] = useState<number[][]>(CAPITAUX.map(() => []))
  const [direction, setDirection] = useState(1)

  const currentCapital = CAPITAUX[capitalIdx]
  const currentQuestion = currentCapital.questions[questionIdx]
  const totalQ = CAPITAUX.reduce((s, c) => s + c.questions.length, 0)
  const answeredQ = scores.reduce((s, arr) => s + arr.length, 0)
  const progress = (answeredQ / totalQ) * 100
  const globalIdx = answeredQ + 1

  const handleAnswer = useCallback((value: number) => {
    const newScores = scores.map((arr, i) => i === capitalIdx ? [...arr, value] : arr)
    setDirection(1)

    if (questionIdx < currentCapital.questions.length - 1) {
      setScores(newScores)
      setQuestionIdx(q => q + 1)
    } else if (capitalIdx < CAPITAUX.length - 1) {
      setScores(newScores)
      setCapitalIdx(c => c + 1)
      setQuestionIdx(0)
    } else {
      const finals = newScores.map(arr => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length))
      router.push(`/results?r=${finals[0]}&p=${finals[1]}&d=${finals[2]}&s=${finals[3]}&n=${finals[4]}&m=${finals[5]}&mode=${mode}`)
    }
  }, [scores, capitalIdx, questionIdx, currentCapital.questions.length, CAPITAUX.length, router, mode])

  return (
    <div className="min-h-screen bg-[#0a1628] flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <Link href="/" className="text-gray-500 hover:text-white transition-colors text-sm">← Accueil</Link>
        <span className="text-gray-600 text-xs tracking-widest uppercase hidden sm:block">
          {mode === 'rapide' ? 'Quiz Rapide · 15 questions' : 'Quiz Approfondi · 50 questions'}
        </span>
        <span className="text-[#c9a84c] text-sm font-medium">{globalIdx} / {totalQ}</span>
      </div>

      <div className="h-0.5 bg-white/5">
        <motion.div className="h-full bg-[#c9a84c]" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
      </div>

      <div className="flex justify-center gap-1 sm:gap-5 py-4 px-4 overflow-x-auto">
        {CAPITAUX.map((cap, i) => (
          <div
            key={cap.id}
            className="flex items-center gap-1 text-xs sm:text-sm transition-colors flex-shrink-0"
            style={{ color: i === capitalIdx ? 'white' : i < capitalIdx ? cap.color : 'rgba(255,255,255,0.18)' }}
          >
            <span className="text-base sm:text-lg">{cap.icon}</span>
            <span className="hidden md:block">{cap.label}</span>
            {i < capitalIdx && <span className="text-[9px]">✓</span>}
          </div>
        ))}
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${capitalIdx}-${questionIdx}`}
              initial={{ opacity: 0, x: 40 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 * direction }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{currentCapital.icon}</span>
                <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: currentCapital.color }}>
                  {currentCapital.label} · {questionIdx + 1} / {currentCapital.questions.length}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-8 leading-snug">
                {currentQuestion.question}
              </h2>

              <div className="grid gap-3">
                {currentQuestion.options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(opt.value)}
                    className="text-left p-4 sm:p-5 rounded-xl border border-white/8 bg-[#112240] hover:bg-white/5 transition-all duration-200 text-gray-300 hover:text-white flex items-center gap-4"
                  >
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: `${currentCapital.color}15`, color: currentCapital.color }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm sm:text-base">{opt.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a1628] flex items-center justify-center text-white">Chargement…</div>}>
      <QuizContent />
    </Suspense>
  )
}
