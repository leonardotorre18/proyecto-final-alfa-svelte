<script>
  import TrackItem from "$lib/components/TrackItem.svelte";
  import TrackListSkeleton from "$lib/components/TrackListSkeleton.svelte";
  import { tracksState } from "$lib/context/tracks.svelte.js";
  import axios from "axios";

  const { params } = $props();

  const res = $derived.by(() => {
    return axios.get(
    "https://leonardoapi.vercel.app/api/albums/" + params.id,
  );
  })
</script>

<div>
  {#await res}
    awaiting
  {:then res}
    <div class="flex z-10 items-center gap-4 sticky top-0 p-8 bg-white">
      <div class="w-48 h-48 rounded-lg overflow-hidden">
        <img
          class="w-full h-full object-cover"
          src={res.data.album.image}
          alt=""
        />
      </div>
      <div class="space-y-1">
        <h1 class="text-3xl font-bold">{res.data.album.title}</h1>
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-full overflow-hidden">
            <img
              src={res.data.album.artist.thumbnail}
              alt=""
              class="w-full h-full"
            />
          </div>
          <p class="text-lg font-light text-gray-400">
            {res.data.album.artist.name}
          </p>
        </div>
      </div>
    </div>

    <div class="p-8 pt-0 flex flex-col gap-4">
      {#each res.data.album.tracks as track}
        <TrackItem track={{
          ...track,
          album: res.data.album,
          artist: res.data.album.artist
        }} />
      {/each}
      <!-- {#if tracksState.list}
        {#each tracksState.list as track}
          <TrackItem {track} />
        {/each}
      {:else}
        <TrackListSkeleton />
      {/if} -->
    </div>
  {/await}
</div>
