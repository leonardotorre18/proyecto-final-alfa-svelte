<script>
  const { artist } = $props();
</script>

<a href={'/artists/' + artist.id}>
  <div class="overflow-hidden rounded-lg relative group/artistCard">
    <div class="h-46">
      <img src={artist.image} alt="" class="w-full h-full object-cover" />
    </div>
    <div
      class="py-2 px-3.5 absolute z-10 bg-linear-to-bl to-rose-500/60 from-rose-600/30 backdrop-blur-xs text-white -bottom-full group-hover/artistCard:bottom-0 w-full transition-all"
    >
      <p class="font-bold">{artist.name}</p>
    </div>
  </div>
</a>
