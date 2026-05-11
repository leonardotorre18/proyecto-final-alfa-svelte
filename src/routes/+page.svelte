<script>
  import SongCard from "$lib/SongCard.svelte";

  let songs = fetch("https://api.institutoalfa.org/api/songs")
    .then((res) => res.json())
    .then((data) => data.songs);

</script>

<main>
  {#await songs}
    esperando
  {:then songs}
    {#each songs as song}
      <SongCard {song} />
    {/each}
  {/await}
</main>
