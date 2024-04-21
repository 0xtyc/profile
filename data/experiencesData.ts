interface Experience {
  title: string
  company: string
  descriptions: string[]
  meme?: string
  src?: string
  from: string
  to: string
  location: string
  keywords?: string[]
}

const experiencesData: Experience[] = [
  {
    title: 'FullStack Software Engineer',
    company: 'Sedimentum AG',
    from: 'Apr 2022',
    to: 'Jul 2024',
    location: 'Zug, Switzerland',
    descriptions: [
      'Enhanced mobile app user experience by implementing a modern interface and a bottom menu, moving away from the traditional burger menu',
      'Integrated the background geofence in our Capacitor app to improve the accuracy of our emergency detector',
      'Developed a comprehensive intrusion detection system across the backend and frontend',
      'Introduced a device onboarding process to allow users to onboard their own devices without any support',
    ],
    meme: '/static/gif/decrease.gif',
    src: 'https://giphy.com/gifs/season-12-the-simpsons-12x9-3o6MbrACMlFCny8zmw',
    keywords: ['React', 'Next.js', 'TypeScript', 'Capacitor', 'PostgreSQL', 'Django'],
  },

  {
    title: 'Master Student',
    company: 'ETH Zurich',
    from: 'Sep 2019',
    to: 'Nov 2021',
    location: 'Zurich, Switzerland',
    meme: '/static/gif/lockdown.gif',
    descriptions: [
      'Enrolled in a diverse range of courses to explore my interests such as Computer Graphics and Computer Vision',
      'Strengthened foundational knowledge in computer science through algorithms lab and computational intelligence lab',
      'Conducted research on industrial image synthesis for dataset augmentation',
    ],
    src: 'https://giphy.com/gifs/video-games-mickey-mouse-playing-10mDJCMd5qQjNS',
    keywords: ['Algorithms', 'Machine Learning', 'Computer Graphics', 'Computer Vision'],
  },
  {
    title: 'Cybersecurity Consultant',
    company: 'KPMG Advisory',
    from: 'Jul 2018 ',
    to: 'Jul 2019',
    location: 'Taipei, Taiwan',
    meme: '/static/gif/busy.gif',
    descriptions: [
      'Guided four clients across various industries in achieving information security and data protection certifications',
      'Conducted cybersecurity audits and vulnerability assessments to identify and mitigate potential risks',
    ],
    src: 'https://giphy.com/gifs/leroypatterson-busy-im-too-l1KVbInIdeFYlsApO',
    keywords: ['cybersecurity', 'consulting', 'audit', 'vulnerability assessment'],
  },
  {
    title: 'Bachelor Student',
    company: 'National Taiwan University',
    from: 'Sep 2013',
    to: 'Jun 2018',
    location: 'Taipei, Taiwan',
    descriptions: [
      'Studied basics in computer science, including algorithms, data structures, and computer networks',
      'Completed courses for two majors: Information Management and Finance',
      'Exchanged to Leiden University in Netherlands for a semester',
    ],
    meme: '/static/gif/skipClass.gif',
    src: 'https://giphy.com/gifs/season-10-the-simpsons-10x7-xT5LMTE79kE5670EPm',
    keywords: ['Double Major', 'Information Management', 'Finance', 'Exchange Program'],
  },
]

export default experiencesData
