interface Project {
  title: string
  description: string
  from?: string
  to?: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Micetopia',
    description: `Developed Micetopia, a mice collecting game inspired by Frogcrypto, that lets users capture a new mouse every 15 minutes. The game has attracted nearly 500 users and gained widespread attention during Taipei Blockchain Week. We also collaborate with akaSwap during the Lunar New Year to offer a special NFT collection.`,
    imgSrc: '/static/images/micetopia.png',
    href: 'https://www.micetopia.xyz',
    from: 'Dec 2023',
    to: 'Present',
  },
  {
    title: 'Strater',
    description: `Contributed to initial development of Strater, a one-stop DeFi strategy hub for the Sui ecosystem.`,
    imgSrc: '/static/images/strater.png',
    href: 'https://www.strater.xyz',
    from: ' 2024',
  },
  {
    title: 'Industrial Image Synthesis for Dataset Augmentation',
    description:
      'Utilized Python and Pytorch to generate industrial images, enhancing classification performance through a novel loss term that guided the distribution of semantic labels for my master thesis.',
    imgSrc: '/static/images/cvl.png',
    from: 'Apr 2021',
    to: 'Nov 2021',
    href: '/static/files/thesis.pdf',
  },
  {
    title: 'Physically Based Rendering',
    description: `Developed ray-tracing illumination integrators and shading functions using C++ within the Nori framework for computer graphics course project.`,
    imgSrc: '/static/images/rendering.png',
    from: 'Sep 2020',
    to: 'Dec 2020',
  },
]

export default projectsData
