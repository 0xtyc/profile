import AboutPage from './about/page'
import ExperiencesPage from './experiences/page'
import ProjectsPage from './projects/page'
import { lazy, Suspense } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
const BackgroundAnimation = lazy(() => import('../components/BackgroundAnimation'))

export default function Home() {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <div className="fixed left-0 top-0 z-[-1]">
            <BackgroundAnimation />
          </div>
        </Suspense>
      </ErrorBoundary>
      <AboutPage />
      <ExperiencesPage />
      <ProjectsPage />
    </>
  )
}
