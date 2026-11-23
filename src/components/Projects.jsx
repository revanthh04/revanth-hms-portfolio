import { projects, socialLinks, sectionContent } from '../data/portfolioData'

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-5 h-5" aria-hidden="true"><path d="M9 19v3m6-3v3M7 7 5 3l5 2h4l5-2-2 4c6 9-1 13-5 13S1 16 7 7Z" /></svg>
}

function ExternalLinkIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M14 3h7v7M21 3 10 14M10 3H3v18h18v-7" /></svg>
}

function ProjectCard({ project, aosDelay }) {
  const content = sectionContent.projects
  const hasDemo = typeof project.links.demo === 'string' && project.links.demo.trim().length > 0
  return (
    <div data-aos="fade-up" data-aos-delay={aosDelay} className={`p-[1px] rounded-2xl ${project.isFlagship ? 'bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:to-red-500/60' : 'bg-white/10'} transition-colors`}>
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90">
        {project.badge && <span className="inline-flex mb-5 rounded-full px-3 py-1.5 text-red-400 bg-red-500/10 uppercase tracking-widest text-xs font-bold">{project.badge}</span>}
        <div className="flex items-start gap-5"><span className="text-5xl font-black text-white/10 font-serif italic">{project.number}</span><h3 className="text-2xl md:text-3xl font-black text-white">{project.title}</h3></div>
        <p className="text-white/60 mt-5 leading-relaxed max-w-4xl">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-6">{project.techTags.map((tag) => <span key={tag} className="rounded-full text-xs font-bold border border-white/10 bg-white/5 px-3 py-2 hover:bg-red-500/10 hover:text-red-400 transition-colors">{tag}</span>)}</div>
        <div className="flex flex-wrap gap-3 mt-7">
          {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white/10"><GitHubIcon />{content.github}</a>}
          {hasDemo ? <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ff2a2a] text-white font-bold"><ExternalLinkIcon />{content.demo}</a> : <a href="#" aria-disabled="true" onClick={(event) => event.preventDefault()} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 text-white/30 cursor-not-allowed">{content.comingSoon}</a>}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const content = sectionContent.projects
  return (
    <section id="projects" className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <header data-aos="fade-up" className="text-center mb-14"><span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-red-400 text-xs font-bold uppercase tracking-widest">{content.badge}</span><h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-5">{content.heading}</h2><p className="text-white/50 mt-5 max-w-2xl mx-auto">{content.description}</p></header>
        <div className="flex flex-col gap-6 md:gap-8">{projects.map((project, index) => <ProjectCard key={project.id} project={project} aosDelay={(index + 1) * 100} />)}</div>
        <div className="text-center mt-12"><a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 border border-white/20 hover:bg-white/10 text-white font-bold"><GitHubIcon />{content.explore}<span aria-hidden="true">→</span></a></div>
      </div>
    </section>
  )
}
