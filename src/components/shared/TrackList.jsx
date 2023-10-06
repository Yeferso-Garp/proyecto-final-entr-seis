import { useDispatch } from "react-redux"
import { deleteTrack } from "../../store/slices/tracks.slice"

const TrackList = ( { track } ) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteTrack(track))
  }

  return (
    <section className="track_list_countainer">
        <header className="track_card_header">
          <img className="track_card_image" src={track.album.images[0].url} alt="" />  
        </header>
        <article className="track_card_counter">
            <h3 className="track_card_counter_title"> {track.name} </h3>
            <ul className="track_card_counter_ul">
                {
                    track.artists.map(artist => (
                        <li className="track_card_counter_list" key={artist.id}> {artist.name} </li>
                    ))
                }
            </ul>
        </article>
        <footer className="track_card_counter_foouter" onClick={handleDelete}>
            <i className="bx bx-minus-circle"></i>
        </footer>
    </section>

  )
}

export default TrackList
