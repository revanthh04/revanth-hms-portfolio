import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

const desktopPath = 'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'
const mobilePath = 'M 2,0 L 2,100'
const positions = [
  { className: 'md:top-[10px] md:right-[5%] lg:right-[10%]', tilt: 'rotate-2 md:rotate-6', aosType: 'fade-left' },
  { className: 'md:top-[450px] md:left-[5%] lg:left-[10%]', tilt: '-rotate-2 md:-rotate-6', aosType: 'fade-right' },
  { className: 'md:top-[700px] md:right-[5%] lg:right-[15%]', tilt: 'rotate-1 md:rotate-3', aosType: 'fade-left' },
  { className: 'md:top-[1050px] md:left-[15%] lg:left-[25%]', tilt: '-rotate-1 md:-rotate-3', aosType: 'fade-right' },
]

function TagCard({ number, title, text, className, tilt, aosDelay, aosType, pathLength, containerRef }) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const container = containerRef.current.getBoundingClientRect()
    const card = cardRef.current.getBoundingClientRect()
    setIsActive(latest * container.height >= card.top - container.top + 50)
  })

  return (
    <div ref={cardRef} className={`md:absolute w-72 sm:w-80 max-w-full ${className}`}>
      <div data-aos={aosType} data-aos-delay={aosDelay}>
        <article className={`relative rounded-[2rem] p-2 transition-colors duration-700 ${tilt} ${isActive ? 'bg-[#ff2a2a] shadow-[0_15px_45px_rgba(255,42,42,0.35)] text-white' : 'bg-white shadow-xl text-gray-900'}`}>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border border-gray-300 shadow-inner" />
          <div className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] transition-colors duration-700 ${isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'}`}>
            <span className={`font-serif italic text-4xl ${isActive ? 'text-white/60' : 'text-gray-400'}`}>{number}</span>
            <h3 className="text-2xl font-black mt-3">{title}</h3>
            <p className={`text-sm leading-relaxed mt-3 ${isActive ? 'text-white/90' : 'text-gray-500'}`}>{text}</p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] })
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 })

  return (
    <section id="process" ref={containerRef} className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        <header data-aos="fade-up" className="relative md:absolute top-10 left-0 md:w-[450px] z-20 mb-24 md:mb-0">
          <span className="inline-flex rounded-full bg-red-50 border border-red-200 text-red-600 px-4 py-2 text-xs uppercase font-bold tracking-widest">{skillsContent.badge}</span>
          <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-black mt-5">
            {skillsContent.heading}
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="absolute -bottom-10 right-0 w-10 h-10 text-[#ff2a2a]" aria-hidden="true"><path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" /></svg>
          </h2>
          <p className="text-gray-500 mt-8 max-w-sm leading-relaxed">{skillsContent.description}</p>
        </header>
        <svg className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0" viewBox="0 0 1000 1350" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path d={desktopPath} stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 10" />
          <defs><mask id="path-mask"><motion.path d={desktopPath} stroke="white" strokeWidth="20" style={{ pathLength }} /></mask></defs>
          <path d={desktopPath} stroke="black" strokeWidth="2" strokeDasharray="8 10" mask="url(#path-mask)" />
        </svg>
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          <svg className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none" viewBox="0 0 4 100" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path d={mobilePath} stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
            <defs><mask id="path-mask-mobile" x="-10" y="0" width="24" height="100" maskUnits="userSpaceOnUse"><motion.path d={mobilePath} stroke="white" strokeWidth="20" style={{ pathLength }} vectorEffect="non-scaling-stroke" /></mask></defs>
            <path d={mobilePath} stroke="black" strokeWidth="2" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" mask="url(#path-mask-mobile)" />
          </svg>
          {skillsContent.cards.map((card, index) => <TagCard key={card.number} {...card} {...positions[index]} aosDelay={(index + 1) * 100} pathLength={pathLength} containerRef={containerRef} />)}
        </div>
        <p className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6">{skillsContent.endText}</p>
      </div>
    </section>
  )
}
