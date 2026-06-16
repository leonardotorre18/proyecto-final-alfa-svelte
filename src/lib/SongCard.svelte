<script>
  import { tracksState } from "../context/tracks.svelte";

  let { track } = $props();

  const handlerClick = () => {
    tracksState.currentTrack = track
  };
</script>

<button onclick={handlerClick} class="block">
  <div class="px-3 py-2 flex items-center gap-2">
    <div class="w-10 h-10 rounded-full overflow-hidden">
      <img
        src={track.album.image}
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
    <div class="text-left">
      <p class="font-semibold">{track.title}</p>
      <p class="opacity-60 text-sm">{track.artist.name}</p>
    </div>
  </div>
</button>
