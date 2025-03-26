import {
  useProjection,
  useEditDocument,
  useDocument,
  DocumentHandle,
  SanityDocument,
} from '@sanity/sdk-react'
import './movie.css'

interface MovieProjection {
  poster: string | null
}

export default function Movie({handle}: {handle: DocumentHandle<SanityDocument>}) {
  const {data} = useProjection<MovieProjection>({
    document: handle,
    projection: `{
      'poster': poster.asset->url
    }`,
  })

  const poster = data?.poster

  const title = useDocument(handle, 'title')
  const editTitle = useEditDocument(handle, 'title')

  return (
    <article className="movie-card">
      {poster && (
        <div className="movie-poster">
          <img src={poster} alt={`Movie poster for ${title || ''}`} />
        </div>
      )}
      <div className="movie-content">
        <h2 className="movie-title">{title}</h2>
        <input type="text" value={title || ''} onChange={(e) => editTitle(e.target.value)} />
      </div>
    </article>
  )
}
