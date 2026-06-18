<script>
  import TrackItem from "$lib/components/TrackItem.svelte";
  import axios from "axios";
  import { tracksState } from "$lib/context/tracks.svelte";
  import TrackListSkeleton from "$lib/components/TrackListSkeleton.svelte";
  import AlbumItem from "$lib/components/AlbumItem.svelte";
  import AlbumListSkeleton from "$lib/components/AlbumListSkeleton.svelte";

  let resAlbums = axios.get("https://leonardoapi.vercel.app/api/albums");
</script>

<main class="flex overflow-y-auto h-full">
  <section class="flex-1 overflow-y-auto">
    {#await resAlbums}
      <AlbumListSkeleton />
    {:then resAlbums}
      <div class="flex flex-wrap p-8 gap-4">
        {#each resAlbums.data.albums as album}
          <AlbumItem {album} />
        {/each}
      </div>
    {/await}
  </section>

  <section class="w-md h-full overflow-y-auto">
    {#if tracksState.list}
      <div class="flex flex-col gap-3 p-8">
        {#each tracksState.list as track}
          <TrackItem {track} />
        {/each}
      </div>
    {:else}
      <TrackListSkeleton />
    {/if}
  </section>
</main>
