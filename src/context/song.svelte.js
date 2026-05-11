
let currentSong = $state()

$effect.root(() => {
  // @ts-ignore
  const initialSong = JSON.parse(localStorage.getItem('currentSong'))
  currentSong = initialSong
})

// @ts-ignore
export const setCurrentSong = (song) => {
  currentSong = song
  localStorage.setItem('currentSong', JSON.stringify(song))
}

export const getCurrentSong = () => {
  return currentSong
}