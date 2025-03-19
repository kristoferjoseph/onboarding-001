import {type SanityConfig} from '@sanity/sdk'
import {SanityApp} from '@sanity/sdk-react'
import './App.css'
import MovieList from './MovieList'

export function App() {
  // apps can access many different projects or other sources of data
  const sanityConfigs: SanityConfig[] = [
    {
      projectId: 'qaa8enuv',
      dataset: 'production',
    },
  ]

  return (
    <div className="app-container">
      <SanityApp sanityConfigs={sanityConfigs} fallback={<div>Loading...</div>}>
        <MovieList />
      </SanityApp>
    </div>
  )
}

export default App
