import TrackCard from "../HomePage/TrackCard"

const ArtistSongsTop = ({ tracks }) => {

  return (
    <section className="artist_song_top_countainer">
        <h3 className="artist_song_top_title">Artist's Top Songs</h3>
        <div className="artist_song_top_counter"> 
        {
          tracks?.map(tarckInfo => (
              <TrackCard 
                key={tarckInfo.id}
                track={tarckInfo}
              />
          ))
        }
        
        </div>
    </section>
  )
}

export default ArtistSongsTop
