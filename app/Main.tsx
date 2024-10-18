import AboutPage from './about/page'
import ExperiencesPage from './experiences/page'
import ProjectsPage from './projects/page'
import { lazy, Suspense } from 'react'
const BackgroundAnimation = lazy(() => import('../components/BackgroundAnimation'))

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="fixed left-10 top-20 z-[-1]">
          <BackgroundAnimation />
        </div>
      </Suspense>
      <AboutPage />
      <ExperiencesPage />
      <ProjectsPage />
    </>
  )
}
