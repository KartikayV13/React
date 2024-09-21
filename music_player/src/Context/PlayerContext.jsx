import { createContext, useEffect, useRef, useState } from "react";
import { atif_Songs,kk_Songs,rahat_Songs, honey_Songs, fav_Songs } from "../assets/assests";

export const PlayerContext = createContext();


const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef()
    const seekBar = useRef()

    const [atifSongs] = useState(atif_Songs);
  const [kkSongs] = useState(kk_Songs);
  const [rahatSongs] = useState(rahat_Songs);
  const [honeySongs] = useState(honey_Songs);
  const [favSongs] = useState(fav_Songs);


  const [currentAlbum, setCurrentAlbum] = useState("atif");
  const [track, setTrack] = useState(atifSongs[8]);


  const[playStatus , setPlayStatus] = useState(false);
  const[time , setTime] = useState({
    currentTime:{
        second:0,
        minute:0,
    },
    totalTime:{
        second:0,
        minute:0,
    }
})


useEffect(() => {
setTimeout(() => {
    audioRef.current.ontimeupdate = ()  => {

        const currentSeconds = Math.floor(audioRef.current.currentTime % 60);
            const currentMinutes = Math.floor(audioRef.current.currentTime / 60);
            const totalSeconds = Math.floor(audioRef.current.duration % 60);
            const totalMinutes = Math.floor(audioRef.current.duration / 60);


        setTime({
              currentTime: {
                    second: currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds,
                    minute: currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes,
                },
                totalTime: {
                    second: totalSeconds < 10 ? `0${totalSeconds}` : totalSeconds,
                    minute: totalMinutes < 10 ? `0${totalMinutes}` : totalMinutes,
                }
        })
    }
}, 1000)
},[audioRef])

const play = () => {
    audioRef.current.play()
    setPlayStatus(true)
}

const pause = () => {
    audioRef.current.pause()
    setPlayStatus(false)
}
  


  const switchAlbum = (album) => {
    setCurrentAlbum(album);
    switch (album) {
      case "atif":
        setTrack(atifSongs[0]);
        break;
      case "kk":
        setTrack(kkSongs[0]);
        break;
      case "rahat":
        setTrack(rahatSongs[0]);
        break;
      case "honey":
        setTrack(honeySongs[0]);
        break;
      case "fav":
        setTrack(favSongs[0]);
        break;
      default:
        setTrack(atifSongs[0]);
    }
  };




const ContextValue = {
audioRef,
seekBg,
seekBar,
track,setTrack,
currentAlbum,
switchAlbum,
playStatus,
setPlayStatus,
time,
setTime,
play,pause,
}


return (
<PlayerContext.Provider value={ContextValue}>
    {props.children}
</PlayerContext.Provider>
)




}

export default PlayerContextProvider