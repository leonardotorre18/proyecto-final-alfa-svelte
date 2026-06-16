<script>
  import { tracksState } from "../context/tracks.svelte";
  import Icon from "@iconify/svelte";

  const audio = $state({
    isPlaying: false,
    htmlTag: null,
  });

  $effect(() => {
    const track = tracksState.currentTrack
    audio.htmlTag.src = track.audio
    audio.htmlTag.play()
    audio.isPlaying = true
  })

  const handlerPlay = () => {
    if (audio.htmlTag.paused) {
      audio.isPlaying = true;
      audio.htmlTag.play();
    } else {
      audio.isPlaying = false;
      audio.htmlTag.pause();
    }
  };
</script>

<div
  class="bg-linear-to-bl from-red-50/20 to-gray-100/80 backdrop-blur flex px-8 py-4 gap-4 items-center"
>
  {#if tracksState.currentTrack}
    <div class="w-14 h-14">
      <img
        onpause={() => audio.isPlaying = false}
        onplay={() => audio.isPlaying = true}
        src={tracksState.currentTrack.album.image}
        class="w-full h-full rounded-lg object-cover"
        alt=""
      />
    </div>
    <div class="text-left -space-y-1">
      <p class="font-semibold">{tracksState.currentTrack.title}</p>
      <p class="opacity-60 text-sm font-bold text-rose-600">
        {tracksState.currentTrack.artist.name}
      </p>
    </div>
    <div class="flex-1 flex justify-end">
      <audio
        bind:this={audio.htmlTag}
        // autoplay
      ></audio>
      <button onclick={handlerPlay}>
        {#if audio.isPlaying}
          <Icon
            icon="material-symbols:pause-rounded"
            width={32}
          />
        {:else}
          <Icon
            icon="material-symbols:play-arrow-rounded"
            width={32}
          />
        {/if}
      </button>
      <button>
        <Icon 
          icon="material-symbols:skip-next-rounded"
          width={32}
        />
      </button>
    </div>
  {:else}
    ninguna cancioón selecionada
  {/if}
</div>
