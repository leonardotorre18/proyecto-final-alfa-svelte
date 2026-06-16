<script>
  import TrackItem from "$lib/TrackItem.svelte";
  import axios from "axios";
    import { tracksState } from "../../context/tracks.svelte";


  let res = axios.get("https://leonardoapi.vercel.app/api/tracks");

  res.then(({data}) => tracksState.list = data.tracks)
</script>

<main>
  {#await res}
    esperando
  {:then res}
    <div class="flex flex-col gap-3 p-8">
      {#each res.data.tracks as track}
        <TrackItem {track} />
      {/each}
    </div>
  {/await}
</main>
