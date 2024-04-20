interface Experience {
  title: string
  company: string
  descriptions: string[]
  details?: string[]
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
    details: [
      'Worked in a Swiss startup where I was the only Asian and the only female engineer',
      'Survived the a 30% layoff and worked as the only frontend engineer for almost a year',
    ],
    keywords: ['React', 'Next.js', 'TypeScript', 'Capacitor', 'PostgreSQL', 'Django'],
  },

  {
    title: 'Master Student',
    company: 'ETH Zurich',
    from: 'Sep 2019',
    to: 'Nov 2021',
    location: 'Zurich, Switzerland',
    descriptions: [
      'Enrolled in a diverse range of courses to explore my interests such as Computer Graphics and Computer Vision',
      'Strengthened foundational knowledge in computer science through algorithms lab and computational intelligence lab',
      'Conducted research on industrial image synthesis for dataset augmentation',
    ],
    details: [
      'Experienced pandemic and lockdown since my second semester',
      'Discovered my interest in anime and manga because of the lockdown',
    ],
    keywords: ['Algorithms', 'Machine Learning', 'Computer Graphics', 'Computer Vision'],
  },
  {
    title: 'Cybersecurity Consultant',
    company: 'KPMG Advisory',
    from: 'Jul 2018 ',
    to: 'Jul 2019',
    location: 'Taipei, Taiwan',
    descriptions: [
      'Guided four clients across various industries in achieving information security and data protection certifications',
      'Conducted cybersecurity audits and vulnerability assessments to identify and mitigate potential risks',
    ],
    details: [
      'Prepared for master application including GRE and TOEFL, and got the driving license during this year',
    ],
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
    details: [
      'Joined NTU Star Rain Club and hold events for the autistic children',
      'Joined Fighting Sports Club and won the third place in the in-house competition',
    ],
    keywords: ['Double Major', 'Information Management', 'Finance', 'Exchange Program'],
  },
]

export default experiencesData
