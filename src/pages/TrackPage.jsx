import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import TrackInfo from "../components/TrackPage/TrackInfo"
import TrackRelated from "../components/TrackPage/TrackRelated"
import { useEffect } from "react"

const TrackPage = () => {

  
  const { id } = useParams()
  
  const [ track, getTrack ] = useFetch()
  
  useEffect(() => {
    getTrack(`/api/tracks/${id}`)
  }, [id]);
  
  console.log(track)
  
  const navigate = useNavigate()
  
  const handleBack = () => {
    navigate(-1)
  }
  
  

  return (
    <div>
      <div>
        <div onClick={handleBack}>Back</div>
        <TrackInfo 
        track = {track}
        />

        <TrackRelated 
        artist = {track?.artists[0].name}
        />
        
      </div>
    </div>
  )
}

export default TrackPage

