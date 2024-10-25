interface Project {
  title: string
  description: string
  from?: string
  to?: string
  href?: string
  imgSrc?: string
  keywords: string[]
}

const projectsData: Project[] = [
  {
    title: 'Taiwan HyperAwesome Guidebook',
    description: `Developed a blockchain-based donation platform with smart contracts on Optimism chain while supporting multiple donations in one transaction.`,
    imgSrc: '/static/images/hypercert.png',
    href: 'https://hypercerts.guide/',
    from: 'May 2024',
    to: 'Present',
    keywords: [
      'TypeScript',
      'node.js',
      'Solidity',
      'Next.js',
      'express.js',
      'ethers.js',
      'Moralis',
    ],
  },
  {
    title: 'Solid(ar)ity',
    description: `Contributed to the development of a demo application that effectively showcases the platform's features and capabilities. Worked closely with the design team to create an engaging landing page featuring interactive animations that significantly enhance user engagement.`,
    imgSrc: '/static/images/solidarity.png',
    href: 'https://solidarity.gg/',
    from: 'Sep 2024',
    to: 'Present',
    keywords: ['TypeScript', 'Tailwind CSS', 'Next.js', 'anime.js', 'splitting.js'],
  },
  {
    title: 'WAMO S3',
    description: `Collaborated with the designer to create the landing page for WAMO S3, a web3 event centered on Cypherpunk philosophies and decentralized communities.`,
    from: 'Oct 2024',
    to: 'Nov 2024',
    href: 'https://wamo3.org/',
    imgSrc: '/static/images/wamo3.jpeg',
    keywords: ['TypeScript', 'Tailwind CSS', 'Next.js', 'confetti.js'],
  },
  {
    title: 'Micetopia',
    description: `Developed Micetopia, a mice collecting game inspired by Frogcrypto, that lets users capture a new mouse every 15 minutes. We also collaborate with akaSwap during the Lunar New Year to offer a special NFT collection.`,
    imgSrc: '/static/images/micetopia.png',
    href: 'https://www.micetopia.xyz',
    from: 'Dec 2023',
    to: 'Apr 2024',
    keywords: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'Industrial Image Synthesis for Dataset Augmentation',
    description:
      'Utilized Python and Pytorch to generate industrial images, enhancing classification performance through a novel loss term that guided the distribution of semantic labels for my master thesis.',
    imgSrc: '/static/images/cvl.png',
    from: 'Apr 2021',
    to: 'Nov 2021',
    href: '/static/files/thesis.pdf',
    keywords: ['Python', 'PyTorch', 'Generative Adversarial Network', 'Computer Vision'],
  },
  {
    title: 'Physically Based Rendering',
    description: `Developed ray-tracing illumination integrators and shading functions using C++ within the Nori framework for computer graphics course project.`,
    imgSrc: '/static/images/rendering.png',
    from: 'Sep 2020',
    to: 'Dec 2020',
    keywords: ['C++', 'Nori', 'Computer Graphics'],
  },
  {
    title: 'Strater',
    description: `Contributed to initial development of Strater, a one-stop DeFi strategy hub for the Sui ecosystem.`,
    imgSrc: '/static/images/strater.png',
    href: 'https://www.strater.xyz',
    from: 'Jan 2024',
    to: 'Feb 2024',
    keywords: ['TypeScript', 'Next.js'],
  },
]

export default projectsData
