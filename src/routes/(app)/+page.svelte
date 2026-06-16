<script>
  import TrackItem from "$lib/TrackItem.svelte";
  import axios from "axios";

  let res = axios.get("https://leonardoapi.vercel.app/api/tracks");
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
