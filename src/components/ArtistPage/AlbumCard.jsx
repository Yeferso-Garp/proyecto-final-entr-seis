
const AlbumCard = ( { album } ) => {

    const yearReleaseDate = (new Date(album.release_date)).getFullYear()

  return (
    <article className="album_countainer">
      <header className="album_image_header">
        <img className="album_image" src={album.images[0].url} alt="" />
      </header>
      <h4 className="album_title_artist">  { album.name } </h4>
      <span className="album_date"> {yearReleaseDate} </span>
    </article>
  )
}

export default AlbumCard
