export const tracksState = $state({
  currentTrack: null
})

$effect.root(() => {
  const initialTrack = JSON.parse(localStorage.getItem('currentTrack'))
  tracksState.currentTrack = initialTrack

  $effect(() => {
    localStorage.setItem('currentTrack', JSON.stringify(tracksState.currentTrack))
  })
})
