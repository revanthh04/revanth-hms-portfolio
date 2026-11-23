import { leadershipList, sectionContent } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isLeft = index % 2 === 0
  return (
    <div className={`relative flex pl-12 md:pl-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between items-center`}>
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_20px_#ff2a2a]" />
      <div data-aos={isLeft ? 'fade-right' : 'fade-left'} className={`w-full md:w-[45%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        {item.badge && <span className="inline-flex rounded-full bg-red-500/10 text-red-400 text-xs px-3 py-1 font-bold">{item.badge}</span>}
        <h3 className="text-2xl font-black text-white hover:text-red-400 transition-colors mt-4">{item.title}</h3><p className="font-mono uppercase text-red-400 text-xs mt-3">{item.role}</p><p className="text-white/60 leading-relaxed mt-4">{item.description}</p>
      </div>
      <div className="hidden md:block md:w-[45%]" aria-hidden="true" />
    </div>
  )
}

export default function Leadership() {
  const content = sectionContent.leadership
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-28 pb-32 px-6 md:px-12">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-12 md:h-20 rotate-180 fill-[#ff2a2a]" aria-hidden="true"><path d="M0 80Q150 120 300 70T600 50T900 80T1200 70V120H0Z" /></svg>
      <div className="max-w-6xl mx-auto"><header data-aos="fade-up" className="text-center mb-16"><span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-red-400 text-xs font-bold uppercase tracking-widest">{content.badge}</span><h2 className="text-4xl md:text-5xl uppercase font-black text-white mt-5">{content.heading}</h2><p className="text-white/50 mt-5">{content.description}</p></header>
        <div className="relative space-y-10"><div className="absolute inset-y-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />{leadershipList.map((item, index) => <LeadershipItem key={`${item.title}-${item.role}`} item={item} index={index} />)}</div>
      </div>
    </section>
  )
}
