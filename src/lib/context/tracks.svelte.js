export const tracksState = $state({
  current: null,
  list: []
})

$effect.root(() => {
  const initialTrack = JSON.parse(localStorage.getItem('currentTrack'))
  tracksState.current = initialTrack

  $effect(() => {
    localStorage.setItem('currentTrack', JSON.stringify(tracksState.current))
  })
})
