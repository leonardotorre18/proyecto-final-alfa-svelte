<script>
  import { getCurrentSong } from "../context/song.svelte";

  const song = $derived(getCurrentSong());
  
  let audio = $state()
  const handlerPlay = () => {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }
</script>

<div class="bg-white flex">
  {#if song}
    <div class="w-20 h-20">
      <img
        src={song.album.image.url}
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
    <div class="text-left p-3">
      <p class="font-semibold">{song.title}</p>
      <p class="opacity-60 text-sm">{song.author.name}</p>
    </div>
    <div class="flex-1">
      <audio src={song.audio.url} bind:this={audio} autoplay></audio>
      <button onclick={handlerPlay}>
        play
      </button>
    
    </div>
  {:else}
    ninguna cancioón selecionada
  {/if}
</div>
