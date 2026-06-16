
interface Track {
  title: string
  album: {
    title: string
    image: string
  }
  audio: string
  artist: {
    name: string
    image: string
  }
}

export const tracksState = $state<{
  currentTrack: null | Track
}>({
  currentTrack: null
})

$effect.root(() => {
    // @ts-ignore
    const initialTrack = JSON.parse(localStorage.getItem('currentTrack'))
  tracksState.currentTrack = initialTrack
})

// // @ts-ignore
// export const setCurrentSong = (track) => {
//   // currentTrack
//   localStorage.setItem('currentTrack', JSON.stringify(track))
// }

// export const getCurrentSong = () => {
//   // return currentTrack
// }