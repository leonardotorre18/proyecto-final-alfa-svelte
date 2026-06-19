<script>
  import TrackItem from "$lib/components/TrackItem.svelte";
  import axios from "axios";
  import { tracksState } from "$lib/context/tracks.svelte";
  import TrackListSkeleton from "$lib/components/TrackListSkeleton.svelte";
  import AlbumItem from "$lib/components/AlbumItem.svelte";
  import AlbumListSkeleton from "$lib/components/AlbumListSkeleton.svelte";
    import ArtistItem from "$lib/components/ArtistItem.svelte";

  let resAlbums = axios.get("https://leonardoapi.vercel.app/api/albums");
  let resArtist = axios.get("https://leonardoapi.vercel.app/api/artists")
</script>

<!-- <div class="px-8 pt-4 space-y-4">
  <h2 class="font-bold text-2xl">Escucha Ahora</h2>
  <div>
    <hr />
  </div>
</div> -->

<div class="flex overflow-y-auto h-full">
  <div class="flex-1 overflow-y-auto p-8 space-y-8">

    <section class="space-y-4">
      <h2 class="text-xl font-bold">Top Albums</h2>
      {#await resAlbums}
        <AlbumListSkeleton />
      {:then resAlbums}
        <div class="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
          {#each resAlbums.data.albums as album}
            <AlbumItem {album} />
          {/each}
        </div>
      {/await}
    </section>
  
    <section class="space-y-4">
      <h2 class="text-xl font-bold">Artistas del Momento</h2>
      {#await resArtist}
        <AlbumListSkeleton />
      {:then resArtist}
        <div class="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
          {#each resArtist.data.artists as artist}
            <ArtistItem {artist} />
          {/each}
        </div>
      {/await}
    </section>
  </div>

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
</div>
