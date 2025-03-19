import { type DocumentHandle } from "@sanity/sdk"
import { useProjection, useEditDocument, useDocument } from "@sanity/sdk-react"
import './movie.css'

export default function Movie({ handle }: {handle: DocumentHandle}) {
  const { results: { poster } }: any = useProjection({
    document: handle,
    projection: `{
      'poster': poster.asset->url
    }`
  })
  const title = useDocument(handle, 'title')
  const editTitle = useEditDocument(handle, 'title')

  return (
    <article className="movie-card">
      {poster && (
        <div className="movie-poster">
          <img
            src={poster}
            alt={`Movie poster for ${title}`}
          />
        </div>
      )}
      <div className="movie-content">
        <h2 className="movie-title">{title}</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => editTitle(e.target.value)}
        />
      </div>
    </article>
  )
}