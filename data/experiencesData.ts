interface Experience {
  title: string
  company: string
  descriptions: string[]
  from: string
  to: string
  location: string
  keywords?: string[]
}

const experiencesData: Experience[] = [
  {
    title: 'FullStack Software Engineer',
    company: 'Helpany (Sedimentum AG)',
    from: 'April 2022',
    to: 'Present',
    location: 'Cham, Switzerland',
    descriptions: [
      'Enhanced mobile app user experience by implementing a modern interface and a bottom menu, moving away from the traditional burger menu',
      'Developed and integrated a comprehensive intrusion detection system across the backend and frontend, improving service and data management',
      'Expertise in Capacitor for developing cross-platform applications ensuring seamless functionality across diverse devices',
    ],
    keywords: ['React', 'Next.js', 'TypeScript', 'Capacitor', 'PostgreSQL', 'Django'],
  },
  {
    title: 'Cybersecurity Consultant',
    company: 'KPMG Advisory',
    from: 'July 2018 ',
    to: 'July 2019',
    location: 'Taipei, Taiwan',
    descriptions: [
      'Guided four clients across various industries in achieving information security and data protection certifications',
      'Conducted cybersecurity audits and vulnerability assessments to identify and mitigate potential risks',
    ],
    keywords: ['cybersecurity', 'consulting', 'audit', 'vulnerability assessment'],
  },
]

export default experiencesData
