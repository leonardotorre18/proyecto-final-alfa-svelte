<script>
  import Icon from "@iconify/svelte";
  import { tracksState } from "$lib/context/tracks.svelte";

  const audio = $state({
    isPlaying: false,
    htmlTag: null,
    progress: 0,
  });


  $effect(() => {
    const track = tracksState.current;
    audio.htmlTag.src = track.audio;
    const currentTime = localStorage.getItem('currentTime')
    audio.htmlTag.currentTime = currentTime ? currentTime : 0
    audio.htmlTag.play();
    if (audio.htmlTag.paused) audio.isPlaying = false 
    else audio.isPlaying = true;
  });

  const handlerPlay = () => {
    if (audio.htmlTag.paused) {
      audio.isPlaying = true;
      audio.htmlTag.play();
    } else {
      audio.isPlaying = false;
      audio.htmlTag.pause();
    }
  };

  const nextTrack = () => {
    const index = tracksState.list.findIndex(
      (track) => track.id == tracksState.current.id,
    );
    const nextTrack = tracksState.list[index + 1];

    tracksState.current = nextTrack ?? tracksState.list[0];
  };

  $effect(() => {
    const interval = setInterval(() => {
      if (audio.htmlTag) {
        const { duration, currentTime } = audio.htmlTag;
        localStorage.setItem('currentTime', currentTime)
        audio.progress = duration
          ? Math.floor((100 * currentTime) / duration)
          : 0;
      } 
      else audio.progress = 0;

    
    }, 1000);
    return () => clearInterval(interval);
  });
</script>

<div>
  <div class="h-1 w-full">
    <div class="h-full bg-rose-500 transition-all" style="width: {audio.progress}%;"></div>
  </div>
  <div
    class="bg-linear-to-bl from-red-50/20 to-gray-100/80 backdrop-blur flex px-8 py-4 gap-4 items-center"
  >
    {#if tracksState.current}
      <div class="w-14 h-14">
        <img
          onpause={() => (audio.isPlaying = false)}
          onplay={() => (audio.isPlaying = true)}
          src={tracksState.current.album.thumbnail}
          class="w-full h-full rounded-lg object-cover"
          alt=""
        />
      </div>
      <div class="text-left -space-y-1">
        <p class="font-semibold">{tracksState.current.title}</p>
        <p class="opacity-60 text-sm font-bold text-rose-600">
          {tracksState.current.artist.name}
        </p>
      </div>
    {:else}
      <div class="w-14 h-14"></div>
    {/if}
    <div class="flex-1 flex justify-end">
      <audio
        bind:this={audio.htmlTag}
        // autoplay
        // controls
        onended={nextTrack}
      ></audio>
      <button onclick={handlerPlay} class="cursor-pointer">
        {#if audio.isPlaying}
          <Icon icon="material-symbols:pause-rounded" width={32} />
        {:else}
          <Icon icon="material-symbols:play-arrow-rounded" width={32} />
        {/if}
      </button>
      <button onclick={nextTrack} class="cursor-pointer">
        <Icon icon="material-symbols:skip-next-rounded" width={32} />
      </button>
    </div>
  </div>
</div>
