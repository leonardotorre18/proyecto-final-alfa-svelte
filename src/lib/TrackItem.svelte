<script>
  import { tracksState } from "../context/tracks.svelte";

  let { track } = $props();

  const handlerClick = () => {
    tracksState.current = track
  };
</script>

<button onclick={handlerClick} class="block">
  <div class="px-3 py-2.5 flex items-center gap-4 bg-linear-to-bl from-gray-50 to-gray-100 rounded-lg cursor-pointer shadow-xs hover:shadow transition-shadow duration-500">
    <div class="w-10 h-10 rounded-lg overflow-hidden">
      <img
        src={track.album.image}
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
    <div class="text-left -space-y-1">
      <p class="font-semibold">{track.title}</p>
      <p class="opacity-60 text-xs text-rose-600 font-bold">{track.artist.name}</p>
    </div>
  </div>
</button>
