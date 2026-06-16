<script>
  import { tracksState } from "../context/tracks.svelte";

  
  // let audio = $state()
  const handlerPlay = () => {
  //   if (audio.paused) {
  //     audio.play()
  //   } else {
  //     audio.pause()
  //   }
  }
</script>

<div class="bg-white flex">
  {#if tracksState.currentTrack}
    <div class="w-20 h-20">
      <img
        src={tracksState.currentTrack.album.image}
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
    <div class="text-left p-3">
      <p class="font-semibold">{tracksState.currentTrack.title}</p>
      <p class="opacity-60 text-sm">{tracksState.currentTrack.artist.name}</p>
    </div>
    <div class="flex-1">
      <audio 
        src={tracksState.currentTrack.audio} 
        // bind:this={audio} 
        autoplay
      ></audio>
      <button onclick={handlerPlay}>
        play
      </button>
    
    </div>
  {:else}
    ninguna cancioón selecionada
  {/if}
</div>
