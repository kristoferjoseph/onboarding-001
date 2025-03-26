import Movie from './Movie'

import {useDocuments} from '@sanity/sdk-react'

export default function TestComponent() {
  const {data} = useDocuments({
    filter: '_type == "movie"',
    // search: 'Wall-E',
    batchSize: 10,
    orderings: [{field: '_createdAt', direction: 'desc'}],
  })

  return (
    <div className="movies-container">
      <div className="movie-grid">
        {data?.map((movie) => <Movie key={movie._id} handle={movie} />)}
      </div>
    </div>
  )
}
