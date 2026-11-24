export const academy = {
  name: 'TAP Academy',
  url: 'https://thetapacademy.com/',
}

export const personalInfo = {
  name: 'Revanth HMS',
  firstName: 'Revanth HMS',
  brandName: 'Revanth HMS',
  title: 'Java Full Stack Developer',
  location: 'Bengaluru, India',
  phone: '+91 82774 80796',
  emails: { primary: 'revanthacharya04@gmail.com', secondary: '' },
  summary: 'B.Tech ECE graduate who builds full-stack web apps with Java and AI-powered RAG systems.',
  resumeUrl: '/Resume.pdf',
}

export const socialLinks = {
  github: 'https://github.com/revanthh04',
  linkedin: 'https://www.linkedin.com/in/revanth-hms',
  instagram: '',
}

export const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export const navigationContent = {
  hireMe: 'Hire Me',
  openMenu: 'Open navigation menu',
  closeMenu: 'Close navigation menu',
}

export const footerContent = {
  displayName: 'REVANTH',
  taglines: ['Java Full Stack Developer', 'Java · Web Development · Generative AI', 'Building intelligent web applications'],
  credential: 'B.Tech Electronics and Communication Engineering',
  copyright: `© ${new Date().getFullYear()} Revanth HMS | Built with React`,
}

export const footerLabels = {
  viewWork: 'View Work',
  availability: 'Available for opportunities',
  contact: 'Contact',
  trainedAt: 'Trained at',
  exploreGithub: 'Explore My GitHub',
}

export const heroContent = {
  greeting: "Hi, I'm Revanth HMS",
  titleHighlight: 'Java Full Stack Developer',
  subtitle: 'I build full-stack web applications with Java and intelligent RAG systems, turning complex engineering problems into practical, user-friendly software solutions.',
  ctaPrimary: { text: 'View My Work', href: '#projects' },
  ctaSecondary: { text: 'Contact Me', href: `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio` },
  ctaResume: { text: 'Download Resume', href: personalInfo.resumeUrl },
}

export const aboutContent = {
  portraitAlt: 'Revanth HMS — Java Full Stack Developer, TAP Academy student',
  heading: 'Hello!',
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Revanth HMS</span>, a software developer based in Bengaluru, India, skilled in Java, full-stack web development, and Generative AI. I build RAG pipelines and scalable backend applications, and trained through the placement training program at TAP Academy. I enjoy solving complex engineering problems and building user-friendly, intelligent software solutions.`,
  techStack: ['Java', 'Python', 'JavaScript', 'Generative AI'],
}

export const mediaLabels = {
  play: 'Play Reel',
  pause: 'Pause',
  playbackError: 'The video could not play. Please try again.',
  flip: 'Flip ID card',
  flipHint: 'Tap the card to flip ↻',
  scan: 'Scan to connect',
}

export const technicalSkills = {
  categories: [
    { title: 'Programming', skills: ['Java', 'Python', 'JavaScript'].map((name) => ({ name })) },
    { title: 'Web Development', skills: ['HTML', 'CSS', 'Node.js', 'Servlets', 'JSP'].map((name) => ({ name })) },
    { title: 'AI / ML', skills: ['LangChain', 'FAISS', 'SentenceTransformers', 'Streamlit', 'Ollama'].map((name) => ({ name })) },
    { title: 'Databases & Tools', skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Docker'].map((name) => ({ name })) },
  ],
}

export const projects = [
  {
    id: 'rag-pdf-assistant', number: '01', badge: '🚀 Flagship Project',
    title: 'RAG-Based PDF QA Assistant',
    description: 'An AI assistant for semantic search, question answering, and summarization from PDFs using a RAG pipeline.',
    techTags: ['GenAI', 'LangChain', 'FAISS', 'Ollama', 'Streamlit'],
    links: { github: 'https://github.com/revanthh04', demo: '' }, isFlagship: true,
  },
  {
    id: 'fpga-cnn-accelerator', number: '02', badge: null,
    title: 'FPGA-Based Hardware Accelerator for Quantized CNN Models',
    description: 'An FPGA hardware accelerator for brain tumor classification from MRI images using quantized EfficientNet-B0.',
    techTags: ['Vitis HLS', 'Vivado', 'Verilog', 'CNN'],
    links: { github: 'https://github.com/revanthh04', demo: '' }, isFlagship: false,
  },
  {
    id: 'jarvisbot', number: '03', badge: null, title: 'JarvisBot',
    description: 'An AI-powered personal assistant bot designed to automate tasks, respond to queries, and streamline daily workflows.',
    techTags: ['Python', 'LangChain', 'LLM APIs'],
    links: { github: 'https://github.com/revanthh04/JarvisBot', demo: '' }, isFlagship: false,
  },
]

export const internshipsList = [{
  organization: 'TAP Academy', role: 'Full Stack Developer Intern with AI',
  duration: 'Feb 2026 - Aug 2026',
  skills: ['Backend web application development', 'Database design', 'Dynamic interface development'],
  tech: ['Java', 'Servlets', 'JSP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
}]

export const leadershipList = []

export const softSkillsList = [
  { name: 'Problem Solving', icon: '🧩', desc: 'Breaking complex engineering problems into practical software solutions.' },
  { name: 'Communication', icon: '💬', desc: 'Explaining technical ideas clearly and listening to different perspectives.' },
  { name: 'Leadership', icon: '🧭', desc: 'Taking initiative and helping work move toward a shared goal.' },
  { name: 'Adaptability', icon: '🌱', desc: 'Learning across Java web development, Generative AI, and hardware projects.' },
]

export const sectionContent = {
  technical: { badge: 'Technical Stack', heading: 'My Skillset', description: 'The languages, frameworks, and tools I use to build web applications and intelligent systems.' },
  projects: { badge: 'Featured Projects', heading: 'Work that speaks for itself', description: 'Exploring full-stack development, Generative AI, and hardware acceleration through hands-on projects.', github: 'GitHub', demo: 'Live Demo', comingSoon: 'Demo Coming Soon', explore: 'Explore All My Repositories' },
  internships: { heading: 'Work Experience', description: 'Practical experience building backend applications, databases, and dynamic interfaces.', badge: 'Internship', skills: 'Skills Gained:', tech: 'Technologies:' },
  leadership: { badge: 'Activities', heading: 'Leadership & Engagement', description: 'Contributing, collaborating, and taking initiative in the communities around me.' },
  softSkills: { badge: 'Core Competencies', heading: 'Professional Soft Skills', description: 'The qualities I bring to solving problems and working with others.' },
}

export const skillsContent = {
  badge: 'My Process',
  heading: "Here's how I turn ideas into real-world products",
  description: 'A practical approach to building web applications and intelligent software, from understanding the problem to delivering a working solution.',
  cards: [
    { number: '01', title: 'Research', text: 'Understand the problem, explore user needs, and choose the tools and data the solution requires.' },
    { number: '02', title: 'Design', text: 'Plan the application flow, interfaces, and database structure before building.' },
    { number: '03', title: 'Develop', text: 'Build the backend and interface, integrate the required features, and test how they work together.' },
    { number: '04', title: 'Deploy', text: 'Prepare the application for release, verify its behavior, and refine it from feedback.' },
  ],
  endText: 'Ready to ship!',
}

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
}

export const contactContent = {
  heading: 'Contact',
  badge: 'Reach Me',
  instagram: 'DM on Instagram',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email Address',
  message: 'Your Message',
  permission: 'I agree to be contacted about my message.',
  note: 'Your message will be sent directly to my inbox. I typically respond within 24-48 hours.',
  fallbackNote: 'Your email app will open with your message ready to send.',
  urgent: 'For urgent enquiries, email',
  send: 'Send Message',
  sending: 'Sending...',
  success: 'Sent Successfully ✓',
  fallbackSuccess: 'Email Draft Opened ✓',
  error: 'Failed — Try Again',
}
