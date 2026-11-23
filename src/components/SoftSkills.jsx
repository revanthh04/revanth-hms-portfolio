import { softSkillsList, sectionContent } from '../data/portfolioData'

function SoftSkillCard({ skill, index }) {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 100}>
      <article className="group h-full bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center hover:scale-[1.03] hover:shadow-[0_12px_35px_rgba(255,42,42,0.10)] transition-all duration-300">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-3xl group-hover:bg-red-100 group-hover:scale-110 transition-all" aria-hidden="true">{skill.icon}</div>
        <h3 className="uppercase font-black text-gray-900 mt-5">{skill.name}</h3><p className="text-gray-500 text-sm leading-relaxed mt-3">{skill.desc}</p>
      </article>
    </div>
  )
}

export default function SoftSkills() {
  const content = sectionContent.softSkills
  return (
    <section className="relative bg-white pt-24 pb-32 px-6 md:px-12 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-12 md:h-20 rotate-180 fill-[#0a0a0a]" aria-hidden="true"><path d="M0 80Q150 120 300 70T600 50T900 80T1200 70V120H0Z" /></svg>
      <div className="max-w-7xl mx-auto"><header data-aos="fade-up" className="text-center mb-14"><span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-red-600 text-xs font-bold uppercase tracking-widest">{content.badge}</span><h2 className="text-4xl md:text-5xl uppercase font-black text-gray-900 mt-5">{content.heading}</h2><p className="text-gray-500 mt-5">{content.description}</p></header><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{softSkillsList.map((skill, index) => <SoftSkillCard key={skill.name} skill={skill} index={index} />)}</div></div>
    </section>
  )
}
