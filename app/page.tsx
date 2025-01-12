import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import AnimatedBackground from './components/AnimatedBackground'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        <CTA />
      </main>
    </div>
  )
}

