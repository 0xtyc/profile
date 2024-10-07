import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function ProjectsPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            Projects
          </h1>
        </div>
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projectsData.map((proj, i) => (
              <Card project={proj} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
