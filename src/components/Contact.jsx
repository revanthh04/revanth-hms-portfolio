import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks, contactContent } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const resetTimer = useRef(null)
  const submitting = useRef(false)
  const [status, setStatus] = useState('idle')
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])
  const { serviceId, templateId, publicKey } = emailjsConfig
  const isConfigured = [serviceId, templateId, publicKey].every(
    (value) => Boolean(value) && !value.startsWith('YOUR' + '_')
  )

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  function finish(nextStatus, delay) {
    setStatus(nextStatus)
    submitting.current = false
    resetTimer.current = setTimeout(() => setStatus('idle'), delay)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending' || submitting.current) return
    clearTimeout(resetTimer.current)
    submitting.current = true
    setStatus('sending')
    const form = formRef.current
    const firstName = form.querySelector('#firstName').value.trim()
    const lastName = form.querySelector('#lastName').value.trim()
    const email = form.querySelector('#email').value.trim()
    const message = form.querySelector('#message').value.trim()

    if (!firstName || !email || !message || !form.checkValidity()) {
      finish('error', 3000)
      return
    }

    if (!isConfigured) {
      const subject = encodeURIComponent(`Portfolio Contact from ${firstName} ${lastName}`)
      const body = encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)
      window.open(`mailto:${personalInfo.emails.primary}?subject=${subject}&body=${body}`, '_blank', 'noopener,noreferrer')
      form.reset()
      finish('success', 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      form.reset()
      finish('success', 4000)
    } catch (error) {
      console.error('Contact form delivery failed:', error)
      finish('error', 4000)
    }
  }

  const buttonStyles = {
    idle: 'hover:bg-white hover:text-[#ff2a2a]',
    sending: 'bg-gray-700/50 text-white/60 cursor-wait',
    success: 'bg-green-800 text-white',
    error: 'bg-red-950 text-white',
  }
  const buttonText = {
    idle: contactContent.send,
    sending: contactContent.sending,
    success: isConfigured ? contactContent.success : contactContent.fallbackSuccess,
    error: contactContent.error,
  }
  const inputClasses = 'w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none'

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900">
      <motion.div style={{ y }} className="absolute top-12 left-0 w-full pointer-events-none z-0" aria-hidden="true">
        <div className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/10" style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}>{contactContent.heading}</div>
      </motion.div>
      <div data-aos="fade-up" className="relative z-10 ml-auto bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-14">
          <h2 className="text-sm uppercase tracking-[0.2em] font-bold">{contactContent.badge}</h2>
          {socialLinks.instagram && <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-5 py-2 text-sm hover:bg-white hover:text-[#ff2a2a] transition-colors">{contactContent.instagram}</a>}
        </header>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-12" aria-busy={status === 'sending'}>
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-12 min-w-0">
            <div className="flex flex-col gap-8">
              <label><span className="sr-only">{contactContent.firstName}</span><input readOnly={status === 'sending'} id="firstName" name="first_name" autoComplete="given-name" placeholder={contactContent.firstName} required className={inputClasses} /></label>
              <label><span className="sr-only">{contactContent.lastName}</span><input readOnly={status === 'sending'} id="lastName" name="last_name" autoComplete="family-name" placeholder={contactContent.lastName} className={inputClasses} /></label>
              <label><span className="sr-only">{contactContent.email}</span><input readOnly={status === 'sending'} id="email" name="user_email" type="email" autoComplete="email" placeholder={contactContent.email} required className={inputClasses} /></label>
            </div>
            <label className="flex"><span className="sr-only">{contactContent.message}</span><textarea readOnly={status === 'sending'} id="message" name="message" placeholder={contactContent.message} required className={`${inputClasses} resize-none min-h-[120px]`} /></label>
          </fieldset>
          <div className="flex flex-col gap-6">
            <label className="flex items-start gap-3 text-sm"><input type="checkbox" required disabled={status === 'sending'} className="mt-1 w-4 h-4 accent-black shrink-0" /><span>{contactContent.permission}</span></label>
            <p className="text-sm text-white/80 max-w-xl">{isConfigured ? contactContent.note : contactContent.fallbackNote}</p>
            <a href={`mailto:${personalInfo.emails.primary}`} className="text-sm underline underline-offset-4 break-words">{contactContent.urgent} {personalInfo.emails.primary}</a>
            <button type="submit" aria-label={buttonText[status]} disabled={status === 'sending'} className={`group self-start inline-flex items-center gap-3 rounded-full border border-white/60 px-7 py-4 font-bold transition-colors ${buttonStyles[status]}`}>
              {status === 'sending' && <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden="true" />}
              <span role="status" aria-live="polite">{buttonText[status]}</span>
              {status === 'idle' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
