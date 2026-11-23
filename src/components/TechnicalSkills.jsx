import { technicalSkills, sectionContent } from '../data/portfolioData'

function SkillBadge({ name }) {
  return <span className="inline-flex rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 transition-colors">{name}</span>
}

function SkillCard({ category, index }) {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 100}>
      <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,42,42,0.12)] transition-all duration-300">
        <h3 className="uppercase font-black text-white text-xl border-b border-white/10 pb-4 mb-5">{category.title}</h3>
        <div className="flex flex-wrap gap-3">{category.skills.map((skill) => <SkillBadge key={skill.name} name={skill.name} />)}</div>
      </div>
    </div>
  )
}

export default function TechnicalSkills() {
  const content = sectionContent.technical
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <header data-aos="fade-up" className="text-center mb-14">
          <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-red-400 text-xs font-bold uppercase tracking-widest">{content.badge}</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mt-5">{content.heading}</h2>
          <p className="text-white/50 mt-5">{content.description}</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">{technicalSkills.categories.map((category, index) => <SkillCard key={category.title} category={category} index={index} />)}</div>
      </div>
    </section>
  )
}
