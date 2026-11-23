import { useEffect, useState } from 'react'
import { personalInfo, navLinks, navigationContent } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 50)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isOpen ? 'bg-[#ff2a2a] py-4' : `bg-transparent ${isScrolled ? 'py-4' : 'py-6'}`}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-black">
          {personalInfo.brandName}<span className="text-[#ff2a2a]">.</span>
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="group relative text-white/80 hover:text-white font-medium">
              {link}
              <span className="absolute -bottom-1 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a href={hireMeMailto} className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
            {navigationContent.hireMe}
          </a>
        </div>
        <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? navigationContent.closeMenu : navigationContent.openMenu} className="md:hidden text-white p-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d={isOpen ? 'M6 6l12 12M6 18L18 6' : 'M3 6h18M3 12h18M3 18h18'} />
          </svg>
        </button>
      </div>
      <div id="mobile-navigation" inert={!isOpen} className={`md:hidden absolute top-full w-full bg-[#ff2a2a] shadow-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 flex flex-col">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="py-3 border-b border-white/20 text-white font-bold text-lg hover:text-black">{link}</a>
          ))}
          <a href={hireMeMailto} onClick={() => setIsOpen(false)} className="mt-4 w-full rounded-full bg-white text-[#ff2a2a] py-3 text-center font-semibold">{navigationContent.hireMe}</a>
        </div>
      </div>
    </nav>
  )
}
