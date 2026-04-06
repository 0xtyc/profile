import AboutPage from './about/page'
import ExperiencesPage from './experiences/page'
import ProjectsPage from './projects/page'
import { lazy, Suspense } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'

const ParticleCloud3D = lazy(() => import('../components/backgrounds/ParticleCloud3D'))

export default function Home() {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <ParticleCloud3D />
        </Suspense>
      </ErrorBoundary>
      <AboutPage />
      <ExperiencesPage />
      <ProjectsPage />
    </>
  )
}
