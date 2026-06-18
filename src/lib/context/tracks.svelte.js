import axios from "axios"

export const tracksState = $state({
  current: null,
  list: []
})

$effect.root(async () => {
  const { tracks } = await axios.get('https://leonardoapi.vercel.app/api/tracks').then(({data}) => data)
  tracksState.list = tracks
  
  const initialTrack = JSON.parse(localStorage.getItem('currentTrack'))
  tracksState.current = initialTrack

  $effect(() => {
    localStorage.setItem('currentTrack', JSON.stringify(tracksState.current))
  })
})

export const changeTrack = (track) => {
  localStorage.setItem('currentTime', 0)
  tracksState.current = track
  localStorage.setItem('currentTrack', JSON.stringify(track))
}
