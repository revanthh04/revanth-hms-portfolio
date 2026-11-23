import { personalInfo, socialLinks, footerContent, academy, footerLabels } from '../data/portfolioData'

const socialIcons = [
  { key: 'github', label: 'GitHub', path: 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.81c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z' },
  { key: 'linkedin', label: 'LinkedIn', path: 'M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 9h4v13H2ZM9 9h4v1.8c.6-1.1 1.8-2 3.8-2 4 0 4.2 2.6 4.2 6V22h-4v-6.4c0-1.6 0-3.6-2.2-3.6S13 13.7 13 15.5V22H9Z' },
  { key: 'instagram', label: 'Instagram', path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-2">{footerContent.taglines.map((tagline) => <p key={tagline}>{tagline}</p>)}</div>
        <div className="flex flex-col gap-3 md:items-center">
          <p>{footerContent.credential}</p>
          <a href="#projects" className="underline underline-offset-4">{footerLabels.viewWork}</a>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <p>{footerLabels.availability}</p><p>{new Date().getFullYear()}</p>
        </div>
      </div>
      <div className="py-20 md:py-24 overflow-hidden">
        <h2 className="text-center text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4]">{personalInfo.brandName.toLowerCase()}</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 md:gap-12 items-end">
        <div className="flex flex-col gap-3 min-w-0">
          <a href="#contact" className="underline underline-offset-4">{footerLabels.contact}</a>
          <p className="text-white/60 text-[8px] md:text-[10px]">{footerContent.copyright}</p>
          <p className="text-[8px] md:text-[10px]">{footerLabels.trainedAt} <a href={academy.url} target="_blank" rel="noopener" className="underline">{academy.name}</a></p>
        </div>
        <div className="flex flex-col gap-4 min-w-0 md:items-center">
          <a href={`mailto:${personalInfo.emails.primary}`} className="underline underline-offset-4 break-all">{personalInfo.emails.primary}</a>
          <div className="flex flex-wrap gap-3">
            {socialIcons.filter(({ key }) => socialLinks[key]).map(({ key, label, path }) => (
              <a key={key} href={socialLinks[key]} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d={path} /></svg>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:items-end"><a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{footerLabels.exploreGithub}</a></div>
      </div>
    </footer>
  )
}
