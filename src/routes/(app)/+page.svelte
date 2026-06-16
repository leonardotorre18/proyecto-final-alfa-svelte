<script>
  import SongCard from "$lib/SongCard.svelte";
  import axios from "axios";

  let res = axios.get("https://leonardoapi.vercel.app/api/tracks")
</script>

<main>
  {#await res}
    esperando
  {:then res}
    {#each res.data.tracks as track}
      <SongCard {track} />
    {/each}
  {/await}
</main>
