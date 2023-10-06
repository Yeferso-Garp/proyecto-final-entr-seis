import { useEffect, useRef, useState } from "react"
import useFetch from "../hooks/useFetch"
import TrackCard from "../components/HomePage/TrackCard"

const HomePage = () => {

  const [listTracks, getListTracks] = useFetch()
  const [inputValue, setInputValue] = useState('ricardo arjona')
  const [quantityPerPage, setQuantityPerPage] = useState(10)

  useEffect(() => {
    // getTracks('/api/tracks/recommendations?seed_genres=rock')
    getListTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
  }, [inputValue, quantityPerPage])
  
  // console.log(listTracks)

  const inputSearch = useRef()

  const handleSearch = (e) => {
    e.preventDefault()

    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const handleTracksPerPage = e => {
    setQuantityPerPage(e.target.value)
  }

  // const tracksPlaylist = useSelector(store => store.tracks)

  // console.log(tracksPlaylist)

  return (
    <div className="home_page_container"> 
      <div className="home_page_counter">
        <form className="home_page_form" onSubmit={handleSearch}>
          <input className="home_page_input" ref={inputSearch} type="text" placeholder="search artist" />
          <select className="home_page_select" onChange={handleTracksPerPage} defaultValue={10}>
            {
              [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map(tracksPerPage => (
                <option 
                key={tracksPerPage} 
                value={tracksPerPage}
                > {tracksPerPage} </option>
              ))
            }
          </select>
        </form>
        <div className="home_page_track_card">
          {
            listTracks?.tracks.items.map(track =>(
              <TrackCard 
              key={track.id}
              track = { track }
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage
