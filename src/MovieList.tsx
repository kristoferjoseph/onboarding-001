import {Suspense} from 'react'
import Movie from './Movie'
import {useDocuments} from '@sanity/sdk-react'

export default function MovieList() {
  const {data} = useDocuments({
    filter: '_type == "movie"',
    // search: 'Wall-E',
    batchSize: 10,
    orderings: [{field: '_createdAt', direction: 'desc'}],
  })

  return (
    <div className="movies-container">
      <div className="movie-grid">
        {data?.map((movie) => (
          <Suspense fallback={<div>Loading...</div>}>
            <Movie key={movie._id} handle={movie} />
          </Suspense>
        ))}
      </div>
    </div>
  )
}
