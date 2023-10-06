import { useDispatch } from "react-redux"
import { addTrack } from "../../store/slices/tracks.slice"
import { Link, useNavigate } from "react-router-dom"

const TrackCard = ( { track } ) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddTrack = () => {
    dispatch(addTrack(track))
  }

  const handleArtist = (id) => {
    navigate(`/artist/${id}`)
  }

  return (
    <section className="track_card_countainer">
      <header className="track_card_header">
        <img className="track_card_image" src={track.album.images[0].url} alt="" />
        <article className="track_card_link">
            <Link to={`/track/${track.id}`}><h3>{track.name}</h3></Link>
            <ul className="track_card_ul">
                {
                    track.artists.map(artist => (
                       <li className="track_card_list" onClick={() => handleArtist(artist.id)} key={artist.id}>{artist.name}</li>
                    ))
                }
            </ul>
        </article>
        <footer className="track_card_footer">
            <a className="trak_card_ancla" target="-blank" href={track.external_urls.spotify}>
                <i className='bx bxl-spotify'></i>
            </a>
            <button className="track_card_btn" onClick={handleAddTrack}>
                <i className='bx bx-plus-circle'></i>
            </button>
        </footer>
      </header>
    </section>
  )
}

export default TrackCard
