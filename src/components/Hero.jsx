import { useRef, useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroVideo from '../assets/hero/hero.mp4'
import heroPoster from '../assets/about/profile.png'
import { heroContent, socialLinks, mediaLabels } from '../data/portfolioData'

const icons = {
  github: 'M12 2a10 10 0 0 0-3 19.54v-2.1c-2.5.5-3-1-3-1-.4-1-1-1.3-1-1.3-.8-.6 0-.6 0-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1 2.8.8.1-.7.3-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9 9 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7 1 .7 1.9v3.7A10 10 0 0 0 12 2Z',
  linkedin: 'M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 9h4v13H2ZM9 9h4v2c1-2 3-2 4-2 4 0 4 3 4 6v7h-4v-7c0-3-4-3-4 0v7H9Z',
  instagram: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z',
}

function SocialIcons() {
  return Object.entries(icons).filter(([key]) => socialLinks[key]).map(([key, path]) => (
    <a key={key} href={socialLinks[key]} target="_blank" rel="noopener noreferrer" aria-label={key === 'github' ? 'GitHub' : key === 'linkedin' ? 'LinkedIn' : 'Instagram'} className="text-white/60 hover:text-white hover:scale-125 transition-transform">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d={path} /></svg>
    </a>
  ))
}

export default function Hero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackError, setPlaybackError] = useState('')

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })
    const refresh = () => AOS.refresh()
    window.addEventListener('load', refresh)
    if (document.readyState === 'complete') refresh()
    return () => window.removeEventListener('load', refresh)
  }, [])

  async function toggleVideo(e) {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    setPlaybackError('')
    if (!video.paused) {
      video.pause()
      setIsPlaying(false)
      return
    }
    try {
      await video.play()
      setIsPlaying(!video.paused)
    } catch {
      setIsPlaying(false)
      setPlaybackError(mediaLabels.playbackError)
    }
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#ff2a2a]">
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-contain object-top md:object-right z-0" playsInline poster={heroPoster} preload="metadata" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)}>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference"><SocialIcons /></div>
      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-[8%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end gap-6">
        <div className="max-w-2xl">
          <div className="lg:hidden flex gap-5 mb-5" data-aos="fade-up" data-aos-delay="100"><SocialIcons /></div>
          <h1 className="text-white text-3xl md:text-5xl font-bold" data-aos="fade-up">{heroContent.greeting},<br /><span className="text-black">{heroContent.titleHighlight}</span></h1>
          <p className="text-white text-sm md:text-lg font-semibold max-w-md mt-5" data-aos="fade-up" data-aos-delay="200">{heroContent.subtitle}</p>
          <div className="flex flex-wrap gap-3 mt-6" data-aos="fade-up" data-aos-delay="400">
            <a href={heroContent.ctaPrimary.href} className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">{heroContent.ctaPrimary.text}</a>
            <a href={heroContent.ctaSecondary.href} className="px-6 py-3 rounded-full bg-black/40 text-white border border-white backdrop-blur font-semibold hover:bg-black/60 transition-colors">{heroContent.ctaSecondary.text}</a>
            {heroContent.ctaResume?.href && <a href={heroContent.ctaResume.href} download className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/50 text-white font-semibold hover:bg-white/20 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M14 2H6v20h12V6zM14 2v5h5M12 10v7m-3-3 3 3 3-3" /></svg>{heroContent.ctaResume.text}
            </a>}
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="600" className="shrink-0">
          <button type="button" onClick={toggleVideo} aria-label={isPlaying ? mediaLabels.pause : mediaLabels.play} aria-pressed={isPlaying} className="group flex flex-col items-center gap-3 text-white">
            <span className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ff2a2a] group-hover:shadow-[0_0_30px_#ff2a2a] transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true"><path d={isPlaying ? 'M6 4h4v16H6zM14 4h4v16h-4z' : 'M8 4v16l12-8z'} /></svg>
            </span>
            <span className="text-xs uppercase tracking-widest">{isPlaying ? mediaLabels.pause : mediaLabels.play}</span>
          </button>
          {playbackError && <p role="alert" className="text-white text-xs max-w-48 mt-2">{playbackError}</p>}
        </div>
      </div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-6 z-20 text-white animate-bounce pointer-events-none" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" /></svg>
    </section>
  )
}
