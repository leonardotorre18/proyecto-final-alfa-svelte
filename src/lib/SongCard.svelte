<script>
  import { setCurrentSong } from "../context/song.svelte";

  let { song } = $props();

  const handlerClick = () => {
    setCurrentSong(song);
  };
</script>

<button onclick={handlerClick} class="block">
  <div class="px-3 py-2 flex items-center gap-2">
    <div class="w-10 h-10 rounded-full overflow-hidden">
      <img
        src={song.album.image.url}
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
    <div class="text-left">
      <p class="font-semibold">{song.title}</p>
      <p class="opacity-60 text-sm">{song.author.name}</p>
    </div>
  </div>
</button>
