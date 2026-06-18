<script>
  import TrackItem from "$lib/components/TrackItem.svelte";
  import axios from "axios";
  import { tracksState } from "$lib/context/tracks.svelte";
  import TrackListSkeleton from "$lib/components/TrackListSkeleton.svelte";
  import AlbumItem from "$lib/components/AlbumItem.svelte";

  let resTracks = axios.get("https://leonardoapi.vercel.app/api/tracks");
  resTracks.then(({ data }) => (tracksState.list = data.tracks));

  let resAlbums = axios.get("https://leonardoapi.vercel.app/api/albums");
</script>

<main class="flex flex-col md:flex-row h-full overflow-y-auto">

  <section class="flex-1 overflow-y-auto">
    {#await resAlbums}
      Awaiting
    {:then resAlbums}
      <div class="flex flex-wrap p-8 gap-4">
        {#each resAlbums.data.albums as album}
          <AlbumItem {album} />
        {/each}
      </div>
    {/await}
  </section>

  <section class="flex-1 overflow-y-auto">
    {#await resTracks}
      <TrackListSkeleton />
    {:then resTracks}
      <div class="flex flex-col gap-3 p-8">
        {#each resTracks.data.tracks as track}
          <TrackItem {track} />
        {/each}
      </div>
    {/await}
  </section>

</main>
