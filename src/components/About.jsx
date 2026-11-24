import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks, mediaLabels } from '../data/portfolioData'

export default function About() {
  const [flipped, setFlipped] = useState(false)
  const rows = [
    { value: personalInfo.emails.primary, href: `mailto:${personalInfo.emails.primary}`, icon: 'M3 5h18v14H3zM3 5l9 7 9-7' },
    { value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}`, icon: 'M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4c0 4-18-2-18-14z' },
    { value: personalInfo.location, icon: 'M12 22s8-8 8-14a8 8 0 0 0-16 0c0 6 8 14 8 14ZM12 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6' },
    { value: socialLinks.linkedin && 'LinkedIn', href: socialLinks.linkedin, external: true, icon: 'M4 9v12M4 3v2M10 21V9m0 5c0-7 10-7 10 0v7' },
    { value: socialLinks.github && 'GitHub', href: socialLinks.github, external: true, icon: 'M9 19v3m6-3v3M7 7 5 3l5 2h4l5-2-2 4c6 9-1 13-5 13S1 16 7 7Z' },
  ]

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <motion.div initial={{ y: -300, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }} className="relative w-full md:w-[350px] shrink-0 flex flex-col items-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black" />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-10 rounded bg-gray-400 z-10" />
          <div className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none focus-visible:ring-4 focus-visible:ring-white rounded-2xl">
            <button type="button" aria-label={mediaLabels.flip} aria-pressed={flipped} onClick={() => setFlipped(!flipped)} className="absolute inset-0 rounded-2xl focus-visible:outline-4 focus-visible:outline-white cursor-pointer" />
            <div className="relative pointer-events-none w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]" style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
              <div aria-hidden={flipped} className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-2xl flex flex-col">
                <div className="w-12 h-2 bg-black rounded-full mx-auto mb-3 shrink-0" />
                <img src={stackImage} alt={personalInfo.name} className="w-full min-h-0 flex-1 aspect-[3/4] rounded-xl object-cover object-top" />
              </div>
              <div aria-hidden={!flipped} inert={!flipped} className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-[#141414] to-[#1f1f1f] border-t-[6px] border-[#ff2a2a] p-5 text-white text-left shadow-2xl flex flex-col">
                <h3 className="text-xl font-black">{personalInfo.brandName}<span className="text-[#ff2a2a]">.</span></h3>
                <p className="text-xs uppercase tracking-widest text-red-400 mt-1">{personalInfo.title}</p>
                <div className="border-t border-white/10 my-3" />
                <div className="space-y-2">
                  {rows.filter(({ value }) => value).map(({ value, href, external, icon }) => (
                    <div key={value} className="flex items-center gap-2 text-xs text-white/85">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0 text-red-400" aria-hidden="true"><path d={icon} /></svg>
                      {href ? <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()} className="relative pointer-events-auto break-all hover:underline">{value}</a> : <span>{value}</span>}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-auto pt-3">
                  <div className="bg-white rounded-lg p-2 shrink-0"><QRCode value={socialLinks.linkedin || ('mailto:' + personalInfo.emails.primary)} size={76} /></div>
                  <span className="text-[10px] text-white/60">{mediaLabels.scan}</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs font-bold text-black/60 mt-4">{mediaLabels.flipHint}</p>
        </motion.div>
        <div data-aos="fade-left" className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">{aboutContent.heading}</h2>
          <p className="text-lg font-bold leading-relaxed text-red-50" dangerouslySetInnerHTML={{ __html: aboutContent.bio }} />
        </div>
      </div>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-20 fill-white" aria-hidden="true"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" /></svg>
      <svg viewBox="0 0 24 24" className="absolute top-8 right-8 w-12 h-12 fill-black opacity-30 animate-pulse pointer-events-none" aria-hidden="true"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      <svg viewBox="0 0 24 24" className="absolute bottom-24 left-6 w-8 h-8 fill-black opacity-30 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} aria-hidden="true"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
    </section>
  )
}
