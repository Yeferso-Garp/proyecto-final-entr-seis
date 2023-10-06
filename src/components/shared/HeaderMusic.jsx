import { useSelector } from "react-redux"
import TrackList from "./TrackList"
import { useForm } from "react-hook-form"
import usePlaylist from "../../hooks/usePlaylist"
import { useState } from "react"

const HeaderMusic = () => {

  const [playlistModal, setPlaylistModal] = useState(false)

  const trackPlaylist = useSelector(store => store.tracks)  

  const {reset, handleSubmit, register} = useForm()
  const { postPlaylist } = usePlaylist()

  const submit = data => {
    const obj = {
      ...data,
      tracks: trackPlaylist.map(e => ({ id: e.id  }))
    }
    postPlaylist(obj)
    reset({
      title: '',
      to: '',
      message: '',
    })
  }

  const handlePlaylistModal = () => {
    setPlaylistModal(!playlistModal)
  }

  // console.log(trackPlaylist)

  return (
    <header className="gift_countainer">
      <button className="gift_btn_handle" onClick={handlePlaylistModal}>Play List Create</button>
      {
        playlistModal
        && (
          <div className="counter_image">
            <h1 className="gift_title_title">Gift Music</h1>
            <div className="gift_countainer_form">
              <form className="gift_form" onSubmit={handleSubmit(submit)}>
                <div className="gift_form_form">
                  <label htmlFor="title">Title</label>
                  <input className="gift_title" {...register('title')} type="text" id="title" placeholder="title"/>
                </div>
                <div className="gift_form_form">
                  <label htmlFor="to">To</label>
                  <input className="gift_to" {...register('to')} type="text" id="to" placeholder="to"/>
                </div>
                <div className="gift_form_form">
                  <label htmlFor="message">Message</label>
                  <textarea className="gift_message" {...register('message')} id="message" placeholder="message"/>
                </div>
                <div className="gift_total">
                  {
                    trackPlaylist.map(track => (
                      <TrackList 
                        key={track.id}
                        track = { track }
                      />
                    ))  
                  }
                </div>
                <button className="gift_btn">Create</button>
              </form>
            </div>
          </div>
        )
      }
      
    </header>
  )
}

export default HeaderMusic
