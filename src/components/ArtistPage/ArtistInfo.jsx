
const ArtistInfo = ( { artist } ) => {
  return (
    <section className="artist_info_countainer">
      <header className="artist_info_header">
        <img className="artist_album_image" src={artist?.images[0].url} alt="" />
      </header>
      <article className="artist_album_counter">
        <h2 className="artist_album_title"> {artist?.name} </h2>
        <ul className="artist_album_list_ul">
            <li className="artist_album_list"><span>Followers:</span><span> {artist?.followers.total} </span></li>
            <li className="artist_album_list"><span>Popularity:</span><span> {artist?.popularity} </span></li>
            <li className="artist_album_list"><span>Genres:</span>
                <ul className="artist_album_list_ul_dos">
                    {
                        artist?.genres.map(genre => (
                            <li key={genre}> {genre} </li>
                        ))
                    }
                </ul>
            </li>
        </ul>
      </article>
    </section>
  )
}

export default ArtistInfo
